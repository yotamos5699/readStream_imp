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

app.listen(PORT, (err) =>
  console.log(`matrix UI server ${err ? " on" : "listening"} port ${PORT}`)
);

app.get(
  "/",
  async (req, res) => {
    let mssages = ["a", "b", "c", "d", "finish", "wewewe"];
    let num = 0;
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });
    const fileStream = fs.createReadStream(`sample-data.txt`);

    const streamTest = setInterval(() => {
      let progressData = {
        stageName: mssages[num],
        gotStats: true,
        stats: {
          amountFinished: num,
          totalToProcess: 4,
        },
      };
      res.write(JSON.stringify(progressData));
      if (num == 4) {
        clearInterval(streamTest);
        console.log("finished");
        return res.end();
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
