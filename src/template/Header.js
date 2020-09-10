import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Col, Row, Container, Image } from 'react-bootstrap';
import logo from '../image/logoPTS.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import cover1 from '../image/cover1.jpg'
import cover2 from '../image/cover2.jpg'
import cover3 from '../image/cover3.jpg'
import cover4 from '../image/cover4.jpg'
import '../css/header.css';

var URL_TRAINING = "https://www.yokogawa.com/solutions/services/training/";
var URL_SERVICE = "https://www.yokogawa.com/solutions/services/basic-maintenace-services/";

export default class Header extends Component {
    render() {
        return (
            // <div>

                <Container fluid>
                    <Navbar expand="sm" id="nav-bar" style={{ backgroundColor: "#004F9B", opacity: "80%" }} >
                        <Col id="imgLogo">
                            {/* <Navbar.Brand href="/" id="imgLogo"> */}
                            <img
                                src={logo}
                                width="30%"
                                height="auto"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                                style={{paddingBottom: "0.3%", paddingTop: "0.3%", paddingLeft: "5%"}}
                            />

                            {/* <Image src={logo} fluid /> */}

                            {/* </Navbar.Brand> */}
                        </Col>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/" id="nav-Header">HOME</Nav.Link>
                                <Nav.Link href="/ABOUT" id="nav-Header">ABOUT US</Nav.Link>
                                <NavDropdown title="PRODUCT" id="nav-dropdown">
                                    <NavDropdown.Item href="" >Test & Measuremwnt Product</NavDropdown.Item>
                                    <NavDropdown.Item href="" >LABPTS+</NavDropdown.Item>
                                    <NavDropdown.Item href="" >Digital Signal Processing and Control Engineering</NavDropdown.Item>
                                    <NavDropdown.Item href="" >Testing Solution Integration</NavDropdown.Item>
                                    <NavDropdown.Item href="" >Metrological Sensors & Systems</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href={URL_TRAINING} target="_blank" id="nav-Header">TRAINING</Nav.Link>
                                <Nav.Link href={URL_SERVICE} target="_blank" id="nav-Header">SERVICE</Nav.Link>
                                <Nav.Link href="/CONTACT" id="nav-Header">CONTACT US</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    {/* <Row id="header"> */}
                    <Row>
                        <Col >
                            <Image src={cover1} fluid responsive />
                        </Col>
                        <Col >
                            <Image src={cover2} fluid responsive />
                        </Col>
                        <Col >
                            <Image src={cover3} fluid responsive />
                        </Col>
                        <Col >
                            <Image src={cover4} fluid responsive />
                        </Col>
                    </Row>
                </Container>
            //      <div id="sectionStyle">
            // </div >
            // </div>
        )
    }
}