import React, { Component } from "react";
import { Row, Col, Image } from 'react-bootstrap';

import '../css/about.css';

import icon01 from '../image/p1.png';
import icon02 from '../image/p2.png';
import icon03 from '../image/p3.png';
import icon04 from '../image/p4.png';
import icon05 from '../image/p5.png';
import icon06 from '../image/p6.jpg';
import icon07 from '../image/p7.png';
import icon08 from '../image/p8.png';

export default class TestMeasurIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataIcon: [
                {
                    icon: icon01,
                    text: "RAILWAY ELECTRIC TRACTION SIMULATION SYSTEM"
                },
                {
                    icon: icon02,
                    text: "ELECTRIC DRIVE SIMULATION SYSTEM"
                },
                {
                    icon: icon03,
                    text: "RENEWABLE ENGERY LABORATORY"
                },
                {
                    icon: icon04,
                    text: "DYNAMOMETER TEST  BENCH FOR RESEARCH"
                },
                {
                    icon: icon05,
                    text: "DISTRIBUTED CONTROL SYSTEM"
                },
                {
                    icon: icon06,
                    text: "HIGH SPEED DYNAMOMETER TEST  BENCH FOR INDUSTRIAL"
                },
                {
                    icon: icon07,
                    text: "SOLAR RADIATION MAPS OF THAILAND"
                },
                {
                    icon: icon08,
                    text: "INDUSTRIAL 4.0"
                }
            ]
        }
    }

    project_for() {
        return this.state.dataIcon.map((data) => {
            return <Col md={4} lg={4} xs={6} style={{padding: "1%"}}>
                <Row>
                    <Col ><Image src={data.icon} fluid /></Col>
                </Row>
                <Row>
                    <Col id="projectDetail">{data.text}</Col>
                </Row>
            </Col>
            // return <Card style={{ width: '18rem' }}>
            //     <Card.Img variant="top" src={data.icon} />
            //     <Card.Body>
            //         <Card.Title>{data.text}</Card.Title>
            //     </Card.Body>
            // </Card>
        });
    }

    render() {
        return (
            <div>
                <Row>
                    {this.project_for()}
                </Row>
            </div >
        )
    }
}