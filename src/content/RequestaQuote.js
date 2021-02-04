import React, { Component } from "react";
import { Form, Container, Row, Button, Col } from 'react-bootstrap';
var ip = "https://ptscombination.co.th";

export default class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            company: "",
            contry: "",
            email: "",
            phone: "",
            address: "",
            desc: ""
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit() {
        console.log(this.state.name, " this.state.name");
        console.log(this.state.email, " this.state.email");
        console.log(this.state.phone, " this.state.phone");
        console.log(this.state.message, " this.state.message");
        if (this.state.name === "" || this.state.company === "" || this.state.contry === "" || this.state.email === "" || this.state.phone === "" || this.state.address === "" || this.state.desc === "") {
            alert("Please complete all information.");
            return false;
        }  else {
            const save_request = {
                name: this.state.name,
                company: this.state.company,
                contry: this.state.contry,
                email: this.state.email,
                phone: this.state.phone,
                address: this.state.address,
                desc: this.state.desc
            }

            const response = await fetch(ip + '/SaveRequest.php', {
                method: 'POST',
                body: JSON.stringify(save_request)
            });

            const res = await response.json();
            if (res.code === 200) { 
                alert("Save Data Successfully.");
                window.location.replace('/Request', false);
            } else {
                alert("Save Data Error");
            }
        }
    }

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
                                <Form.Control 
                                    type="name" 
                                    placeholder="First & Last (Family) Name"
                                    value={this.state.name}
                                    onChange={e => this.setState({ name: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupCompany">
                                <Form.Label>Company*</Form.Label>
                                <Form.Control 
                                    type="company"
                                    value={this.state.company}
                                    onChange={e => this.setState({ company: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupContry">
                                <Form.Label>Contry*</Form.Label>
                                <Form.Control 
                                    type="contry" 
                                    placeholder="Please list the contry where you are inquiring." 
                                    value={this.state.contry}
                                    onChange={e => this.setState({ contry: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email*</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    value={this.state.email}
                                    onChange={e => this.setState({ email: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupPhone">
                                <Form.Label>Phone*</Form.Label>
                                <Form.Control 
                                    type="phone" 
                                    placeholder="Please list the contry where you are inquiring." 
                                    value={this.state.phone}
                                    onChange={e => this.setState({ phone: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGridAddress">
                                <Form.Label>Address*</Form.Label>
                                <Form.Control 
                                    type="address" 
                                    placeholder="Please enter your company adress" 
                                    as="textarea" 
                                    rows="5" 
                                    value={this.state.address}
                                    onChange={e => this.setState({ address: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGridDescribe">
                                <Form.Label>Please describe your testing application*</Form.Label>
                                <Form.Control 
                                    type="describe" 
                                    placeholder="What device(s) are being tested; what type of tests will be performed , etc." 
                                    as="textarea" 
                                    rows="5" 
                                    value={this.state.desc}
                                    onChange={e => this.setState({ desc: e.target.value })}
                                />
                            </Form.Group>
                            <Button onClick={this.onSubmit}>SUBMIT</Button>
                        </Form>
                    </Col>
                    <Col xs={1} md={1}></Col>
                </Row>
            </Container>
        )

    }
}