import React, { Component } from "react";
import { Col, Row, Container } from 'react-bootstrap';

import '../css/footer.css';
import logo from '../image/imgFooter.png'
import logoFacebook from '../image/facebook.png'
import logoLine from '../image/line.png'
import logoYoutube from '../image/youtube.png'

export default class Footer extends Component {
    render() {
        return (
            <div id="footer2">
                <Container id="footer-bule" fluid>
                    <Row id="content">
                        <Col xs={6} md={4}>
                            <div id="about1"> ABOUT US </div>
                            <div id="about2"> PTS COMBINATION Co., Ltd. Is committed to providing
                            complete solution to general research test and monitoring equipment needs
                            of researchers, academicians, evaluators and technicians by supplying high quality,
                            multi-function and state of the art Test and Measurement instruments
                            to government and private research facilities. </div>
                        </Col>
                        <Col xs={6} md={4} id="imgFooter">
                            <img
                                src={logo}
                                width="60%"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </Col>
                        <Col xs={12} md={4} id="facebookFooter">
                            <div class="fb-page" data-href="https://web.facebook.com/ptscombination" data-tabs="" data-width="180" data-height="" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://web.facebook.com/ptscombination" class="fb-xfbml-parse-ignore"><a href="https://web.facebook.com/ptscombination">PTS Combination</a></blockquote></div>
                        </Col>
                    </Row>
                </Container>
                <Container id="footer-black" fluid>
                    <Row id="content">
                        <Col xs={8} md={8}>
                            <Row>
                                <div id="about4"> LOGIN </div>
                                <div id="about3"> | </div>
                                <div id="about4"> REGISTER </div>
                            </Row>
                        </Col>
                        <Col xs={4} md={4}>
                            <Row>
                                <div id="about4"> TEL : 065-528-4556 </div>
                                <div id="about3"> | </div>
                                <div id="about4"> EMAIL : siamsolar2017@gmail.com </div>
                                <a href="https://www.facebook.com/ptscombinationTH" target="_blank" rel="noopener noreferrer" id="link">
                                    <img
                                        src={logoFacebook}
                                        width="100%"
                                        height="100%"
                                        className="d-inline-block align-top"
                                        alt="logo"
                                    />
                                    {/* <Image src={logoFacebook} fluid/> */}
                                </a>
                                <a href="/" target="_blank" rel="noopener noreferrer" id="link">
                                    <img
                                        src={logoLine}
                                        width="100%"
                                        height="100%"
                                        className="d-inline-block align-top"
                                        alt="logo"
                                    />
                                    {/* <Image src={logoLine} fluid/> */}
                                </a>
                                <a href="/" target="_blank" rel="noopener noreferrer" id="link">
                                    <img
                                        src={logoYoutube}
                                        width="100%"
                                        height="100%"
                                        className="d-inline-block align-top"
                                        alt="logo"
                                    />
                                    {/* <Image src={logoYoutube} fluid/> */}
                                </a>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div >
        )
    }
}

