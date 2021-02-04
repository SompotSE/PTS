import React, { Component } from "react";
import { Form, Container, Row, Button, Col, Image } from 'react-bootstrap';
import FileBase64 from 'react-file-base64';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
// var ip2 = "http://localhost";
var ip = "https://ptscombination.co.th";

export default class EditCover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            img: "",
            img_path: "",
            files: [],
            user: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    componentWillMount() {
        var user = JSON.parse(sessionStorage.getItem('user'));
        this.setState({
            user: user
        });
        console.log(user, " hgdhgsgadj");
        if(user === null) {
            window.location.replace('/Admin/Authentication', false);
        }
    }

    getFiles(files) {
        this.setState({ files: files })
    }

    async componentDidMount() {
        var url_project = ip + "/GetEditCover.php?cover_id=" + this.props.match.params.id;
        const project = await axios.get(url_project);
        const data_project = project.data;
        console.log(data_project, " data_project");
        this.setState({
            id: data_project.cover_id,
            img: data_project.cover_img,
            img_path: ip + "/cover/" + data_project.cover_img,
        });
    }

    async onSubmit() {
        var save_project;
        if (this.state.files.length !== 0) {
            save_project = {
                id: this.state.id,
                img_name: this.state.img,
                img: this.state.files[0].base64
            }
        } else {
            save_project = {
                id: this.state.id,
                img_name: this.state.img,
                img: ""
            }
        }
        const response = await fetch(ip + '/SaveEditCover.php', {
            method: 'POST',
            // mode: 'no-cors',
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Accept': 'application/json'
            // },
            body: JSON.stringify(save_project)
        });
        const res = await response.json();
        if (res.code === 200) {
            window.location.replace('/Admin/TableCover', false);
        } else {
            alert("Save Data Error");
        }
        // const res = await response.json();
        // console.log(res, " res");
        // if (res) { }
        // window.location.replace('/TableProject', false);
    }

    onCancel() {
        this.setState({
            files: []
        })
    }

    render() {
        return (
            <Container>
                <Row style={{ marginTop: "5%", marginLeft: "5%", marginRight: "5%" }}>
                    <Col style={{ textAlign: "center" }}>
                        <h4 >Edit Cover</h4>
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
                        {
                            (this.state.files.length === 0) ?
                                <Image src={this.state.img_path} width='30%' alt={this.state.img_path} />
                                :
                                <Image src="" alt="" />
                        }
                    </Col>
                </Row>
                <Row style={{ marginBottom: "5%", marginLeft: "5%", marginRight: "5%", marginTop: "2%" }}>
                    <Col style={{ textAlign: "center" }}>
                        <Button variant="primary" onClick={this.onSubmit}>Save</Button> &nbsp;&nbsp;
                        <NavLink to="/Admin/TableCover"><Button variant="danger" onClick={this.onCancel}>Cancel</Button></NavLink>
                    </Col>
                </Row>
            </Container>
        )
    }
}