import React, { Component } from "react";
import { Col, Row, Container, Image } from 'react-bootstrap';

import '../css/footer.css';
import logo from '../image/imgFooter.png'
import logoFacebook from '../image/facebook.png'
import logoLine from '../image/line.png'
import logoYoutube from '../image/youtube.png'

import Facebook2 from '../image/facebook2.png'

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
                            <img
                                src={logo}
                                width="60%"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
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
                                <div id="about4"> LOGIN | REGISTER </div>
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
                                    <a href="/" target="_blank" rel="noopener noreferrer">
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

