import React, { Component } from "react";
import { Form, Container, Row, Button, Col, Image } from 'react-bootstrap';
import map from '../image/map.png';
import GoogleMap from './RequestaQuote1Map';
var ip = "http://178.128.209.69";

class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            message: ""
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit() {
        if (this.state.name === "" || this.state.email === "" || this.state.phone === "" || this.state.message === "") {
            alert("Please complete all information.");
            return false;
        }  else {
            const save_contact = {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                message: this.state.message
            }

            const response = await fetch(ip + '/PTS/SaveContact.php', {
                method: 'POST',
                body: JSON.stringify(save_contact)
            });

            const res = await response.json();
            if (res.code === 200) { 
                alert("Save Data Successfully.");
                window.location.replace('/Contact', false);
            } else {
                alert("Save Data Error");
            }
        }
    }

    render() {
        return (
            <Container>
                <Row style={{ marginTop: '10%', marginBottom: '5%' }}>
                    <Col xs={1} md={1}></Col>
                    <Col xs={10} md={10}>
                        <Image src={map} fluid responsive />
                    </Col>
                    <Col xs={1} md={1}></Col>
                </Row>

                <Row style={{ marginTop: '5%', marginBottom: '5%' }}>
                    <Col xs={1} md={1}></Col>
                    <Col xs={10} md={10}>
                        <GoogleMap />
                    </Col>
                    <Col xs={1} md={1}></Col>
                </Row>
               
                <Row style={{}}>
                    <Col xs={2} md={1}></Col>
                    <Col xs={8} md={5}>
                        <div style={{ textAlign: 'left', fontSize: '30', fontWeight: 'bold', paddingBottom: '3%', color: 'DarkBlue' }}>CONTRACT US</div>
                        <Form>
                            <Form.Group controlId="formGroupName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type="name" 
                                    as="textarea" 
                                    rows="2" 
                                    value={this.state.name}
                                    onChange={e => this.setState({ name: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    as="textarea" 
                                    rows="2" 
                                    value={this.state.email}
                                    onChange={e => this.setState({ email: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control 
                                    type="phone" 
                                    as="textarea" 
                                    rows="2" 
                                    value={this.state.phone}
                                    onChange={e => this.setState({ phone: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control 
                                    type="message" 
                                    placeholder="Write message" 
                                    as="textarea" rows="5" 
                                    value={this.state.message}
                                    onChange={e => this.setState({ message: e.target.value })}
                                />
                            </Form.Group>
                            <Button style={{ background: 'Navy', marginTop: '1%' }} onClick={this.onSubmit}>Send message</Button>
                        </Form>
                    </Col>
                    <Col xs={2} md={1}></Col>
                    <Col xs={2} md={1}></Col>
                    <Col xs={8} md={3}>
                        <div style={{ textAlign: 'left', fontSize: '30', fontWeight: 'bold', paddingTop: '25%' }}>ADDRESS</div>
                        <div>PTS COMBINATION CO., LTD. 11/26 Moo 1, Banmai tumbol, Pakkret, Nontaburi, 11120 Thailand</div>
                        <div></div>
                        <div style={{ textAlign: 'left', fontSize: '30', fontWeight: 'bold', paddingTop: '15%' }}>Contract :</div>
                        <div>Tel. 02-5015677, 02-5015228</div>
                        <div>Fax. 02-5015357</div>
                        <div>Email pts.sales8@gmail.com</div>
                        <div style={{ textAlign: 'left', fontSize: '30', fontWeight: 'bold', paddingTop: '15%' }}>Office Hours</div>
                        <div>M0-Fr : 8.30 - 17.00</div>
                        <div>Sa-Su : closed</div>
                    </Col>
                    <Col xs={2} md={1}></Col>
                </Row>
            </Container>
        )

    }
}

export default Request
// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyAFHTcbUykLDkXfK19GoXmm8EltWUbq9dM")
// })(Request)