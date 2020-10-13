import React, { Component } from "react";
import { Form, Container,  Button, Image } from 'react-bootstrap';
import logo from '../image/logoPTS.png';

export default class Login extends Component {
    render() {
        return (
            <Container>
                <Form>
                    <Image src={logo} />
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" as="textarea" rows="2" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" as="textarea" rows="2" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="phone" as="textarea" rows="2" />
                    </Form.Group>
                    <Form.Group controlId="formGroupMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="message" placeholder="Write message" as="textarea" rows="5" />
                    </Form.Group>
                    <Form.Text id="passwordHelpBlock" muted>
                        Please enter the result number from above.
                            </Form.Text>
                    <Button type="submit" style={{ background: 'Navy', marginTop: '1%' }}>Send message</Button>
                </Form>
            </Container>
        )
    }
}