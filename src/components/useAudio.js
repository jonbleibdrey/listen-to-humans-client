import React, { useState } from "react";

const useAudio = () => {
  const [media] = useState({
    audio: true,
    video: true,
  });

  const [playBack, setPlayBack] = useState(null);

  function startRecording() {
    console.log("starting the recording");
    const output = document.getElementById("video");
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const chunks = [];

    navigator.mediaDevices
      .getUserMedia(media)
      .then((flow) => {
        output.srcObject = flow;
        const rec = new MediaRecorder(flow);
        rec.start();
        console.log("start happened", rec.state);
        rec.ondataavailable = function(event) {
          chunks.push(event.data);
        };

        stop.addEventListener("click", (ev) => {
          rec.stop();
          console.log("stop happened", rec.state);
          rec.onstop = function(event) {
            const blob = new Blob(chunks, { type: "video/webm" });
            let videoUrl = window.URL.createObjectURL(blob);
            setPlayBack(videoUrl);
          };
        });
      })
      //the data recorded from video
      .catch(console.error);
  }

  return (
    <div>
      <button
        style={{
          margin: "40px",
          padding: "3%",
          marginLeft: "20%",
          width: "60%",
          height: "100%",
          backgroundColor: "white",
          border: "1px solid gray",
          fontFamily: "monospace",
          boxShadow: "10px 20px",
          borderRadius: "20px",
        }}
        id="start"
      >
        click to activate recorder
      </button>

      <video
        style={{
          margin: "40px",
          padding: "3%",
          marginLeft: "20%",
          width: "60%",
          height: "100%",
          backgroundColor: "white",
          border: "1px solid gray",
          fontFamily: "monospace",
          boxShadow: "10px 20px",
          borderRadius: "20px",
        }}
        id="video"
        autoPlay
        controls
      ></video>

      <video
        style={{
          margin: "40px",
          padding: "3%",
          marginLeft: "20%",
          width: "60%",
          height: "100%",
          backgroundColor: "white",
          border: "1px solid gray",
          fontFamily: "monospace",
          boxShadow: "10px 20px",
          borderRadius: "20px",
        }}
        autoPlay
        controls
        src={playBack}
        id="video2"
      ></video>

      <button
        style={{
          margin: "40px",
          padding: "3%",
          marginLeft: "20%",
          width: "60%",
          height: "100%",
          backgroundColor: "white",
          border: "1px solid gray",
          fontFamily: "monospace",
          boxShadow: "10px 20px",
          borderRadius: "20px",
        }}
        id="stop"
      >
        click to stop recording completely
      </button>
    </div>
  );
};

export default useAudio;
