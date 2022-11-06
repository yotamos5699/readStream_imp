import { useState, useEffect } from "react";

const url = "http://localhost:3001";
let toFetch = true;

function App() {
  const [progressStatus, setProgressStatus] = useState("starting....");
  useEffect(() => {
    if (toFetch) {
      fetchStream();
      toFetch = false;
    }
    return () => {
      console.log("clean up");
    };
  }, []);

  const fetchStream = () => {
    fetch(url, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    })
      .then((response) => response.body)
      .then((rb) => {
        const reader = rb.getReader();

        return new ReadableStream({
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
                // Get the data and send it to the browser via the controller
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
        // Do things with result
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
