import React, { useEffect, useState } from "react";


const useAudio = () => {
  
  const [media] = useState({
    audio: true,
    video: true
  })
  const [chunk, setChunk] = useState(null)
  const [medRecorder, setMedRecorder] = useState([])
  const [tracks, setTracks] = useState(null)
  const [playBack, setPlayBack] = useState(null)

 

  function startRecording(){
    console.log("starting the recording")

    navigator.mediaDevices.getUserMedia(media)
    .then(flow => {
      //sets tracks so we can stop them
      setTracks(flow.getTracks())
      //to get camera to go
      const output = document.getElementById('video')
      output.srcObject = flow
      //to start media recorder to start
      const rec = new MediaRecorder(flow)
      setMedRecorder(rec)
      rec.start()
      rec.ondataavailable = function(event) {
        const chunk = [event.data]
        const blob = new Blob(chunk,{'type': 'video/webm'})
        setChunk(blob)
      }})
      //the data recorded from video
      .catch(console.error)
    }
    
    
    function stopRecording(){
      //stop recording video stream
      tracks.forEach((track) => {
        track.stop()
      })
      //stop recording mediaRecorder
      medRecorder.stop()
      medRecorder.onstop = function(e) {
        console.log("we hit the stopped function horray")
        setPlayBack(window.URL.createObjectURL(chunk))
      
     
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
        >
        </video>

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
