import React, { Component } from "react";
import { Form, Container, Row, Button, Col, Image } from 'react-bootstrap';
import FileBase64 from 'react-file-base64';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
// var ip2 = "http://localhost";
var ip = "http://178.128.209.69";

export default class EditProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            desc: "",
            img: "",
            img_path: "",
            files: [],
            user: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
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
        var url_project = ip + "/PTS/GetEditProject.php?project_id=" + this.props.match.params.id;
        const project = await axios.get(url_project);
        const data_project = project.data;
        console.log(data_project, " data_project");
        this.setState({
            id: data_project.project_id,
            name: data_project.project_name,
            desc: data_project.project_description,
            img: data_project.project_img,
            img_path: "http://178.128.209.69/PTS/project/" + data_project.project_img,
        });
    }

    async onSubmit() {
        if (this.state.name === "") {
            alert("Please enter a project name.");
        } else if (this.state.desc === "") {
            alert("Please enter a project description.");
        } else {
            var save_project;
            if(this.state.files.length !== 0) {
                save_project = {
                    id: this.state.id,
                    name: this.state.name,
                    desc: this.state.desc,
                    img_name: this.state.img,
                    img: this.state.files[0].base64
                }
            } else {
                save_project = {
                    id: this.state.id,
                    name: this.state.name,
                    desc: this.state.desc,
                    img_name: this.state.img,
                    img: ""
                }
            }
            const response = await fetch(ip + '/PTS/SaveEditProject.php', {
                method: 'POST',
                body: JSON.stringify(save_project)
            });
            
            const res = await response.json();
            if (res.code === 200) { 
                window.location.replace('/Admin/TableProject', false);
            } else {
                alert("Save Data Error");
            }
        }
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
                        <h4 >Edit Project</h4>
                    </Col>
                </Row>
                <Row style={{ marginLeft: "5%", marginRight: "5%" }}>
                    <Col>
                        <Form>
                            <Form.Group controlId="formGroupName">
                                <Form.Label style={{ fontWeight: "bold" }}>Name Project</Form.Label>
                                <Form.Control size="lg" type="text" placeholder="Name Project" name="name" onChange={this.onChangeName} value={this.state.name} />
                            </Form.Group>

                            <Form.Group controlId="formGroupDescription">
                                <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Description" name="desc" onChange={this.onChangeDesc} value={this.state.desc} />
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
                        <NavLink to="/Admin/TableProject"><Button variant="danger" onClick={this.onCancel}>Cancel</Button></NavLink>
                    </Col>
                </Row>
            </Container>
        )
    }
}