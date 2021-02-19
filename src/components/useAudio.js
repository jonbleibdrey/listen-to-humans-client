import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio, setAudio] = useState("");

  function getIt() {
    const audio = document.getElementById("record");

    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true,
      })
      .then((stream) => {
        audio.srcObject = stream;
      })
      .catch(console.error);
  }

  return (
    <div>
        <button style={{backgroundColor:"green", margin:"20px"}} onClick={getIt}>record audio</button>
      <video id="record" controls>
      </video>
    </div>
  );
};

export default useAudio;
