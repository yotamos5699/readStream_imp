import { useState, useEffect } from "react";

let toFetch = true;

const reqData = {
  matrixID: "6c51690d2dabd73698d602bf034159563d13f9f95848f65f47e102b82e4e491d",
  matrixName: "גג",
  matrixesData: {
    mainMatrix: {
      matrixID: "6c51690d2dabd73698d602bf034159563d13f9f95848f65f47e102b82e4e491d",
      ActionID: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3],
      AccountKey: [
        "6028",
        "6030",
        "6047",
        "6051",
        "6077",
        "6085",
        "6259",
        "6252",
        "6243",
        "6237",
        "6027",
        "6045",
        "6036",
        "6271",
        "6263",
        "6107",
        "6221",
        "6287",
        "6053",
        "6253",
        "6026",
        "6043",
        "6025",
        "6054",
        "6290",
        "6216",
        "6307",
        "6313",
        "6316",
        "6266",
        "6235",
        "6234",
      ],
      DocumentID: [3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1],
      DriverID: [
        "qewr135256edrfh",
        "qewr135256edrfh",
        "qewr135256edrfh",
        6025,
        6025,
        6025,
        "5hdfmnfyh4657x$",
        "5hdfmnfyh4657x$",
        "5hdfmnfyh4657x$",
        "qewr135256edrfh",
        "qewr135256edrfh",
        6025,
        "5hdfmnfyh4657x$",
        "qewr135256edrfh",
        6025,
        "5hdfmnfyh4657x$",
        "qewr135256edrfh",
        6025,
        "qewr135256edrfh",
        "qewr135256edrfh",
        "qewr135256edrfh",
        6025,
        6025,
        "qewr135256edrfh",
        "qewr135256edrfh",
        "qewr135256edrfh",
        6025,
        6025,
        "5hdfmnfyh4657x$",
        "5hdfmnfyh4657x$",
        "qewr135256edrfh",
        "qewr135256edrfh",
      ],
      ActionAutho: [
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
      ],
      itemsHeaders: ["XR100SA", "BB100SA", "KI250SA", "AB500SA", "AB250SA", "SX250SA", "SP250SA", "BH200SA", "KI100SA"],
      itemsNames: [
        "גת XR",
        "גת בייבי",
        "קימבו גדול",
        "אבו מיסמר גדול",
        "אבו מיסמר קטן",
        "גת SPXP",
        "גת SP מובחר",
        "בהרדר 200 גרם",
        "קימבו קטן",
      ],
      cellsData: [
        [2, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [1, 0, 0, 0, 0, 1, 0, 0, 1],
      ],
    },
    changesMatrix: {
      matrixConfig: null,
      matrixGlobalData: null,
      cellsData: [
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
      ],
      docData: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
      metaData: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    },
  },
  Date: "1/9/2023, 9:17:14 PM",
  isBI: true,
};

