import React, { Component } from "react";
import { Form, Container, Row, Button, Col, Image, column } from 'react-bootstrap';
import messageimage from '../../../image/LevelProcessControlSystem_V1.03.png';
import { FaForward } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

export default class Request extends Component {
    render() {
        return (
            <Container>
                <Row style={{display:'flex', justifyContent: 'center', alignItems: 'center', height: 'auto',marginTop: '3%', marginBottom: '5%', marginLeft: '5%', marginRight: '3%'}}>
                    <Col xs={12} md={5} style={{ justifyContent: 'center', alignItems: 'center', height: 'auto'}}>
                        <Row xs={12} md={12} style={{ marginTop: '5%', marginBottom: '5%', marginLeft: '5%', marginRight: '3%'}}>
                            
                                <Col xs={12} md={12}>
                                FEATURE DETAIL
                                </Col>
                                <Col xs={1} md={1}><FaForward /></Col>
                                <Col xs={11} md={11}>
                                HVAC Control System Lab Kits V1.0 is designed as add-on for co-working with the xMCU development board V1.0 sosuitable undergraduate degree or vocational/diploma education.
                                </Col>
                                <Col xs={1} md={1}><FaForward /></Col>
                                <Col xs={11} md={11}>
                                Cover the lesson comprehensive to Open loop control, Closed loop control such as on/off Control, Hysteresis Control, Conventional PID control, Fuzzy Logic Control.
                                </Col>
                                <Col xs={1} md={1}><FaForward /></Col>
                                <Col xs={11} md={11}>
                                Easy to use, the pin’s function modules are reserved by not wiring so just the coding and then upload into development board.
                                </Col>
                                <Col xs={1} md={1}><FaForward /></Col>
                                <Col xs={11} md={11}>
                                Support for Arduino IDE, LabVIEW, MATLAB/Simulink Software development and other (due to microcontrollers/processing unit series).
                                </Col>
                                <Col xs={1} md={1}><FaForward /></Col>
                                <Col xs={11} md={11}>
                                The package is made from PVC material so portable, compact size, lightweight and dimension 200x500x100 mm.
                                </Col>

                        </Row>
                        <Row xs={12} md={12} style={{justifyContent: 'space-around',}}>
                            {/* <Col xs={12} md={12} style={{ justifyContent: 'center', alignItems: 'bottum-end' }}> */}
                                <Button><FaDownload />          Download Catalog PDF</Button>
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