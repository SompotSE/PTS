import React, { Component } from "react";
import { Col, Row, Container } from 'react-bootstrap';
import Iframe from 'react-iframe'

import '../css/footer.css';
import logo from '../image/imgFooter.png'

export default class Footer extends Component {

    render() {
        return (
            <div >
                {/* <div > */}
                <Container id="footer-bule" fluid>
                    <Row id="content">
                        <Col md={5}>
                            <div id="about1"> ABOUT US </div>
                            <div id="about2"> PTS COMBINATION Co., Ltd. Is committed to providing
                            complete solution to general research test and monitoring equipment needs
                            of researchers, academicians, evaluators and technicians by supplying high quality,
                            multi-function and state of the art Test and Measurement instruments
                            to government and private research facilities. </div>
                        </Col>
                        <Col md={3} id="imgFooter">
                            <img
                                src={logo}
                                width="50%"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Col>
                        <Col md="auto">
                            <div className="con">
                                <Iframe
                                    //url="https://www.facebook.com/ptscombinationTH"
                                    url="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fptscombination&tabs&width=200&height=154&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                    width="100%"
                                    height="auto"
                                    className="responsive-iframe" />
                            </div>
                            {/* <iframe
                                {...this.props}
                                src=""
                                width="340"
                                height="154"
                                style="border:none;overflow:hidden"
                                scrolling="no"
                                frameborder="0"
                                allowTransparency="true"
                                allow="encrypted-media">
                            </iframe> */}
                        </Col>
                    </Row>
                </Container>
                {/* <Row >
                        
                    </Row> */}
                {/* </div> */}
                <div id="footer-black">

                </div>
            </div>
        )
    }
}

