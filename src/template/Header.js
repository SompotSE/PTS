import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Col, Row, Container, Image } from 'react-bootstrap';
// import {Container} from 'react-bootstrap';


import { NavLink } from 'react-router-dom';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import logo from '../image/logoPTS.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import cover1 from '../image/cover1.jpg'
import cover2 from '../image/cover2.jpg'
import cover3 from '../image/cover3.jpg'
import cover4 from '../image/cover4.jpg'
import '../css/header.css';

var URL_TRAINING = "https://www.yokogawa.com/solutions/services/training/";
var URL_SERVICE = "https://www.yokogawa.com/solutions/services/basic-maintenace-services/";
var URL_DIGITAL = "https://www.dspace.com/en/pub/home.cfm";
var URL_METROLOGICAL = "https://novalynx.com/store/pc/home2.asp";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            dropdownOpen2: false
        }
    }

    toggle(e) {
        if (e.target.className !== "dropdown-toggle nav-link") {
            this.setState({
                dropdownOpen: !this.state.dropdownOpen
            });
        }
    }

    toggle2(e) {
        console.log(e.target.className);
        console.log(this.state.dropdownOpen2, " this.state.dropdownOpen2")
        if (e.target.className !== "dropdown-toggle nav-link") {
            this.setState({
                dropdownOpen2: !this.state.dropdownOpen2
            });
        }
    }

    render() {
        console.log(window.location.pathname, "testtttttttttt");
        var sty_home = {};
        var sty_about = {};
        var sty_product = "nav-Header";
        var sty_sub_product1 = {};
        var sty_sub_product2 = {};
        var sty_sub_product3 = {};
        var sty_contact = {};
        if (window.location.pathname === "/") {
            sty_home = { color: "#C7F50A" };
        } else if (window.location.pathname === "/About") {
            sty_about = { color: "#C7F50A" };
        } else if (window.location.pathname === "/Product/TestAndMeasurement") {
            sty_product = "nav-Header1";
            sty_sub_product1 = { color: "#C7F50A" };
        } else if (window.location.pathname === "/Product/Labpts") {
            sty_product = "nav-Header1";
            sty_sub_product2 = { color: "#C7F50A" };
        } else if (window.location.pathname === "/Product/TestingSolutionIntegration") {
            sty_product = "nav-Header1";
            sty_sub_product3 = { color: "#C7F50A" };
        } else if (window.location.pathname === "/Contact") {
            sty_contact = { color: "#C7F50A" };
        }
        return (
            // <div>

            <Container fluid>
                {window.innerWidth < 630 ?
                    <Navbar expand="sm" id="nav-bar" style={{ backgroundColor: "#004F9B", opacity: "100%", zIndex: "900" }} expanded={this.state.dropdownOpen}>
                        <Col id="imgLogo">
                            <img
                                src={logo}
                                width="20%"
                                height="auto"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                                style={{ paddingBottom: "0.3%", paddingTop: "0.3%", paddingLeft: "5%" }}
                            />
                        </Col>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={(e) => this.toggle(e)} />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" style={{ width: "110%" }} onClick={(e) => this.toggle(e)}>
                                <NavLink to="/" id="nav-Header" style={sty_home}>HOME</NavLink >
                                <NavLink to="/About" id="nav-Header" style={sty_about}>ABOUT US</NavLink>
                                <NavDropdown title="PRODUCT" id={sty_product} style={{ paddingLeft: "2%", paddingRight: "2%" }} >
                                    <NavLink to="/Product/TestAndMeasurement" id="dopdown" style={sty_sub_product1}>Test & Measuremwnt Product</NavLink>
                                    <NavLink to="/Product/Labpts" id="dopdown" style={sty_sub_product2}>LABPTS+</NavLink>
                                    <a href={URL_DIGITAL} target="_blank" id="dopdown" rel="noopener noreferrer">Digital Signal Processing and Control Engineering</a>
                                    <NavLink to="/Product/TestingSolutionIntegration" id="dopdown" style={sty_sub_product3}>Testing Solution Integration</NavLink>
                                    <a href={URL_METROLOGICAL} target="_blank" id="dopdown" rel="noopener noreferrer">Metrological Sensors & Systems</a>
                                </NavDropdown>
                                <a href={URL_TRAINING} target="_blank" id="nav-Header" rel="noopener noreferrer">TRAINING</a>
                                <a href={URL_SERVICE} target="_blank" id="nav-Header" rel="noopener noreferrer">SERVICE</a>
                                <NavLink to="/Contact" id="nav-Header" style={sty_contact}>CONTACT US</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    :
                    <Navbar expand="sm" id="nav-bar" style={{ backgroundColor: "#004F9B", opacity: "100%", zIndex: "900" }} expanded={this.state.dropdownOpen}>
                        <Col id="imgLogo">
                            <img
                                src={logo}
                                width="20%"
                                height="auto"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                                style={{ paddingBottom: "0.3%", paddingTop: "0.3%", paddingLeft: "5%" }}
                            />
                        </Col>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={(e) => this.toggle2(e)} />
                        <Navbar.Collapse id="basic-navbar-nav" onClick={(e) => this.toggle2(e)}>
                            <Nav className="mr-auto" style={{ width: "110%" }}>
                                <NavLink to="/" id="nav-Header" style={sty_home}>HOME</NavLink >
                                <NavLink to="/About" id="nav-Header" style={sty_about}>ABOUT US</NavLink>
                                <NavDropdown title="PRODUCT" id={sty_product} style={{ paddingLeft: "2%", paddingRight: "2%" }} active={this.state.dropdownOpen2}>
                                    <NavLink to="/Product/TestAndMeasurement" id="dopdown" style={sty_sub_product1}>Test & Measuremwnt Product</NavLink>
                                    <NavLink to="/Product/Labpts" id="dopdown" style={sty_sub_product2}>LABPTS+</NavLink>
                                    <a href={URL_DIGITAL} target="_blank" id="dopdown" rel="noopener noreferrer">Digital Signal Processing and Control Engineering</a>
                                    <NavLink to="/Product/TestingSolutionIntegration" id="dopdown" style={sty_sub_product3}>Testing Solution Integration</NavLink>
                                    <a href={URL_METROLOGICAL} target="_blank" id="dopdown" rel="noopener noreferrer">Metrological Sensors & Systems</a>
                                </NavDropdown>
                                <a href={URL_TRAINING} target="_blank" id="nav-Header" rel="noopener noreferrer">TRAINING</a>
                                <a href={URL_SERVICE} target="_blank" id="nav-Header" rel="noopener noreferrer">SERVICE</a>
                                <NavLink to="/Contact" id="nav-Header" style={sty_contact}>CONTACT US</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                }
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
                {/* <Navbar color="light" light expand="md" right>
                <NavbarBrand>ระบบการจัดการ</NavbarBrand>
                <NavbarToggler />
                <Collapse navbar>
                    <Nav className="ml-auto" >
                        <NavItem id="spacetop">
                            <NavLink to="/" className="fonthead">หน้าหลัก</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/howto" className="fonthead">วิธีการใช้งาน</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/monitoring/undefined" className="fonthead">การตรวจสอบ</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/dashboard/undefined" className="fonthead">แผงควบคุม</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/notification/undefined/undefined/undefined/undefined/undefined" className="fonthead">ระบบแจ้งเตือน</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/history/undefined/undefined/undefined/" className="fonthead">ประวัติย้อนหลัง</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/setlocation" className="fonthead">ตั้งค่าอุปกรณ์</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <this.sh_profile />
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem divider />
                                <DropdownItem className="layoutbutre">
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar> */}
            </Container>
            //      <div id="sectionStyle">
            // </div >
            // </div>
        )
    }
}