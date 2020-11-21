import React, { Component } from "react";
import { Form, Container, Row, Button, Col, Image } from 'react-bootstrap';
import FileBase64 from 'react-file-base64';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
var ip = "http://178.128.209.69";

export default class EditNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            detail: "",
            img: "",
            img_path: "",
            files: [],
            user: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onChangeDetail = this.onChangeDetail.bind(this);
    }

    componentWillMount() {
        var user = JSON.parse(sessionStorage.getItem('user'));
        this.setState({
            user: user
        });
        if(user === null) {
            window.location.replace('/Admin/Authentication', false);
        }
    }

    getFiles(files) {
        this.setState({ files: files })
    }

    async componentDidMount() {
        var url_project = ip + "/PTS/GetEditNews.php?news_id=" + this.props.match.params.id;
        const project = await axios.get(url_project);
        const data_news = project.data;
        this.setState({
            id: data_news.news_id,
            detail: data_news.news_detail,
            img: data_news.news_img,
            img_path: "http://178.128.209.69/PTS/news/" + data_news.news_img,
        });
    }

    async onSubmit() {
        if (this.state.detail === "") {
            alert("Please enter a news detail.");
        } else {
            var save_news;
            if(this.state.files.length !== 0) {
                save_news = {
                    id: this.state.id,
                    detail: this.state.detail,
                    img_name: this.state.img,
                    img: this.state.files[0].base64
                }
            } else {
                save_news = {
                    id: this.state.id,
                    detail: this.state.detail,
                    img_name: this.state.img,
                    img: ""
                }
            }
            const response = await fetch(ip + '/PTS/SaveEditNews.php', {
                method: 'POST',
                body: JSON.stringify(save_news)
            });
            
            const res = await response.json();
            if (res.code === 200) { 
                window.location.replace('/Admin/TableNews', false);
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

    onChangeDetail(e) {
        this.setState({
            detail: e.target.value
        })
    }

    render() {
        return (
            <Container>
                <Row style={{ marginTop: "5%", marginLeft: "5%", marginRight: "5%" }}>
                    <Col style={{ textAlign: "center" }}>
                        <h4 >Edit News</h4>
                    </Col>
                </Row>
                <Row style={{ marginLeft: "5%", marginRight: "5%" }}>
                    <Col>
                        <Form>
                            <Form.Group controlId="formGroupDetail">
                                <Form.Label style={{ fontWeight: "bold" }}>Detail</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Detail" name="detail" onChange={this.onChangeDetail} value={this.state.detail} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row style={{ marginLeft: "5%", marginRight: "5%" }}>
                    <Form>
                        <Form.Label style={{ fontWeight: "bold" }}>Select Image</Form.Label> &nbsp;&nbsp;
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
                        <NavLink to="/Admin/TableNews"><Button variant="danger" onClick={this.onCancel}>Cancel</Button></NavLink>
                    </Col>
                </Row>
            </Container>
        )
    }
}