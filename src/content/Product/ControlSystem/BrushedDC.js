import React, { Component } from "react";
import { Container, Row, Button, Col, Image } from 'react-bootstrap';
import messageimage from '../../../image/BrushedDCMotorControlSystem_V1.01.png';
import { FaForward } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

import uploadedFileLink from "../../../PDF/BrushedDC.pdf";

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
                            <Col xs={11} md={11}>
                                Brushed DC Motor Control System Lab Kits V1.0 is designed as add-on for co-working with the xMCU development board V1.0 so suitable undergraduate degree or vocational/diploma education.
                                </Col>
                            {/* </Row> 
                                <Row> */}
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11}>
                                Cover the lesson comprehensive to Open loop control, Closed loop control such as Conventional PID control, Fuzzy Logic Control.
                                </Col>
                            {/* </Row>                                                                                        
                                <Row> */}
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11}>
                                Easy to use, the pin’s function modules are reserved by not wiring so just the coding and then upload into development board.
                                </Col>
                            {/* </Row>   
                                <Row> */}
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11}>
                                Support for Arduino IDE, LabVIEW, MATLAB/Simulink Software development and other (due to microcontrollers/processing unit series).
                                </Col>
                            {/* </Row> 
                                <Row> */}
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11}>
                                Learning about principle of electromechanical machine behavior.
                                </Col>
                            {/* </Row> */}
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11}>
                                The permanent magnet has high-power and high-speed properties.
                                </Col>
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11}>
                                The package is made from PVC material so portable, compact size, lightweight and dimension 250x200x50 mm.
                                </Col>

                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around', }}>
                            {/* <Col xs={12} md={12} style={{ justifyContent: 'center', alignItems: 'bottum-end' }}> */}
                            <a href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download="Brochure Brushed DC Motor Control System V1.0.pdf">
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