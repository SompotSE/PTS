import React, { Component } from "react";
import { Row } from 'react-bootstrap';

import '../../css/testmeasur.css';

import TestMeasurIconFor from './TestMeasurIconFor';

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
var url_icon02 = "https://www.hioki.com/en/products/list/?category=9";
var url_icon03 = "https://www.hioki.com/en/products/list/?category=35";
var url_icon04 = "https://www.hioki.com/en/products/list/?category=10";
var url_icon05 = "https://www.hioki.com/en/products/list/?category=11";
var url_icon06 = "https://www.hioki.com/en/products/list/?category=12";
var url_icon07 = "https://www.hioki.com/en/products/list/?category=13";
var url_icon08 = "https://www.hioki.com/en/products/list/?category=14";
var url_icon09 = "https://www.hioki.com/en/products/list/?category=16";
var url_icon10 = "https://www.hioki.com/en/products/list/?category=15";
var url_icon11 = "https://www.hioki.com/en/products/list/?category=36";
var url_icon12 = "https://www.hioki.com/en/products/list/?category=17";
var url_icon13 = "https://www.hioki.com/en/products/list/?category=18";
var url_icon14 = "https://www.hioki.com/en/products/list/?category=19";
var url_icon15 = "https://www.hioki.com/en/products/list/?category=20";
var url_icon16 = "https://www.hioki.com/en/products/list/?category=21";
var url_icon17 = "https://www.hioki.com/en/products/list/?category=22";
var url_icon18 = "https://www.hioki.com/en/products/list/?category=23";
var url_icon19 = "https://www.hioki.com/en/products/list/?category=42";
var url_icon20 = "https://www.hioki.com/en/products/list/?category=25";
var url_icon21 = "https://www.hioki.com/en/products/list/?category=24";
var url_icon22 = "https://www.hioki.com/en/products/list/?category=38";
var url_icon23 = "https://www.hioki.com/en/products/list/?category=27";

