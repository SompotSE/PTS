import React, { Component } from "react";
import {  Container, Button, Image, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../image/logoPTS.png';

export default class Noit extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container style={{ width: "40%", marginBottom: "2%", marginTop: "2%" }}>
                <Row style={{ justifyContent: "center" }}>
                    <Image src={logo} width="65%" />
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <h2>Sorry! You do not have access to the information.</h2>
                    <h4>Please contact your administrator.</h4>
                </Row>
                <Row style={{ justifyContent: "center", marginTop: "1%", marginBottom: "1%" }}>
                    <NavLink to="/"><Button style={{ background: 'Navy', marginTop: '1%' }} onClick={this.onLogin}>Back to home</Button></NavLink>
                </Row>
            </Container>
        )
    }
}