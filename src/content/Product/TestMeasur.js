import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';

import { FaExternalLinkAlt } from "react-icons/fa";

import '../../css/testmeasur.css';

var URL_OSCILL = "https://tmi.yokogawa.com/solutions/products/oscilloscopes/?_ga=2.170034723.2027970211.1600781934-350063830.1599052082";
var URL_POWER = "https://tmi.yokogawa.com/solutions/products/power-analyzers/?_ga=2.217213205.2027970211.1600781934-350063830.1599052082";
var URL_DATA = "https://tmi.yokogawa.com/solutions/products/data-acquisition-equipment/?_ga=2.215517204.2027970211.1600781934-350063830.1599052082";
var URL_OPTICAL = "https://tmi.yokogawa.com/solutions/products/optical-measuring-instruments/?_ga=2.170503331.2027970211.1600781934-350063830.1599052082";
var URL_SIGNAL = "https://tmi.yokogawa.com/solutions/products/generators-sources/?_ga=2.245474567.2027970211.1600781934-350063830.1599052082";
var URL_PORTABLE = "https://tmi.yokogawa.com/solutions/products/portable-and-bench-instruments/?_ga=2.144804407.2027970211.1600781934-350063830.1599052082";

export default class TestMeasur extends Component {
    render() {
        return (
            <div>
                <Row id="header-test">
                    <div style={{ textAlign: "center", marginBottom: "2%" }}>Test & Measurement</div>
                </Row>
                <Row>
                    <Col md={4} id="col-content">
                        <Row>
                            <Col md={12} sm={12} id="header-row-sub">
                                <a href={URL_OSCILL} target="_blank" id="nav-Header" rel="noopener noreferrer"><div id="header-sub">Oscilloscopes</div></a> <FaExternalLinkAlt />
                            </Col>
                        </Row>
                        <Row style={{ textAlign: "justify"}}>
                            World-class digital oscilloscopes
                            from Yokogawa: The digital
                            oscilloscopes have high-speed
                            sampling and a wide range of
                            bandwidths that can be utilized for
                            design and development of
                            electronic devices. The
                            ScopeCorders have the advantages
                            of both a digital oscilloscope and a
                            multi-channel data recorder.
                        </Row>
                    </Col>
                    <Col md={4} id="col-content">
                        <Row>
                            <Col md={12} sm={12} id="header-row-sub">
                                <a href={URL_POWER} target="_blank" id="nav-Header" rel="noopener noreferrer"><div id="header-sub">Power Analyzers and Power Meters</div></a> <FaExternalLinkAlt />
                            </Col>
                        </Row>
                        <Row style={{ textAlign: "justify"}}>
                            Yokogawa, the world's largest
                            manufacturer of energy and power
                            analyzers and meters, provides a
                            broad choice of digital power
                            analyzers to satisfy all
                            requirements.
                        </Row>
                    </Col>
                    <Col md={4} id="col-content">
                        <Row>
                            <Col md={12} sm={12} id="header-row-sub">
                                <a href={URL_DATA} target="_blank" id="nav-Header" rel="noopener noreferrer"><div id="header-sub">Data Acquisition (DAQ)</div></a> <FaExternalLinkAlt />
                            </Col>
                        </Row>
                        <Row style={{ textAlign: "justify"}}>
                            Yokogawa data acquisition systems
                            give you the most flexibility and
                            power to measure, display, store,
                            and even actuate any number of
                            physical or electrical phenomena.
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} id="col-content">
                        <Row>
                            <Col md={12} sm={12} id="header-row-sub">
                                <a href={URL_OPTICAL} target="_blank" id="nav-Header" rel="noopener noreferrer"><div id="header-sub">Optical Test Equipment</div></a> <FaExternalLinkAlt />
                            </Col>
                        </Row>
                        <Row style={{ textAlign: "justify"}}>
                            Yokogawa offers solutions to
                            measure both traditional and
                            cutting-edge optical components
                            and systems, serving the
                            increasing demand for high
                            capacity fiber lines, and new
                            component technologies.
                        </Row>
                    </Col>
                    <Col md={4} id="col-content">
                        <Row>
                            <Col md={12} sm={12} id="header-row-sub">
                                <a href={URL_SIGNAL} target="_blank" id="nav-Header" rel="noopener noreferrer"><div id="header-sub">Signal Generators, Sources and Supplies</div></a> <FaExternalLinkAlt />
                            </Col>
                        </Row>
                        <Row style={{ textAlign: "justify"}}>
                            For general purpose standalone
                            applications or as core
                            components in a high speed test
                            and measurement system,
                            Yokogawa sources and signal
                            generators are highly accurate and
                            functional.
                        </Row>
                    </Col>
                    <Col md={4} id="col-content">
                        <Row>
                            <Col md={12} sm={12} id="header-row-sub">
                                <a href={URL_PORTABLE} target="_blank" id="nav-Header" rel="noopener noreferrer"><div id="header-sub">Portable and Handheld Instruments</div></a> <FaExternalLinkAlt />
                            </Col>
                        </Row>
                        <Row style={{ textAlign: "justify"}}>
                            Yokogawa's Portable and
                            Handheld Instruments offer a
                            broad range of portable test
                            equipment to fulfill numerous
                            short-term or continuous
                            measurement application
                            requirements.
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}