export default class TestMeasurIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataIcon: [
                {
                    icon: icon01,
                    url: url_icon01,
                    text: "Data Acquisition Oscilloscopes"
                },
                {
                    icon: icon02,
                    url: url_icon02,
                    text: "Multichannel Data Loggers"
                },
                {
                    icon: icon03,
                    url: url_icon03,
                    text: "Compact Data Loggers"
                },
                {
                    icon: icon04,
                    url: url_icon04,
                    text: "LCR Meters Impedance Analyzers"
                },
                {
                    icon: icon05,
                    url: url_icon05,
                    text: "Resistance Meters Battery Testers"
                },
                {
                    icon: icon06,
                    url: url_icon06,
                    text: "Electrometers Picoammeters"
                },
                {
                    icon: icon07,
                    url: url_icon07,
                    text: "Electrical Safety Testers Hipot, Insulation, Leakage Testers"
                },
                {
                    icon: icon08,
                    url: url_icon08,
                    text: "Benchtop Digital Multimeters"
                },
                {
                    icon: icon09,
                    url: url_icon09,
                    text: "Signal Generators"
                },
                {
                    icon: icon10,
                    url: url_icon10,
                    text: "Power Meters Power Analyzers"
                },
                {
                    icon: icon11,
                    url: url_icon11,
                    text: "Power Quality Analyzers Power Loggers"
                },
                {
                    icon: icon12,
                    url: url_icon12,
                    text: "Current Probes, Sensors Non-contact voltage probe,CAN sensors"
                },
                {
                    icon: icon13,
                    url: url_icon13,
                    text: "RGB LASER, LED, Optical Power Meters LAN Cable Testers"
                },
                {
                    icon: icon14,
                    url: url_icon14,
                    text: "Magnetic Field Temperature Sound | Lux | Rotation"
                },
                {
                    icon: icon15,
                    url: url_icon15,
                    text: "Digital Multimeters"
                },
                {
                    icon: icon16,
                    url: url_icon16,
                    text: "Insulation Testers Megohmmeters"
                },
                {
                    icon: icon17,
                    url: url_icon17,
                    text: "Clamp Meters"
                },
                {
                    icon: icon18,
                    url: url_icon18,
                    text: "Ground Testers Voltage Detectors Phase Detectors"
                },
                {
                    icon: icon19,
                    url: url_icon19,
                    text: "Solar panel, PV maintenance, Measuring Instruments"
                },
                {
                    icon: icon20,
                    url: url_icon20,
                    text: "Bare board/Package Testing Populated Board Testing"
                },
                {
                    icon: icon21,
                    url: url_icon21,
                    text: "Meter Relays CTs, Shunts"
                },
                {
                    icon: icon22,
                    url: url_icon22,
                    text: "Specialized Solutions"
                },
                {
                    icon: icon23,
                    url: url_icon23,
                    text: "Other Electrical Measuring Instruments"
                }
            ]
        }
    }

    icon_for() {
        return this.state.dataIcon.map((data, i) => {
            return <TestMeasurIconFor obj={data} key={i} />
        });
    }

    render() {
        return (
            <div>
                <Row>

                    {this.icon_for()}
                    {/* <Col md={3}>
                        <Row>
                            <a href={url_icon01} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon01} fluid /></Col>
                            </a>
                            <a href={url_icon01} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Data Acquisition Oscilloscopes</Col>
                            </a>

                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon02} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon02} fluid /></Col>
                            </a>
                            <a href={url_icon02} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Multichannel Data Loggers</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon03} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon03} fluid /></Col>
                            </a>
                            <a href={url_icon03} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Compact Data Loggers</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon04} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon04} fluid /></Col>
                            </a>
                            <a href={url_icon04} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">LCR Meters Impedance Analyzers</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon05} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon05} fluid /></Col>
                            </a>
                            <a href={url_icon05} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Resistance Meters Battery Testers</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon06} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon06} fluid /></Col>
                            </a>
                            <a href={url_icon06} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Electrometers Picoammeters</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon07} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col ><Image src={icon07} fluid /></Col>
                            </a>
                            <Col id="text-icon"><a href={url_icon07} target="_blank" rel="noopener noreferrer">Electrical Safety Testers Hipot, Insulation, Leakage Testers</a></Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon08} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon08} fluid /></Col>
                            </a>
                            <a href={url_icon08} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Benchtop Digital Multimeters</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon09} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon09} fluid /></Col>
                            </a>
                            <a href={url_icon09} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Signal Generators</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon10} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon10} fluid /></Col>
                            </a>
                            <a href={url_icon10} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Power Meters Power Analyzers</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon11} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon11} fluid /></Col>
                            </a>
                            <a href={url_icon11} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Power Quality Analyzers Power Loggers</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon12} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon12} fluid /></Col>
                            </a>
                            <a href={url_icon12} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Current Probes, Sensors Non-contact voltage probe,CAN sensors</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon13} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon13} fluid /></Col>
                            </a>
                            <a href={url_icon13} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">RGB LASER, LED, Optical Power Meters LAN Cable Testers</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon14} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon14} fluid /></Col>
                            </a>
                            <a href={url_icon14} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Magnetic Field Temperature Sound | Lux | Rotation</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon15} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon15} fluid /></Col>
                            </a>
                            <a href={url_icon15} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Digital Multimeters</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon16} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon16} fluid /></Col>
                            </a>
                            <a href={url_icon16} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Insulation Testers Megohmmeters</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon17} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon17} fluid /></Col>
                            </a>
                            <a href={url_icon17} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Clamp Meters</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon18} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon18} fluid /></Col>
                            </a>
                            <a href={url_icon18} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Ground Testers Voltage Detectors Phase Detectors</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon19} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon19} fluid /></Col>
                            </a>
                            <a href={url_icon19} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Solar panel, PV maintenance, Measuring Instruments</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon20} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon20} fluid /></Col>
                            </a>
                            <a href={url_icon20} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Bare board/Package Testing Populated Board Testing</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon21} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon21} fluid /></Col>
                            </a>
                            <a href={url_icon21} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Meter Relays CTs, Shunts</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon22} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon22} fluid /></Col>
                            </a>
                            <a href={url_icon22} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Specialized Solutions</Col>
                            </a>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <a href={url_icon23} target="_blank" rel="noopener noreferrer" id="img-icon">
                                <Col id="img-icon"><Image src={icon23} fluid /></Col>
                            </a>
                            <a href={url_icon23} target="_blank" rel="noopener noreferrer" id="text-icon">
                                <Col id="text-icon">Other Electrical Measuring Instruments</Col>
                            </a>
                        </Row>
                    </Col> */}
                </Row>
            </div >
        )
    }
}