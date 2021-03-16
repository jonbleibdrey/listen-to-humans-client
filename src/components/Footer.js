import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter} from 'react-icons/fi';


const Footer = () => {
  return (
    <ReactBootStrap.Navbar expand="lg" bg="dark" variant="dark" >
      <ReactBootStrap.Navbar.Brand href="/">
        Read By Humans
      <AiOutlineFacebook style={{margin:'5%'}} onClick={()=>{ alert('you went to facebook'); }}/>
      <AiOutlineInstagram style={{margin:'5%'}} onClick={()=>{ alert('you went to instagram'); }}/>
      <FiTwitter style={{margin:'5%'}} onClick={()=>{ alert('you went to twitter'); }}/>
     
      </ReactBootStrap.Navbar.Brand>
      <h6 style={{ marginLeft: "71%", color: "white" }} >
        {" "}
        made by: Jonathan Bleibdrey{" "}
      </h6>
     
    </ReactBootStrap.Navbar>
  );
};

export default Footer;
