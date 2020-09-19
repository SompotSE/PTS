import React, { Component } from "react";
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

var URL_DIGITAL = "https://www.dspace.com/en/pub/home.cfm";
var URL_METROLOGICAL = "https://novalynx.com/store/pc/home2.asp";

export default class TestMeasur extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={3} md={4}>
                        <ListGroup defaultActiveKey="/TestAndMeasurement" >
                            <ListGroup.Item action href="/Product/TestAndMeasurement">Test & Measurement Product</ListGroup.Item>
                            <ListGroup.Item action href="/Product/Labpts">LABPTS+</ListGroup.Item>
                            <ListGroup.Item action href={URL_DIGITAL} target="_blank">Digital Signal Processing and Control Engineering</ListGroup.Item>
                            <ListGroup.Item action href="/Product/TestingSolutionIntegration">Testing Solution Integration</ListGroup.Item>
                            <ListGroup.Item action href={URL_METROLOGICAL} target="_blank">Metrological Sensors & Systems</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8} md={8}>

                    </Col>
                </Row>
            </Container>
        )
    }
}