// import axios from "axios";
// import React, { Component } from "react";
// import {
//   Form,
//   FormGroup,
//   FormControl,
//   Button,
//   Container,
//   Row,
//   Col,
// } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import AudioP from "./AudioP";



// export class AddAudible extends Component {
//   state = {
//     title: "",
//     by: "",
//     language: "",
//     audio_file: "",
//     track: "",
//     errors:[],
   
    
//   };

//   handleOnChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleFileUpload = (e) => {
//     this.setState({
//       track: e.target.files[0],
//     });
//   };

//   handleOnSubmit = (e) => {
//     e.preventDefault();

    
//     const formData = new FormData();
//     formData.append("audible[title]", this.state.title);
//     formData.append("audible[by]", this.state.by);
//     formData.append("audible[language]", this.state.language);
//     formData.append("audible[audio_file]", this.state.audio_file);
//     formData.append("audible[track]", this.state.track);

//     axios
//     .post("http://localhost:3001/audibles", formData)
//     .then((res) => console.log(res, formData))
//     .then((data) => window.location.reload())
//     .catch((err) => this.handleError(err.response.data));
//   };

  

//   handleError=(error)=>{
//     console.log(error)
//     const err = Object.values(error)
//     this.setState({errors: err}) 
    
//   }
   


//   render() {
//     return (
//       <>
//         <div
//           id="addAudible"
//           style={{
//             padding: "3%",
//             marginLeft: "20%",
//             marginTop: "8%",
//             width: "60%",
//             height: "auto",
//             backgroundColor: "white",
//             border: "1px solid black",
//             fontFamily: "monospace",
//             boxShadow: "10px 20px",
//             borderRadius: "20px",
//           }}
//         >
//           <h1>Add Audible</h1>
//           <hr />
//           <h6>
//             Here is where the magic happens, we can add, new, audibles! It's
//             simple you can either import one that you have recorded already. OR,
//             you can record straight from the record section, download it, and
//             put in the file section.
//           </h6>
//         </div>

//         <Container id="container" style={{ margin: "3%", marginLeft: "30%" }}>
//           <Row>
//             <Col xs={12}>
//               <Form onSubmit={this.handleOnSubmit}>
//                 <FormGroup>
//                   <FormControl
//                     type="text"
//                     placeholder="Enter Title"
//                     value={this.state.title}
//                     onChange={this.handleOnChange}
//                     name="title"
//                     style={{
//                       margin: "20px",
//                       borderRadius: "20px",
//                       width: "60%",
//                     }}
//                   ></FormControl>

//                   <FormControl
//                     type="text"
//                     placeholder="Created By"
//                     value={this.state.by}
//                     onChange={this.handleOnChange}
//                     name="by"
//                     style={{
//                       margin: "20px",
//                       borderRadius: "20px",
//                       width: "60%",
//                     }}
//                   ></FormControl>

//                   <FormControl
//                     type="text"
//                     placeholder="Language read in"
//                     value={this.state.language}
//                     onChange={this.handleOnChange}
//                     name="language"
//                     style={{
//                       margin: "20px",
//                       borderRadius: "20px",
//                       width: "60%",
//                     }}
//                   ></FormControl>

//                   <FormControl
//                     type="text"
//                     placeholder="Audible file name"
//                     value={this.state.audio_file}
//                     onChange={this.handleOnChange}
//                     name="audio_file"
//                     style={{
//                       margin: "20px",
//                       borderRadius: "20px",
//                       width: "60%",
//                     }}
//                   ></FormControl>

//                   <Form.File>
//                     <Form.File.Input
                    
//                       type="file"
//                       accept=".mp3,audio/*"
//                       placeholder="Audio file here"
//                       onChange={this.handleFileUpload}
//                       name="track"
//                       style={{ margin: "20px" }}
//                     />
//                   </Form.File>
//                 </FormGroup>
//                 <div id="error" style={{color:"red"}}>
//                     {this.state.errors.map(e=> <ul><li key={this.state.key}>{e}</li></ul> )}
//                 </div>
               
//                 <Button
//                   type="submit"
//                   style={{ boxShadow: "10px 10px black", borderRadius: "20px" }}
//                 >
//                   Submit
//                 </Button>
//                 <Link
//                   to="/"
//                   className="btn btn-danger ml-2"
//                   style={{ boxShadow: "10px 10px black", borderRadius: "20px" }}
//                 >
//                   Cancel
//                 </Link>
//               </Form>
//             </Col>
//           </Row>
//         </Container>
//         <AudioP />
//       </>
//     );
//   }
// }

// export default AddAudible;
