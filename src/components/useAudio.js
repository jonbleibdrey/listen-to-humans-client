import React, { useState } from "react";


const useAudio = () => {
  
  const [media] = useState({
    audio: false,
    video: true
  })
  const [chunk, setChunk] = useState(null)
  const [medRecorder, setMedRecorder] = useState([])
  const [tracks, setTracks] = useState(null)
  
  

  function startRecording(){
    console.log("starting the recording")

    navigator.mediaDevices.getUserMedia(media)
    .then(flow => {
      //to get camera to go
      setTracks(flow.getTracks())
      const output = document.getElementById('video')
      output.srcObject = flow
      //to start media recorder to start
      const rec = new MediaRecorder(flow)
      rec.start()
      setMedRecorder(rec)
      //the data recorded from video
      rec.ondataavailable = function(event) {
        setChunk(event.data)

      }})
    .catch(console.error)
  }
  
 
  function stopRecording(){
    //stop recording
    tracks.forEach((track) => {
      track.stop()
    })

    medRecorder.stop()
    medRecorder.onstop = function(e) {
      // //gets the data and makes a new blob or binary large object we pass in the chunk array and define what kinda of data it is
      // var blob = new Blob([chunk],{'type': 'video/webm; codecs=vp8'})
      // //let blob = new MediaSource([chunk],{'type': 'video/webm; codecs=vp8'})
      // //then we take the blob we created and we convert it to object url
      // var vidUrl = window.URL.createObjectURL(blob);
      // // then grab the video tag and we attach videourl to medSave src or video playback
      const medSave = document.getElementById('video2')
      medSave.src = ""
      
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
        > 
        <source
        id="video2">
        </source> 
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
