import React, { useState} from "react";


const useAudio = () => {
  const [audio, setAudio] = useState({audio: true,
    video: true,});

  function getIt() {
    const audioFun = document.getElementById("record");

    navigator.mediaDevices
      .getUserMedia(
      audio
      )
      .then((stream) => {
        audioFun.srcObject = stream;
      })
      .catch(console.error);
  }

  function getItToStop() {

    navigator.mediaDevices.getUserMedia(audio)
    .then(mediaStream => mediaStream.getTracks().forEach(track => console.log(track))
)
    
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
        onClick={getIt}
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
        id="record"
        autoPlay
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
        onClick={getItToStop}
      >
        click to stop recorder
      </button>
    </div>
  );
};

export default useAudio;
