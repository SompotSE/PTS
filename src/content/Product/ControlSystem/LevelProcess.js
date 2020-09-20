import React, { Component } from "react";
import { Container, Row, Button, Col, Image } from 'react-bootstrap';
import messageimage from '../../../image/LevelProcessControlSystem_V1.02.png';
import { FaDownload } from "react-icons/fa";

export default class Request extends Component {
    render() {
        return (
            <Container>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto', marginTop: '3%', marginBottom: '5%', marginLeft: '5%', marginRight: '3%' }}>
                    <Col xs={12} md={5} style={{ justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
                        <Row xs={12} md={12} style={{ marginTop: '5%', marginBottom: '5%', marginLeft: '5%', marginRight: '3%' }}>

                            <Col xs={12} md={12}>
                                FEATURE DETAIL
                                </Col>

                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around', }}>
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