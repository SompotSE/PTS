import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';

import { FaExternalLinkAlt } from "react-icons/fa";

import '../../css/testmeasur.css';

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
                                <div id="header-sub">Oscilloscopes</div> <FaExternalLinkAlt />
                            </Col>
                        </Row>
                        <Row>
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
                                <div id="header-sub">Power Analyzers and Power Meters</div> <FaExternalLinkAlt />
                            </Col>
                        </Row>
                        <Row>
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
                                <div id="header-sub">Data Acquisition (DAQ)</div> <FaExternalLinkAlt />
                            </Col>
                        </Row>
                        <Row>
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
                                <div id="header-sub">Optical Test Equipment</div> <FaExternalLinkAlt />
                            </Col>
                        </Row>
                        <Row>
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
                                <div id="header-sub">Signal Generators, Sources and Supplies</div> <FaExternalLinkAlt />
                            </Col>
                        </Row>
                        <Row>
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
                                <div id="header-sub">Portable and Handheld Instruments</div> <FaExternalLinkAlt />
                            </Col>
                        </Row>
                        <Row>
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