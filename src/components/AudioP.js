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
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <div>
        <audio style={{marginBottom:"2%"
              }} src={this.state.blobURL} controls="controls" />
        <br/>
        <button style={{boxShadow: "10px 10px black",
              borderRadius: "20px", marginLeft:"5%"}} onClick={this.start} disabled={this.state.isRecording}>
          Record!
        </button>

        <button style={{boxShadow: "10px 10px black",
              borderRadius: "20px", marginLeft:"3%"}} onClick={this.stop} disabled={!this.state.isRecording}>
          Stop!
        </button>

      </div>
    );
  }
}
export default AudioP;
