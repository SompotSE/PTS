import React, { Component } from "react";
import { Row, Button, Col, Image } from 'react-bootstrap';
import { FaDownload } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import image1 from '../../../image/img1.png';
import image2 from '../../../image/img2.png';
import image3 from '../../../image/img3.png';
import image4 from '../../../image/img4.png';
import image5 from '../../../image/img4.png';
import image6 from '../../../image/img4.png';
import image7 from '../../../image/img4.png';
import image8 from '../../../image/img4.png';

import uploadedFileLink1 from "../../../PDF/BrushedDC.pdf";
import uploadedFileLink2 from "../../../PDF/LevelProcess.pdf";
import uploadedFileLink3 from "../../../PDF/TempProcess.pdf";

const headerContent = {
    backgroundColor: '#2467A9',
    width: '100%',
    textAlign: 'center',
    color: 'aliceblue',
    fontWeight: 'bold',
    height: 'auto',
    padding: '4%',
    borderRadius: '10%',
    marginLeft: '2%',
    marginRight: '2%'
}

const featur = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    backgroundColor: '#EEF3F8',
    marginLeft: '2%',
    marginRight: '2%'
}

const downlode = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    marginLeft: '2%',
    marginRight: '2%'
}

const img = {
    marginLeft: '2%',
    marginRight: '2%'
}

const box = {
    marginTop: "1%"
}

export default class ControlSystem extends Component {
    render() {
        return (
            <div style={{ marginTop: "1%", marginLeft: "10%", marginRight: "10%" }}>
                <Row>
                    <Col xs={12} md={6} lg={3} style={box}>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <div style={headerContent}>Brushed DC Motor Control System V1.0</div>
                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <NavLink to="/Product/Labpts/BrushedDC"><Image src={image1} style={img} fluid responsive /></NavLink>
                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <NavLink to="/Product/Labpts/BrushedDC" style={featur}><Col xs={12} md={12} style={featur}>FEATURE DETAIL</Col></NavLink>
                            <Col xs={12} md={12} style={downlode}>
                                <a href={uploadedFileLink1} target="_blank" rel="noopener noreferrer" download="Brochure Brushed DC Motor Control System V1.0.pdf">
                                    <Button><FaDownload />Download Catalog PDF</Button>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} lg={3} style={box}>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <div style={headerContent}>Level Process Control System V1.0</div>
                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <NavLink to="/Product/Labpts/LevelProcess"><Image src={image2} style={img} fluid responsive /></NavLink>
                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <NavLink to="/Product/Labpts/LevelProcess" style={featur}><Col xs={12} md={12} style={featur}>FEATURE DETAIL</Col></NavLink>
                            <Col xs={12} md={12} style={downlode}>
                                <a href={uploadedFileLink2} target="_blank" rel="noopener noreferrer" download="Brochure Level  Control System V1.0.pdf">
                                    <Button><FaDownload />Download Catalog PDF</Button>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} lg={3} style={box}>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <div style={headerContent}>Temp Process control System V1.0</div>
                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <NavLink to="/Product/Labpts/TempProcess" ><Image src={image3} style={img} fluid responsive /></NavLink>
                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <NavLink to="/Product/Labpts/TempProcess" style={featur}><Col xs={12} md={12} style={featur}>FEATURE DETAIL</Col></NavLink>
                            <Col xs={12} md={12} style={downlode}>
                                <a href={uploadedFileLink3} target="_blank" rel="noopener noreferrer" download="Brochure Temp Process  Control System V1.0.pdf">
                                    <Button><FaDownload />Download Catalog PDF</Button>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} lg={3} style={box}>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <div style={headerContent}>Ball and Beam Control System V1.0</div>
                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <Image src={image4} style={img} fluid responsive />
                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <Col xs={12} md={12} style={featur}>FEATURE DETAIL</Col>
                            <Col xs={12} md={12} style={downlode}><Button><FaDownload />Download Catalog PDF</Button></Col>
                        </Row>
                    </Col>
                    {/* </Row>
                <Row> */}
                    <Col xs={12} md={6} lg={3} style={box}>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <div style={headerContent}>XY Plotter Control System V1.0</div>
                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <Image src={image5} style={img} fluid responsive />
                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <Col xs={12} md={12} style={featur}>FEATURE DETAIL</Col>
                            <Col xs={12} md={12} style={downlode}><Button><FaDownload />Download Catalog PDF</Button></Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} lg={3} style={box}>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <div style={headerContent}>Ball and Plate Control System V1.0</div>
                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <Image src={image6} style={img} fluid responsive />
                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <Col xs={12} md={12} style={featur}>FEATURE DETAIL</Col>
                            <Col xs={12} md={12} style={downlode}><Button><FaDownload />Download Catalog PDF</Button></Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} lg={3} style={box}>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <div style={headerContent}>Vertical Flight Control System V1.0</div>
                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <Image src={image7} style={img} fluid responsive />
                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <Col xs={12} md={12} style={featur}>FEATURE DETAIL</Col>
                            <Col xs={12} md={12} style={downlode}><Button><FaDownload />Download Catalog PDF</Button></Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} lg={3} style={box}>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <div style={headerContent}>Horizontal Flight Control System V1.0</div>
                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <Image src={image8} style={img} fluid responsive />
                        </Row>
                        <Row xs={12} md={12} style={{ justifyContent: 'space-around' }}>
                            <Col xs={12} md={12} style={featur}>FEATURE DETAIL</Col>
                            <Col xs={12} md={12} style={downlode}><Button><FaDownload />Download Catalog PDF</Button></Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}