function App() {
  const [progressStatus, setProgressStatus] = useState("starting....");
  //const [createDocs, setCreateDocs] = useState();
  useEffect(() => {
    if (toFetch) {
      fetchDocs();
      fetchStream();

      toFetch = false;
    }
    return () => {
      console.log("clean up");
    };
  }, []);

  const fetchDocs = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("mode", "no-cors");
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmZXRjaGVkRGF0YSI6eyJzdGF0dXMiOiJ5ZXMiLCJjb25maWdPYmoiOnsiTW9kdWxzUHJlbWlzc2lvbiI6eyJCaXppUm91dGVzIjp7Im10eFByZWZlcmVuY2VzIjp7ImlzRGVmYXVsdCI6ZmFsc2V9LCJpc0FsbG93Ijp0cnVlLCJkcml2ZXJzIjp7ImlzRGVmYXVsdCI6ZmFsc2UsIkFjY291bnRLZXkiOjF9fSwiTWVzc2FnZXMiOnsid2hhdHNBcHAiOnsiaXNBbGxvdyI6dHJ1ZSwicmVtYWluaW5nU3VtIjoyMjJ9fX0sIm10eENvbmZpZyI6eyJkb2N1bWVudERlZiI6eyJpc0RlZmF1bHQiOnRydWUsIkRvY3VtZW50TnVtYmVyIjoiMiJ9LCJkb2NMaW1pdCI6eyJpc0xpbWl0ZWQiOmZhbHNlLCJBbW91bnQiOjB9LCJzdW1MaW1pdCI6eyJpc0xpbWl0ZWQiOmZhbHNlLCJBbW91bnQiOjB9LCJ0YXhEb2NzIjp7IlJlZnVuZCI6eyJpc0FsbG93Ijp0cnVlLCJpc0xpbWl0ZWQiOmZhbHNlLCJBbW91bnQiOjB9LCJEaXNjb3VudCI6eyJpc0FsbG93Ijp0cnVlLCJpc0xpbWl0ZWQiOmZhbHNlLCJBbW91bnQiOjB9LCJPYmxpZ29QYXNzIjpmYWxzZSwiaXNBbGxvdyI6dHJ1ZX19LCJSZXBvcnRzIjp7ImRlZmF1bHRSZXBvcnRzIjp7ImNhc3R1bWVycyI6eyJzb3J0aW5nS2V5Ijoi16fXldeTINee15nXldefIiwic29ydGluZ1ZhbHVlIjoiMzAwIn0sInByb2R1Y3RzIjp7InNvcnRpbmdLZXkiOiLXnteX16HXnyIsInNvcnRpbmdWYWx1ZSI6IjEifX19LCJFcnBDb25maWciOnsiZXJwTmFtZSI6IkhBIiwiQ29tcGFueUtleSI6IjIzZTU0YjRiM2U1NDEyNjExNDBiZGViMjU3NTM4YmExMWM1MTA0NjIwZTYxMjE3ZDVkNjczNWEzYzkzNjFhNWFhYzY3YTdmODUyNzhlNGU1M2YzMDA4NTk4ZDg5MjdmNjhlODllM2UxNjE0N2MxOTRmOTY5NzZiZGYzMDc1ZDU1IiwiQ29tcGFueVNlcnZlciI6ImxiMTEud2l6Y2xvdWQuY28uaWwiLCJDb21wYW55RGJOYW1lIjoid2l6ZGIyMzk0bjUifSwiX2lkIjoiNjM3MTFmN2MyYWNlMTUyMzM3MWMwY2M1IiwidXNlcklEIjoiNjJmZDBjZWVlZGJjODdiYWYzOTc5NzU3IiwiQWNjb3VudFN0YXRlIjoi16DXmted15HXnNen15IiLCJjcmVhdGVkQXQiOiIyMDIyLTExLTEzVDE2OjQ2OjUyLjI0OVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTExLTEzVDE2OjQ3OjIyLjI0NFoiLCJfX3YiOjB9LCJ1c2VySUQiOiI2MmZkMGNlZWVkYmM4N2JhZjM5Nzk3NTcifSwiaWF0IjoxNjY5MjI0MjYxfQ.9FpSBNBHNbToFXph5KZV9YQaZJXlQjj0wBzd8o1pPjk"
    );
    myHeaders.append("filename", "progress");

    const raw = JSON.stringify(reqData);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch("http://localhost:3000/api/createdoc2", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const fetchStream = () => {
    fetch("http://localhost:3000/api/getProgressBar", {
      method: "post",

      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmZXRjaGVkRGF0YSI6eyJzdGF0dXMiOiJ5ZXMiLCJjb25maWdPYmoiOnsidXNzZXJJRCI6eyJyZXF1aXJlZCI6dHJ1ZX0sIkRlZmF1bHREcml2ZXIiOnsiaXNEZWZhdWx0IjpmYWxzZX0sIkRvY3VtZW50RGVmIjp7ImlzRGVmYXVsdCI6dHJ1ZSwiRG9jdW1lbnREZWYiOjEsImlzRmlyc3QiOmZhbHNlfSwiUHJlbWlzc2lvbk10eCI6eyJkb2NMaW1pdCI6eyJpc0xpbWl0ZWQiOnRydWUsIkFtb3VudCI6NTB9LCJzdW1MaW1pdCI6eyJpc0xpbWl0ZWQiOnRydWUsIkFtb3VudCI6MjAwMDB9LCJ0YXhEb2NzIjp0cnVlLCJSZWZ1bmQiOnsiaXNBbGxvdyI6ZmFsc2V9LCJEaXNjb3VudCI6eyJpc0FsbG93Ijp0cnVlLCJpc0xpbWl0ZWQiOmZhbHNlfSwiT2JsaWdvUGFzcyI6eyJpc0FsbG93IjpmYWxzZX0sIkZsYWdlZENhc3R1bWVycyI6eyJpc0FsbG93IjpmYWxzZX19fSwidXNlcklEIjoiNjJmZDBjZWVlZGJjODdiYWYzOTc5NzU3In0sImlhdCI6MTY2MjAyMjU1OX0.eACq69czOOlYd0Y8yDNszPylA-uHdsuujJU1A-KUmp4",

        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        mode: "no-cors",
        fileName: "progress",
        timeLimit: 33333,
      },
    })
      .then((response) => response.body)
      .then((rb) => {
        const reader = rb.getReader();

        return new ReadableStream({
          // type: "bytes",
          start(controller) {
            // The following function handles each data chunk
            function push() {
              // "done" is a Boolean and value a "Uint8Array"
              reader.read().then(({ done, value }) => {
                // If there is no more data to read
                if (done) {
                  console.log("done", done);
                  controller.close();
                  return;
                }
                // Get the data and send it to the bowser via the controller
                controller.enqueue(value);
                // Check chunks by logging to the console
                let decodedValue = new TextDecoder().decode(value);
                setProgressStatus(decodedValue);

                console.log(done, decodedValue);
                push();
              });
            }

            push();
          },
        });
      })
      .then((stream) =>
        // Respond with our stream
        new Response(stream, {
          headers: { "Content-Type": "text/html" },
        }).text()
      )
      .then((result) => {
        // Do things with reult
        console.log(result);
      });
  };

  return (
    <div className="App">
      <div> {progressStatus ? progressStatus : "loading..."}</div>
    </div>
  );
}

export default App;
