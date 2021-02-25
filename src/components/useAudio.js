import React, { useEffect, useState } from "react";

const useAudio = () => {
  const [audio, setAudio] = useState({
    audio: {
      echoCancellation: true,
    },
    video: true,
  });
  const [tracks, setTracks] = useState(null);
  const [chunks, setChunks] = useState([])

  function handleClick() {
    if (tracks) {
      getItToStop();
    } else {
      getIt();
    }
  }

  function recording(){
    const videoRecording = document.getElementById("video");
    const playback = document.getElementById("videoPlayBack");
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    let mediaRecorder = new mediaRecorder(tracks)

    start.addEventListener('click', (ev)=> {
      mediaRecorder.start()
    })
    stop.addEventListener('click', (ev)=> {
      mediaRecorder.stop()
    })
    mediaRecorder.ondataavailable = function(ev){
      setChunks.push(ev.data)
    }
    mediaRecorder.onstop = (ev)=>{
      let blob = new Blob(chunks,{'type': 'video/mp4'})
      // setChunks([])
      let videoUrl = window.URL.createObjectURL(blob)
      playback.src = videoUrl
    }
  }


  function getIt() {
    const videoRecord = document.getElementById("video");
    
    navigator.mediaDevices
      .getUserMedia(audio)
      .then((stream) => {
        setTracks(stream.getTracks());
        videoRecord.srcObject = stream;
      })
      .catch(console.error);
  }

  function getItToStop() {
    tracks.forEach((track) => track.stop());
    setTracks(null);
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
        onClick={() => {handleClick()}}
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
        id="videoPlayBack"
        controls
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
        onClick={() => {handleClick()}}
      >
        click to stop recording completely
      </button>
    </div>
  );
};

export default useAudio;
