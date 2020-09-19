import React, { Component } from "react";
import { Form, Container, Row, Button, Col } from 'react-bootstrap';

export default class Request extends Component {
    render() {
        return (
            <Container>
                <Row style={{ marginTop: "2%" }}>
                    <Col xs={1} md={1}></Col>
                    <Col xs={10} md={10} style={{ border: "groove", padding: "5%" }}>
                        <div style={{ textAlign: 'center', fontSize: '35', fontWeight: 'bold', paddingBottom: '3%' }}>REQUEST A QUOTE</div>
                        <div>Please fill out as much of the information below as possible. If you areunsure of your testing requirements, we will follow up anyway to help
clarify. You also welcome to call us at +1979 690 2751 x2 (for sales) to discuss.</div>
                        <Form>
                            <Form.Group controlId="formGroupName">
                                <Form.Label>Name*</Form.Label>
                                <Form.Control type="name" placeholder="First & Last (Family) Name" />
                            </Form.Group>
                            <Form.Group controlId="formGroupCompany">
                                <Form.Label>Company</Form.Label>
                                <Form.Control type="company" />
                            </Form.Group>
                            <Form.Group controlId="formGroupContry">
                                <Form.Label>Contry*</Form.Label>
                                <Form.Control type="contry" placeholder="Please list the contry where you are inquiring." />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email*</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPhone">
                                <Form.Label>Phone*</Form.Label>
                                <Form.Control type="phone" placeholder="Please list the contry where you are inquiring." />
                            </Form.Group>
                            <Form.Group controlId="formGridAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="address" placeholder="Please enter your company adress" as="textarea" rows="5" />
                            </Form.Group>
                            <Form.Group controlId="formGridDescribe">
                                <Form.Label>Please describe your testing application.</Form.Label>
                                <Form.Control type="describe" placeholder="What device(s) are being tested; what type of tests will be performed , etc." as="textarea" rows="5" />
                            </Form.Group>
                            <Button type="submit">SUBMIT</Button>
                        </Form>
                    </Col>
                    <Col xs={1} md={1}></Col>
                </Row>
            </Container>
        )

    }
}