import React, { Component } from "react";
import { Form, Container, Row, Button, Col, Image, column } from 'react-bootstrap';
import messageimage from '../../../image/messageImage_1595235288133.jpg';
import { FaForward } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

export default class Request extends Component {
    render() {
        return (
            <Container>
                <Row style={{display:'flex', justifyContent: 'center', alignItems: 'center', height: 'auto',marginTop: '3%', marginBottom: '5%', marginLeft: '5%', marginRight: '3%'}}>
                    <Col xs={12} md={5} style={{ justifyContent: 'center', alignItems: 'center', height: 'auto'}}>
                        <Row xs={12} md={12} style={{ marginTop: '5%', marginBottom: '5%', marginLeft: '5%', marginRight: '3%'}}>
                            {/* <Row> */}
                                <Col xs={12} md={12}>
                                    FEATURE DETAIL
                                </Col>
                            {/* </Row> */}
                            {/* <Row> */}
                                <Col xs={1} md={1}><FaForward /></Col>
                                <Col xs={11} md={11}>
                                    Educational experiment kit that is produced to demonstrate circuit connection and to find properties of electronic devices. There are electronic devices installed inside the PVC box or inside the bag. Portable and easy to move There are devices used in the experiment such as resistors, capacitors, diodes, transistors, SCR, LED, Op-amp, IC555 etc. 
                                </Col>
                                {/* </Row> 
                                <Row> */}
                                <Col xs={1} md={1}><FaForward /></Col>
                                <Col xs={11} md={11}>
                                    Learn how electronic devices work
                                </Col>
                                {/* </Row>                                                                                        
                                <Row> */}
                                <Col xs={1} md={1}><FaForward /></Col>
                                <Col xs={11} md={11}>
                                    Learn to read electronic devices.
                                </Col>
                                {/* </Row>   
                                <Row> */}
                                <Col xs={1} md={1}><FaForward /></Col>
                                <Col xs={11} md={11}>
                                    Learn to connect electronic devices.
                                </Col>
                                {/* </Row> 
                                <Row> */}
                                <Col xs={1} md={1}><FaForward /></Col>
                                <Col xs={11} md={11}>
                                    Learn to measure electronic devices
                                </Col>
                            {/* </Row> */}

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