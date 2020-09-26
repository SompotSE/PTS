import React, { Component } from "react";
import { Container, Row, Button, Col, Image } from 'react-bootstrap';
import messageimage from '../../../image/LevelProcessControlSystem_V1.02.png';
import { FaDownload } from "react-icons/fa";

import uploadedFileLink from "../../../PDF/LevelProcess.pdf";

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
                            <a href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download="Brochure Level  Control System V1.0.pdf">
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