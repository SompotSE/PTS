import React, { Component } from "react";
import { Container, Row, Button, Col, Image } from 'react-bootstrap';
import messageimage from '../../../image/messageImage_1595269038746.jpg';
import { FaForward } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

import uploadedFileLink from "../../../PDF/EmbeddedLearning.pdf"

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
                                xMCU Development Board V1.0 is designed as the multifunction embedded learning set so suitable undergraduate degree or vocational/diploma education.
                                </Col>
                            {/* </Row> 
                                <Row> */}
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11}>
                                Cover the lesson comprehensive to analog input/output, digital input/output, I2C/SPI/RS232/RS485 communication and motors control interface.
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
                                Support for Arduino IDE, LabVIEW, MATLAB/Simulink Software development and other (due to microcontrollers/ processing unit series).
                                </Col>
                            {/* </Row> 
                                <Row> */}
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11}>
                                Microcontroller/Processing unit support such as Arduino, PIC, MCS-51, ARM, STM and other (apart from Arduin processing should be use pin mapping adapt shield).
                                </Col>
                            {/* </Row> */}
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11}>
                                In addition, xMCU Dev. BoardV1.0 can interface with control system lab kits.
                                </Col>
                            <Col xs={1} md={1}><FaForward /></Col>
                            <Col xs={11} md={11}>
                                The package is made from PVC material so portable, compact size, lightweight and dimension 350x280x110 mm
                                </Col>

                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around', }}>
                            {/* <Col xs={12} md={12} style={{ justifyContent: 'center', alignItems: 'bottum-end' }}> */}
                            <a href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download="Brochure xMCU Development Board V1.0_s.pdf">
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