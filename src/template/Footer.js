import React, { Component } from "react";
import { Col, Row, Container, Image, Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../css/footer.css';
// import logo1 from '../image/logo/logo1.png';
// import logo2 from '../image/logo/logo2.png';
import logo3 from '../image/logo/logo3.png';
import logo4 from '../image/logo/logo4.png';

import logoFacebook from '../image/facebook.png'
import logoLine from '../image/line.png'
import logoYoutube from '../image/youtube.png'

import Facebook2 from '../image/facebook2.png'

// var URL1 = "http://www.pg-intergroup.com/";
// var URL2 = "https://www.dspace.com/en/pub/home.cfm";
var URL3 = "https://novalynx.com/store/pc/home2.asp";
var URL4 = "https://www.yokogawa.com/th";

export default class Footer extends Component {
    render() {
        return (
            <div id="footer2">
                <Container id="footer-bule" fluid>
                    <Row id="content">
                        <Col xs={12} md={4}>
                            <div id="about1"> ABOUT US </div>
                            <div id="about2"> PTS COMBINATION Co., Ltd. Is committed to providing
                            complete solution to general research test and monitoring equipment needs
                            of researchers, academicians, evaluators and technicians by supplying high quality,
                            multi-function and state of the art Test and Measurement instruments
                            to government and private research facilities. </div>
                        </Col>
                        <Col xs={12} md={4} id="imgFooter">
                            < Carousel controls={false} indicators={false}>
                                {/* <Carousel.Item>
                                    <a href={URL1} target="_blank" id="dopdown" rel="noopener noreferrer">
                                        <img
                                            src={logo1}
                                            width="60%"
                                            className="d-inline-block align-top"
                                            alt="logo"
                                        />
                                    </a>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <a href={URL2} target="_blank" id="dopdown" rel="noopener noreferrer">
                                        <img
                                            src={logo2}
                                            width="60%"
                                            className="d-inline-block align-top"
                                            alt="logo"
                                        />
                                    </a>
                                </Carousel.Item> */}
                                <Carousel.Item>
                                    <a href={URL3} target="_blank" id="dopdown" rel="noopener noreferrer">
                                        <img
                                            src={logo3}
                                            width="60%"
                                            className="d-inline-block align-top"
                                            alt="logo"
                                        />
                                    </a>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <a href={URL4} target="_blank" id="dopdown" rel="noopener noreferrer">
                                        <img
                                            src={logo4}
                                            width="60%"
                                            className="d-inline-block align-top"
                                            alt="logo"
                                        />
                                    </a>
                                </Carousel.Item>
                            </Carousel >
                        </Col>
                        <Col xs={12} md={4} id="facebookFooter">
                            <a href="https://www.facebook.com/ptscombinationTH" target="_blank" rel="noopener noreferrer">
                                <Image src={Facebook2} id="link2" fluid responsive />
                            </a>
                        </Col>
                    </Row>
                </Container>
                <Container id="footer-black" fluid>
                    <Row id="content">
                        <Col xs={6} md={6}>
                            <Row>
                                <div id="about4"> <NavLink to="/Login">LOGIN</NavLink> | REGISTER </div>
                            </Row>
                        </Col>
                        <Col xs={6} md={6}>
                            <Row>
                                <Col xs={8} md={8} id="about3">
                                    TEL : 065-528-4556 | EMAIL : siamsolar2017@gmail.com
                                </Col>
                                <Col xs={1} md={1}>
                                    <a href="https://www.facebook.com/ptscombinationTH" target="_blank" rel="noopener noreferrer">
                                        <Image src={logoFacebook} id="link" fluid responsive />
                                    </a>
                                </Col>
                                <Col xs={1} md={1}>
                                    <a href="http://line.me/ti/p/0831885535" target="_blank" rel="noopener noreferrer">
                                        <Image src={logoLine} id="link" fluid responsive />
                                    </a>
                                </Col>
                                <Col xs={1} md={1}>
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <Image src={logoYoutube} id="link" fluid responsive />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </div >
        )
    }
}

