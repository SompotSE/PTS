import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../image/logoPTS.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/header.css';

var URL_TRAINING = "https://www.yokogawa.com/solutions/services/training/";
var URL_SERVICE = "https://www.yokogawa.com/solutions/services/basic-maintenace-services/";

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar expand="md" id="nav-bar" style={{ backgroundColor: "#004F9B", opacity: "100%" }} >
                    <Navbar.Brand href="/" style={{ marginLeft: "10%" }} id="link2">
                        <img
                            src={logo}
                            width="30%"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
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
                <div id="sectionStyle">

                </div >
            </div>
        )
    }
}