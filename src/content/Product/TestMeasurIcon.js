import React, { Component } from "react";
import { Row, Col, Image } from 'react-bootstrap';

import '../../css/testmeasur.css';

import icon01 from '../../image/icon-test measurement/01.PNG';
import icon02 from '../../image/icon-test measurement/02.PNG';
import icon03 from '../../image/icon-test measurement/03.PNG';
import icon04 from '../../image/icon-test measurement/04.PNG';
import icon05 from '../../image/icon-test measurement/05.PNG';
import icon06 from '../../image/icon-test measurement/06.PNG';
import icon07 from '../../image/icon-test measurement/07.PNG';
import icon08 from '../../image/icon-test measurement/08.PNG';
import icon09 from '../../image/icon-test measurement/09.PNG';
import icon10 from '../../image/icon-test measurement/10.PNG';
import icon11 from '../../image/icon-test measurement/11.PNG';
import icon12 from '../../image/icon-test measurement/12.PNG';
import icon13 from '../../image/icon-test measurement/13.PNG';
import icon14 from '../../image/icon-test measurement/14.PNG';
import icon15 from '../../image/icon-test measurement/15.PNG';
import icon16 from '../../image/icon-test measurement/16.PNG';
import icon17 from '../../image/icon-test measurement/17.PNG';
import icon18 from '../../image/icon-test measurement/18.PNG';
import icon19 from '../../image/icon-test measurement/19.PNG';
import icon20 from '../../image/icon-test measurement/20.PNG';
import icon21 from '../../image/icon-test measurement/21.PNG';
import icon22 from '../../image/icon-test measurement/22.PNG';
import icon23 from '../../image/icon-test measurement/23.PNG';

var url_icon01 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon02 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon03 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon04 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon05 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon06 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon07 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon08 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon09 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon10 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon11 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon12 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon13 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon14 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon15 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon16 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon17 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon18 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon19 = "https://www.hioki.com/en/products/list/?category=1";
// var url_icon20 = "https://www.hioki.com/en/products/list/?category=1";

export default class TestMeasurIcon extends Component {
    render() {
        return (
            <div>
                <Row>

                    <Col md={3}>
                        <Row>
                            <a href={url_icon01} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon01} rounded /></Col>
                            </a>
                            <a href={url_icon01} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Data Acquisition Oscilloscopes</Col>
                            </a>

                        </Row>
                    </Col>

                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon02} rounded /></Col>
                            <Col id="text-icon">Multichannel Data Loggers</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon03} rounded /></Col>
                            <Col id="text-icon">Compact Data Loggers</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon04} rounded /></Col>
                            <Col id="text-icon">LCR Meters Impedance Analyzers</Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon05} rounded /></Col>
                            <Col id="text-icon">Resistance Meters Battery Testers</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon06} rounded /></Col>
                            <Col id="text-icon">Electrometers Picoammeters</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon07} rounded /></Col>
                            <Col id="text-icon">Electrical Safety Testers Hipot, Insulation, Leakage Testers</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon08} rounded /></Col>
                            <Col id="text-icon">Benchtop Digital Multimeters</Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon09} rounded /></Col>
                            <Col id="text-icon">Signal Generators</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon10} rounded /></Col>
                            <Col id="text-icon">Power Meters Power Analyzers</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon11} rounded /></Col>
                            <Col id="text-icon">Power Quality Analyzers Power Loggers</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon12} rounded /></Col>
                            <Col id="text-icon">Current Probes, Sensors Non-contact voltage probe,CAN sensors</Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon13} rounded /></Col>
                            <Col id="text-icon">RGB LASER, LED, Optical Power Meters LAN Cable Testers</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon14} rounded /></Col>
                            <Col id="text-icon">Magnetic Field Temperature Sound | Lux | Rotation</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon15} rounded /></Col>
                            <Col id="text-icon">Digital Multimeters</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon16} rounded /></Col>
                            <Col id="text-icon">Insulation Testers Megohmmeters</Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon17} rounded /></Col>
                            <Col id="text-icon">Clamp Meters</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon18} rounded /></Col>
                            <Col id="text-icon">Ground Testers Voltage Detectors Phase Detectors</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon19} rounded /></Col>
                            <Col id="text-icon">Solar panel, PV maintenance, Measuring Instruments</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon20} rounded /></Col>
                            <Col id="text-icon">Bare board/Package Testing Populated Board Testing</Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon21} rounded /></Col>
                            <Col id="text-icon">Meter Relays CTs, Shunts</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon22} rounded /></Col>
                            <Col id="text-icon">Specialized Solutions</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col id="img-icon"><Image src={icon23} rounded /></Col>
                            <Col id="text-icon">Other Electrical Measuring Instruments</Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}