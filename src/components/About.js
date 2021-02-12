import React, {useState} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const About = () => {
    const [people, setPeople] = useState([{
      name: "tiffany",
      occupation:"student",
      bio:" i really like this website it helps me share my college books with others",
    },{
      name: "franky",
      occupation:"lawyer",
      bio:" I use this sight to help my peers learn all the law books in our library.",
    },{
      name: "lang",
      occupation:"doctor",
      bio:" i come back and forth to this website to listen to all the medical books others have recorded before me.", 
    }])

    
  return (
    <Jumbotron style={{ display: "flex", margin: "40px", marginRight: "100px", width: "100%", height:"100%", backgroundColor:"white"}}>
      <Container>
        <h1> About page</h1>
        <p>
          {" "}
          This is a webpage for people to create librarys of read books. Where
          it differs from audible is that you the user could take a book and
          read it. You could create/read any book. then share it with other
          people. where i see this shining is college students. It can be
          challenging sometimes to find these books in audible form.{" "}
        </p>
        <div>
        
        </div>
      </Container>
    </Jumbotron>
  );
};

export default About;
