import React, { Component } from "react";
import { Form, Container, Row, Button, Col, Image, column } from 'react-bootstrap';
import messageimage from '../../../image/ExperimentalSmartBatteryManagementSystemset.png';
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
                                Experimental Smart Battery Management System set is designed as the  electric vehicle learning set so suitable undergraduate degree or vocational/diploma education. 
                                </Col>
                                <Col xs={1} md={1}><FaForward /></Col>
                                <Col xs={11} md={11}>
                                Cover the lesson comprehensive to electric vehicle system such as batter power supply, battery charger. electromechanical machine in automobile and sensor system, battery management, principle charger system.
                                </Col>
                                <Col xs={1} md={1}><FaForward /></Col>
                                <Col xs={11} md={11}>
                                Support for software development or coding by simulation as electronic control unit (ECU)
                                </Col>
                                <Col xs={1} md={1}><FaForward /></Col>
                                <Col xs={11} md={11}>
                                In addition, Experimental Smart Battery Management System set can interface with xMCU Development Board V1.0 for self-design and development about the electric vehicle system.
                                </Col>
                                <Col xs={1} md={1}><FaForward /></Col>
                                <Col xs={11} md={11}>
                                Experimental Smart Battery Management System set can integrate learning with electric vehicle Lab kits.
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