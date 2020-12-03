import React, { Component } from "react";
import { Container, Row, Button, Col, Image } from 'react-bootstrap';
import messageimage from '../../../image/messageImage_1595235266023.jpg';
import { FaForward } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

import uploadedFileLink from "../../../PDF/BasicAnalog.pdf"

export default class Request extends Component {
    render() {
        return (
            <Container>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto', marginTop: '3%', marginBottom: '5%', marginLeft: '5%', marginRight: '3%' }}>
                    <Col xs={12} md={5} style={{ justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
                        <Row xs={12} md={12} style={{ marginTop: '5%', marginBottom: '5%', marginLeft: '5%', marginRight: '3%' }}>
                            {/* <Row> */}
                            <Col xs={12} md={12}>
                                FEATURE DETAIL
                                </Col>
                            {/* </Row> */}
                            {/* <Row> */}
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11} >
                                The student should have the following skills to pursue Analog System Lab: Basic understanding of electronic circuits, Basic computer skills required to run the simulation tools, Ability to use the oscilloscope, Concepts of gain, bandwidth, transfer function, filters, regulators and wave shaping
                                </Col>
                            {/* </Row> 
                                <Row> */}
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11}>
                                Study the characteristics of negative feedback amplifiers and design of an instrumentation amplifier
                                </Col>
                            {/* </Row>                                                                                        
                                <Row> */}
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11}>
                                Study the characteristics of regenerative feedback system with extension to design an stable and monostable multi vibrator
                                </Col>
                            {/* </Row>   
                                <Row> */}
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11}>
                                Study the characteristics of integrators and differentiator circuits
                                </Col>
                            {/* </Row> 
                                <Row> */}
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11}>
                                Design of Analog Filters
                                </Col>
                            {/* </Row> */}
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11}>
                                Study the parameters of an LDO integrated circuit
                                </Col>
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11}>
                                Study the parameters of a DC-DC Converter using on-boardEvaluation module
                                </Col>

                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around', }}>
                            {/* <Col xs={12} md={12} style={{ justifyContent: 'center', alignItems: 'bottum-end' }}> */}
                            <a href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download="BROHURE BASIC ANALOG ELECRONICS CIRCUITS LAB KITS.pdf">
                                <Button><FaDownload />          Download Catalog PDF</Button>
                            </a>
                            {/* </Col> */}
                        </Row>
                    </Col>
                    <Col xs={12} md={7}>
                        <Image src={messageimage} fluid responsive />
                    </Col>

                </Row>
            </Container>
        )
    }
}