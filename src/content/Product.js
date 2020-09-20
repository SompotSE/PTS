import React, { Component } from "react";
import { Row, Col, ListGroup } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import '../css/product.css';

import TestMeasur from '../content/Product/TestMeasur';
import TestMeasurIcon from '../content/Product/TestMeasurIcon';
import Labpts from '../content/Product/Labpts';
import TestingSolution from '../content/Product/TestingSolution';

var URL_DIGITAL = "https://www.dspace.com/en/pub/home.cfm";
var URL_METROLOGICAL = "https://novalynx.com/store/pc/home2.asp";

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    subTabProduct() {
        if (window.location.pathname === "/Product/TestAndMeasurement") {
            return <TestMeasur />
        } else if (window.location.pathname === "/Product/Labpts") {
            return <Labpts />
        } else if (window.location.pathname === "/Product/TestingSolutionIntegration") {
            return <TestingSolution />
        } else {
            return <></>
        }
    }

    render() {
        var sty_sub_product1 = "tab-product";
        var sty_sub_product2 = "tab-product";
        var sty_sub_product3 = "tab-product";
        if (window.location.pathname === "/Product/TestAndMeasurement") {
            sty_sub_product1 = "tab-product-active";
        } else if (window.location.pathname === "/Product/Labpts") {
            sty_sub_product2 = "tab-product-active";
        } else if (window.location.pathname === "/Product/TestingSolutionIntegration") {
            sty_sub_product3 = "tab-product-active";
        }
        return (
            <div style={{ marginTop: "1%", marginLeft: "10%", marginRight: "10%" }}>
                <Row>
                    <Col sm={3} md={3}>
                        <ListGroup defaultActiveKey="/TestAndMeasurement" >
                            <NavLink to="/Product/TestAndMeasurement" id={sty_sub_product1}><ListGroup.Item action id={sty_sub_product1}>Test & Measuremwnt Product</ListGroup.Item></NavLink>
                            <NavLink to="/Product/Labpts" id={sty_sub_product2}><ListGroup.Item action id={sty_sub_product2}>LABPTS+</ListGroup.Item></NavLink>
                            <ListGroup.Item action href={URL_DIGITAL} target="_blank">Digital Signal Processing and Control Engineering</ListGroup.Item>
                            <NavLink to="/Product/TestingSolutionIntegration" id={sty_sub_product3}><ListGroup.Item action id={sty_sub_product3}>Testing Solution Integration</ListGroup.Item></NavLink>
                            <ListGroup.Item action href={URL_METROLOGICAL} target="_blank">Metrological Sensors & Systems</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8} md={8} style={{ marginLeft: "2%", marginRight: "2%" }}>
                        {this.subTabProduct()}
                    </Col>
                </Row>
                <Row>
                    {window.location.pathname === "/Product/TestAndMeasurement" ?
                        <TestMeasurIcon />
                        :
                        <></>
                    }
                </Row>
            </div >
        )
    }
}