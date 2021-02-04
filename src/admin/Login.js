import React, { Component } from "react";
import { Form, Container, Button, Image, Row } from 'react-bootstrap';
import logo from '../image/logoPTS.png';
// var ip2 = "http://localhost";
var ip = "https://ptscombination.co.th";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            user: []
        };

        this.onLogin = this.onLogin.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassWord = this.onChangePassWord.bind(this);
    }

    async onLogin() {
        const data = {
            username: this.state.username,
            password: this.state.password
        }

        const response = await fetch(ip + '/ChackUser.php', {
            method: 'POST',
            body: JSON.stringify(data)
        });

        const res = await response.json();
        console.log(res, " res");
        if (res.code === 200) {
            sessionStorage.clear();
            sessionStorage.setItem('user', JSON.stringify(res));
            window.location.replace('/', false);
        } else {
            alert("Username Or Password Wrong");
        }
    }

    onChangeUserName(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassWord(e) {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <Container style={{ width: "20%", marginBottom: "2%", marginTop: "2%" }}>
                <Form>
                    <Row style={{ justifyContent: "center" }}>
                        <Image src={logo} width="85%" />
                    </Row>
                    <Form.Group controlId="formGroupUserName">
                        <Form.Label>USERNAME</Form.Label>
                        <Form.Control type="text" placeholder="Username" name="username" onChange={this.onChangeUserName} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassWord">
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.onChangePassWord} />
                    </Form.Group>
                </Form>
                <Row style={{ justifyContent: "center" }}>
                    <Button style={{ background: 'Navy', marginTop: '1%' }} onClick={this.onLogin}>Login</Button>
                </Row>
            </Container>
        )
    }
}