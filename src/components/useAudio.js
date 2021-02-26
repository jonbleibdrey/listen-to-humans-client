import React, { useState } from "react";

const useAudio = () => {
  
  const [media] = useState({
    audio: false,
    video: true
  })
  const [chunk, setChunk] = useState(null)
  const [medRecorder, setMedRecorder] = useState([])

  function startRecording(){
    console.log("we are starting the recording")
    const output = document.getElementById('video')

    navigator.mediaDevices.getUserMedia(media)
    .then(flow => {
      output.srcObject = flow
      const rec = new MediaRecorder(flow)
      rec.start()
      setMedRecorder(rec)

      rec.ondataavailable = function(event) {
        console.log("event data--->",event.data)
        setChunk(event.data)

      }})
    .catch(console.error)
  }
  
 
  function stopRecording(){
    console.log("we made it to the stop recording")
    console.log("-->chunk", chunk)
    const medSave = document.getElementById('video2')
    medRecorder.stop()
    medRecorder.onstop = function(e) {
      console.log("we made it to the stop")
      let blob = new Blob([chunk],{'type': 'video/webm; codecs=vp8'})
      let videoUrl = window.URL.createObjectURL(blob);
      console.log(videoUrl)
      medSave.src = videoUrl
      
    }
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
        onClick={startRecording}
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
        id="video2"
        autoPlay
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
        onClick={stopRecording}
      >
        click to stop recording completely
      </button>
    </div>
  );
};

export default useAudio;
