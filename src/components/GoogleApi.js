import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

const GoogleApi = () => {
    return (
        <Container>
            <Row>
        <Col xs={6}>
        <div id="googleApi">
            <img style={{height:"50%", width:"35%", margin:"5%", marginLeft:"25%"}} src="../google.JPG" alt="google" roundedCircle/>
        </div>
        </Col>
        <Col xs={6}>
        <div id="googleApi">
            <img style={{height:"50%", width:"35%", margin:"5%", marginLeft:"25%"}} src="../google.JPG" alt="google" roundedCircle/>
        </div>
        </Col>
            </Row>
        </Container>
    )
}

export default GoogleApi
