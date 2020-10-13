import React, { Component } from "react";
import { Form, Container, Row, Button, Col, Image } from 'react-bootstrap';
import FileBase64 from 'react-file-base64';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
// var ip2 = "http://localhost";
var ip = "http://aiavs.net:80";

export default class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            desc: "",
            files: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
    }

    getFiles(files) {
        console.log(files, " file");
        this.setState({ files: files })
    }

    onSubmit() {
        const save_project = {
            name: this.state.name,
            desc: this.state.desc,
            //img: this.state.files[0].base64,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        }
        axios.post(ip + '/pts/SaveProject.php', save_project)
            .then(function (res) {
                console.log(res, " res");
                if (res.data === 'save project successfully') {
                    window.location.replace('/TableProject', false);
                }
            })
            .catch(function (err) {
                console.log('error');
            })
    }

    onCancel() {
        this.setState({
            files: []
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeDesc(e) {
        this.setState({
            desc: e.target.value
        })
    }

    render() {
        return (
            <Container>
                <Row style={{ marginTop: "5%", marginLeft: "5%", marginRight: "5%" }}>
                    <Col style={{ textAlign: "center" }}>
                        <h4 >App Project</h4>
                    </Col>
                </Row>
                <Row style={{ marginLeft: "5%", marginRight: "5%" }}>
                    <Col>
                        <Form>
                            <Form.Group controlId="formGroupName">
                                <Form.Label style={{ fontWeight: "bold" }}>Name Project</Form.Label>
                                <Form.Control size="lg" type="text" placeholder="Name Project" name="name" onChange={this.onChangeName} />
                            </Form.Group>

                            <Form.Group controlId="formGroupDescription">
                                <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Description" name="desc" onChange={this.onChangeDesc} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row style={{ marginLeft: "5%", marginRight: "5%" }}>
                    <Form>
                        <Form.Label style={{ fontWeight: "bold" }}>Select Image</Form.Label> &nbsp;&nbsp;
                        {/* <input type="file" name="payment_pic" id="payment_pic" accept="image/*;capture=camera" onChange={this.getFiles.bind(this)}></input> */}
                        <FileBase64
                            multiple={true}
                            onDone={this.getFiles.bind(this)} />
                    </Form>
                </Row>
                <Row>
                    <Col style={{ textAlign: "center" }}>
                        {this.state.files.map((file, i) => {
                            return <Image key={i} src={file.base64} width='30%' alt="car pictures" />
                        })}
                        <Image src="" alt="" />
                    </Col>
                </Row>
                <Row style={{ marginBottom: "5%", marginLeft: "5%", marginRight: "5%", marginTop: "2%" }}>
                    <Col style={{ textAlign: "center" }}>
                        <Button variant="primary" onClick={this.onSubmit}>Save</Button> &nbsp;&nbsp;
                        <NavLink to="/TableProject"><Button variant="danger" onClick={this.onCancel}>Cancel</Button></NavLink>
                    </Col>
                </Row>
            </Container>
        )
    }
}