const express = require("express");
const app = express();
const fs = require("fs");
const cors = require(`cors`);
const axios = require("axios");
const { finished } = require("stream");
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.listen(PORT, (err) => console.log(`matrix UI server ${err ? " on" : "listening"} port ${PORT}`));

const progressBar = async (filename, progressData) => {
  console.log("IN PROGRESS BAR --", { filename, progressData });
  const data = progressData;
  let path = "./" + filename + ".json";
  if (fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify(data), { encoding: "utf8", flag: "w" });
  else fs.writeFileSync(path, JSON.stringify(data), { encoding: "utf8" });
};

app.post("/api/post2", async (req, res) => {
  const Filename = req.headers["filename"];
  const TimeLimit = parseInt(req.headers["timelimit"]);

  console.log("IN GET PROGRESS DATA ", { Filename, TimeLimit });
  let path = "./" + Filename + ".json";

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });
  const { id } = await req.body;
  res.status(200);
  let runtime = 0;
  let stageName = "";
  let intervals = setInterval(() => {
    console.log("IN GET PROGRESS DATA ", { Filename, TimeLimit, runtime });
    let file_exist = fs.existsSync(path);
    console.log({ file_exist });
    if (file_exist) {
      let result = JSON.parse(fs.readFileSync(path, { encoding: "utf8", flag: "r" }));
      console.log("file exist");

      if (result.stageName == "finish") {
        toBreak = true;
        clearInterval(intervals);
        res.write("finish");
        fs.unlinkSync(path);
        return res.end();
      }
     
      if (result.stageName != stageName) {
        stageName = result.stageName;
        res.write(JSON.stringify(result));
        console.log("file updated");
      }
   
    }

    runtime += 1;

    let limit = TimeLimit ? TimeLimit * 2 : 60;
   
    if (runtime > limit) {
      res.write("to long");
      file_exist && fs.unlinkSync(path);
      clearInterval(intervals);
      return res.end(" out");
    }
  }, 500);
});

app.post(
  "/api/post",
  async (req, res) => {
    console.log("in post !!!");

    let mssages = ["a", "b", "c", "d", "finish", "wewewe"];
    let num = 0;
    // res.writeHead(200, {
    //   "Content-Type": "application/json",
    //   "Cache-Control": "no-cache",
    //   Connection: "keep-alive",
    // });

    // console.log(req);
    let Headers = req.headers;
    let body = await req.body;
    console.log({ body });
    console.log("post ", { Headers });
    //const fileStream = fs.createReadStream(`sample-data.txt`);
    let Filename = req.headers["filename"];
    console.log("IN CCREATE DOCS ", { Filename });
    const streamTest = setInterval(() => {
      let progressData = {
        stageName: mssages[num],
        gotStats: true,
        stats: {
          amountFinished: num,
          totalToProcess: 4,
        },
      };
      progressBar(Filename, progressData);
      if (num == 4) {
        clearInterval(streamTest);
        console.log("finished");
        return res.send({ status: "yes" });
      }
      num += 1;
      console.info("action number ", num, " ", progressData);
    }, 3000);
    //});
  }

  // res.end("finished");
  // fileStream.on("open", () => {
  //   fileStream.pipe(res);
  // });
);
