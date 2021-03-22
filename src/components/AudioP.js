import React, { Component } from "react";
import MicRecorder from "mic-recorder-to-mp3";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class AudioP extends Component {
  constructor() {
    super();
    this.state = {
      isRecording: false,
      blobURL: "",
      isBlocked: false,
    };
  }

  componentDidMount() {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Audio Granted");
        this.setState({ isBlocked: false });
      },
      () => {
        console.log("Audio Denied");
        this.setState({ isBlocked: true });
      }
    );
  }

  start = () => {
    if (this.state.isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          this.setState({ isRecording: true });
          alert("recording")
        })
        .catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        this.setState({ blobURL, isRecording: false });
        alert("stop recording")
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <div
        style={{
          margin: "40px",
          padding: "3%",
          marginLeft: "20%",
          marginBottom: "9%",
          width: "60%",
          height: "100%",
          backgroundColor: "#ebd078",
          border: "1px solid gray",
          fontFamily: "monospace",
          boxShadow: "10px 20px",
          borderRadius: "20px",
        }}
      >
        <h1>Record audio</h1>
        <hr />
        <p>
          Here we can record our book, press record, say what you have to say
          and then stop. That easy, lastly press the vertical dots and download!
        </p>
        <div
          style={{
            margin: "10%",
            padding: "5%",
            marginLeft: "20%",
            width: "40%",
            height: "auto",
            backgroundColor: "white",
            inlineSize: "50%",
            fontFamily: "monospace",
            boxShadow: "5px 10px",
            borderRadius: "20px",
          }}
        >
          <audio
            style={{ marginBottom: "4%", marginLeft: "40px" }}
            src={this.state.blobURL}
            controls="controls"
          />
          <br />
          <button
          id="recording"
            style={{
              boxShadow: "10px 10px black",
              borderRadius: "20px",
              marginLeft: "20%",
            }}
            onClick={this.start}
            disabled={this.state.isRecording}
          >
            Record!
          </button>

          <button
          id="stop"
            style={{
              boxShadow: "10px 10px black",
              borderRadius: "20px",
              marginLeft: "15%",
            }}
            onClick={this.stop}
            disabled={!this.state.isRecording}
          >
            Stop!
          </button>
        </div>
      </div>
    );
  }
}
export default AudioP;
