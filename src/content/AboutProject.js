import React, { Component } from "react";
import { Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import '../css/about.css';

// import { FaPlusCircle } from "react-icons/fa";

var projectDetail = {};
// var ip = "http://localhost";
var ip = "https://ptscombination.co.th";

export default class TestMeasurIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataIcon: [ ]
        }
    }

    async componentDidMount() {
        var url_project = ip + "/GetProject.php";
        const project = await axios.get(url_project);
        const data_project = project.data;
        this.setState({
            dataIcon: data_project
        });
    }

    project_for() {
        return this.state.dataIcon.map((data) => {
            var img = ip + '/project/' + data.project_img;
            // var img = require('../image/' + data.project_img );
            return <Col md={4} lg={4} xs={6} style={{ padding: "1%" }}>
                <Row>
                    <Col><Image src={img} alt="React" fluid /></Col>
                </Row>
                <Row style={projectDetail}>{data.project_name}</Row>
            </Col>
        });
    }

    render() {
        if (window.innerWidth < 768) {
            projectDetail = {
                color: "aliceblue",
                backgroundColor: "#2467A9",
                textAlign: "center",
                marginTop: "3%",
                padding: "4%",
                justifyContent: "center",
                height: "20%",
                display: "flex",
                alignItems: "center",
                fontSize: "50%"
            };
        } else if (window.innerWidth < 1025) {
            projectDetail = {
                color: "aliceblue",
                backgroundColor: "#2467A9",
                textAlign: "center",
                marginTop: "3%",
                padding: "4%",
                justifyContent: "center",
                height: "20%",
                display: "flex",
                alignItems: "center",
                fontSize: "60%"
            };
        } else {
            projectDetail = {
                color: "aliceblue",
                backgroundColor: "#2467A9",
                textAlign: "center",
                marginTop: "3%",
                padding: "4%",
                justifyContent: "center",
                height: "20%",
                display: "flex",
                alignItems: "center",
                fontSize: "100%"
            };
        }
        return (
            <div>
                <Row>
                    {this.project_for()}
                    {/* <Col md={4} lg={4} xs={6} style={{ padding: "1%",textAlign: "center", alignItems: "center", display: "flex", justifyContent: "center" }}>
                            <FaPlusCircle style={{ width: "30%", height: "30%"}} />
                    </Col> */}
                </Row>
            </div >
        )
    }
}