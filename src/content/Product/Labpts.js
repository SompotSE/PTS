import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../../css/labpts.css';

export default class Labpts extends Component {
    render() {
        return (
            <div>
                <Row style={{margin:"2%"}} >
                    <Col xl={3} md={6} sm={12}>
                        <Row>
                            <Col md={12}><div id="header-content">EDUCATION IN ELECTRONICS AND ELECTRICAL FIELDS</div></Col>
                            <Col md={12}><NavLink to="/Product/Labpts/BasicElectronic"><div id="lab-content">BASIC ELECTRONICS CIRCUITS LAB KITS</div></NavLink></Col>
                            <Col md={12}><NavLink to="/Product/Labpts/BasicAnalog"><div id="lab-content">BASIC ANALOG ELECTRONICS CIRCUITS LAB KITS</div></NavLink></Col>
                        </Row>
                    </Col>
                    <Col xl={3} md={6} sm={12}>
                        <Row>
                            <Col md={12}><div id="header-content">EDUCATION IN EMBEDDED CONTROL SYSTEM FIELDS</div></Col>
                            <Col md={12}><NavLink to="/Product/Labpts/EmbeddedLearning"><div id="lab-content">Embedded Learning Lab Kits for xMCU Dev. Board V1.0</div></NavLink></Col>
                            <Col md={12}><NavLink to="/Product/Labpts/ControlSystem"><div id="lab-content">Control System Lab Kits for xMCU Dev. Board V1.0</div></NavLink></Col>
                            <Col md={12}><div id="lab-content">Industrial Automation Lab Kits for xMCU Dev. Board V2.0</div></Col>
                            <Col md={12}><div id="lab-content">Electrical Vehicle Lab Kits for xMCU Dev. Board V2.0</div></Col>
                            <Col md={12}><div id="lab-content">Internet of Things Learning Lab</div></Col>
                            <Col md={12}><div id="lab-content">Artificial Intelligence Learning Lab</div></Col>
                        </Row>
                    </Col>
                    <Col xl={3} md={6} sm={12}>
                        <Row>
                            <Col md={12}><div id="header-content">EDUCATION IN AUTOMOTIVE CONTROL SYSTEM FIELDS</div></Col>
                            <Col md={12}><NavLink to="/Product/Labpts/Experimental"><div id="lab-content">Experimental Smart Battery Management System set</div></NavLink></Col>
                            <Col md={12}><div id="lab-content">Experimental SBMS AND EV Control System LAB</div></Col>
                            <Col md={12}><div id="lab-content">Experimental LiBAL Battery Management System set</div></Col>
                            <Col md={12}><div id="lab-content">Experimental LiBALBMS and EV Control System LAB</div></Col>
                            <Col md={12}><div id="lab-content">Automotive Simulation Models Learning Lab</div></Col>
                            <Col md={12}><div id="lab-content">Power Electronic Motor Control System LAB</div></Col>
                        </Row>
                    </Col>
                    <Col xl={3} md={6} sm={12}>
                        <Row>
                            <Col md={12}><div id="header-content">EDUCATION IN INDUSTRIAL AND AUTOMATIONS CONTROL SYSTEM FIELDS</div></Col>
                            <Col md={12}><div id="lab-content">Plant Model Temperature Control System LAB</div></Col>
                            <Col md={12}><div id="lab-content">Plant Model Pressure Control System LAB</div></Col>
                            <Col md={12}><div id="lab-content">Plant Model Flow Control System LAB</div></Col>
                            <Col md={12}><div id="lab-content">Smart Plant Model Learning LAB</div></Col>
                            <Col md={12}><div id="lab-content">Distributed Control System Learning LAB </div></Col>
                            <Col md={12}><div id="lab-content">Energy Learning Lab</div></Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}