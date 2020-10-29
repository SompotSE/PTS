import React, { Component } from "react";
import { Row, Col, Image } from 'react-bootstrap';

import '../../css/testmeasur.css';

export default class TestMeasurIconFor extends Component {
    render() {
        return (
            <Col md={4} lg={3}>
                <Row>
                    <a href={this.props.obj.url} target="_blank" rel="noopener noreferrer" id="img-icon">
                        <Col ><Image src={this.props.obj.icon} style={{width:"80%"}} fluid /></Col>
                    </a>
                    <Col id="text-icon"><a href={this.props.obj.url} target="_blank" rel="noopener noreferrer">{this.props.obj.text}</a></Col>
                </Row>
            </Col>
        )
    }
}