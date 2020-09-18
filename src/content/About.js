import React, { Component } from "react";
import { Container, Image, Col, Row } from 'react-bootstrap';
import map from '../image/businessOverview.png';
import '../css/about.css';

const busContent = {
    margin: "2%",
    padding: "3%",
    marginLeft: "3%",
    height: "fit-content",
    backgroundColor: "aliceblue",
    opacity: "85%",
    borderRadius: "5%"
};
const contentDetail = {
    fontSize: "calc(0.35vh + 1vw)"
};
export default class About extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Container>
                <div id="sectionStyle">
                    <div id="business">BUSINESS OVERVIEW</div>
                    <Row>
                        <Col md={7} xs={7}>
                            <Image src={map} style={{ width: "100%", margin: "2%" }} fluid responsive />
                        </Col>
                        <Col md={5} xs={5}>
                            <div style={busContent}>
                                <p style={contentDetail}>  
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
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}