import React, { Component } from "react";
import { Row, Col, Image } from 'react-bootstrap';

import '../../css/testingsolution.css';

import img1 from '../../image/19.png';
import img2 from '../../image/20.jpg';
import img3 from '../../image/22.png';
import img4 from '../../image/23.png';
import img5 from '../../image/25.png';
import img6 from '../../image/26.png';
import img7 from '../../image/27.png';
import img8 from '../../image/28.png';
import img9 from '../../image/29.png';
import img10 from '../../image/30.png';
import img11 from '../../image/31.png';

export default class TestingSolution extends Component {
    render() {
        return (
            <div>
                <Row id="header-test">
                    <div style={{ textAlign: "center", marginBottom: "2%" }}>Testing Solution Integration</div>
                </Row>
                <Row style={{fontWeight: 'bold'}}>
                    <div>Offering system integration in compliance with international testing standards</div>
                </Row>
                <Row>
                    <div>Power electronic simulation set using a modern intelligent robot for driving rail transportation systems</div>
                </Row>
                <Row style={{marginTop:'2%'}}>
                    <Col md={5}><Image src={img1} fluid responsive /></Col>
                    <Col md={5}><Image src={img2} fluid responsive /></Col>
                    <Col md={2}><Image src={img3} fluid responsive /></Col>
                </Row>
                <Row style={{marginTop:'2%'}}>
                    <Col md={5}>MOTOR TEST  AND RESEARCH</Col>
                    <Col md={7}>Installing measuring and testing equipment for transformers</Col>
                </Row>
                <Row>
                    <Col md={3}><Image src={img4} fluid responsive /></Col>
                    <Col md={4}><Image src={img5} fluid responsive /></Col>
                    <Col md={5}><Image src={img6} fluid responsive /></Col>
                </Row>
                <Row style={{marginTop:'2%'}}>
                    <Col md={12}>Motor Testing System 55 kW</Col>
                </Row>
                <Row>
                    <Col md={4}><Image src={img7} fluid responsive /></Col>
                    <Col md={4}><Image src={img8} fluid responsive /></Col>
                    <Col md={4}><Image src={img9} fluid responsive /></Col>
                </Row>
                <Row style={{marginTop:'2%'}}>
                    <Col md={4}><Image src={img10} fluid responsive /></Col>
                    <Col md={4}><Image src={img11} fluid responsive /></Col>
                    <Col md={4}>
                        The AGV ROBOT in the Conveyor,
                        including the Pick & Place robot,
                        works with the Vision for Robot, with
                        simulation software. Robot Simulation
                        Software, which helps to create robot
                        movements and create command files
                        for robots to work as intended.
                    </Col>
                </Row>
            </div>
        )
    }
}