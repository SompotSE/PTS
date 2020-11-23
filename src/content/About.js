import React, { Component } from "react";
import { Container, Image, Col, Row } from 'react-bootstrap';
import map from '../image/businessOverview.png';
import '../css/about.css';

import AboutProject from './AboutProject';

const busContent = {
    margin: "2%",
    padding: "3%",
    marginLeft: "3%",
    height: "fit-content",
    backgroundColor: "aliceblue",
    opacity: "100%",
    borderRadius: "5%"
};
var contentDetail = {
    fontSize: "calc(0.35vh + 0.95vw)"
    //fontSize: "calc(0.65vh + 0.95vw)"
    //fontSize: '100%'
};
const busHaeder = {
    backgroundColor: "aliceblue",
    opacity: "100%",
    width: "fit-content",
    padding: "1%",
    fontSize: "130%",
    fontWeight: "bold"
}
const project = {
    color: "#2467A9",
    opacity: "100%",
    width: "fit-content",
    padding: "1%",
    fontSize: "130%",
    fontWeight: "bold"
}
export default class About extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        if (window.innerWidth < 768) {
            contentDetail = {
                fontSize: '100%'
            };
        } else if (window.innerWidth < 1025) {
            contentDetail = {
                fontSize: "calc(0.65vh + 0.95vw)"
            };
        } else {
            contentDetail = {
                fontSize: "calc(0.35vh + 0.95vw)"
            };
        }
        return (
            <Container>
                <div id="sectionStyle2">
                    <div style={busHaeder}>BUSINESS OVERVIEW</div>
                    <Row>
                        <Col md={7} xs={12}>
                            <Image src={map} style={{ width: "100%", padding: "2%" }} fluid responsive />
                        </Col>
                        <Col md={5} xs={12}>
                            <div style={busContent}>
                                {/* <p style={contentDetail}>
                                    PTS COMBINATION Co., Ltd. Is committed to providing
                                    complete solution to general research test and monitoring
                                    equipment needs of researchers, academicians, evaluators
                                    and technicians by supplying high quality, multi-function
                                    and state of the art Test and Measurement instruments to
                                    government and private research facilities.
                                </p>
                                <p style={contentDetail}>
                                    Our company takes pride in the satisfaction-quaranteed
                                    services that we cater to our clients. This is attested by our
                                    customers from almost all government universities and
                                    several government agencies and private entities in Thailand.
                                </p> */}
                                <Row style={contentDetail}>
                                    PTS COMBINATION Co., Ltd. is committed to providing
                                    complete solution to general research test and monitoring
                                    equipment needs of researchers, academicians, evaluators
                                    and technicians by supplying high quality, multi-function
                                    and state of the art test and measurement instruments to
                                    government and private research facilities.
                                </Row>
                                <Row style={contentDetail}>
                                    Our company takes pride in the satisfaction-quaranteed
                                    services that we cater to our clients. This is attested by our
                                    customers from almost all government universities and
                                    several government agencies and private entities in Thailand.
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div style={project}>PROJECT REFERENCE</div>
                <Container>
                    <AboutProject />
                </Container>

            </Container>
        )
    }
}