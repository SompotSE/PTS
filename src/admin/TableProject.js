import React, { Component } from "react";
import { Container, Row, Button, Col } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import { NavLink } from 'react-router-dom';
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import '../css/tableproject.css';
import axios from 'axios';
// var ip2 = "http://localhost";
var ip = "http://178.128.209.69";

export default class TableProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            desc: "",
            files: [],
            dataIcon: [],
            user: []
        };

        this.records = [
            {
                item: "1",
                name: "testtt"
            },
            {
                item: "1",
                name: "testtt"
            },
            {
                item: "1",
                name: "testtt"
            }
        ];

        this.onDelete = this.onDelete.bind(this);

        this.columns = [
            {
                key: "item",
                text: "",
                className: "item",
                width: 50,
                align: "center",
                sortable: true,
            },
            {
                key: "project_name",
                text: "NAME PROJECT",
                className: "project_name",
                width: 311,
                align: "center",
                sortable: true
            },
            {
                key: "project_description",
                text: "DESCRIPTION",
                className: "project_description",
                width: 482,
                align: "center",
                sortable: true
            },
            {
                key: "action",
                text: "",
                className: "action",
                width: 140,
                align: "center",
                sortable: false,
                cell: record => {
                    return (
                        <div>
                            <NavLink to={`/Admin/EditProject/${record.project_id}`}><Button variant="outline-primary" style={{ color: "#35526F", marginRight: "0.5em" }}><FaPencilAlt /></Button></NavLink>
                            <Button variant="outline-danger" fill onClick={() => this.onDelete(record.project_id)} style={{ color: "#35526F", marginRight: "0.5em" }}><FaTrashAlt /></Button>
                        </div>
                    );
                }
            }
        ];

        this.config = {
            page_size: 5,
            length_menu: [5, 10, 15],
            button: {
                excel: false,
                print: false,
                extra: false,
            }
        }


        this.extraButtons = [
            {
                className: "btn btn-primary buttons-pdf",
                title: "Export TEst",
                children: [
                    <span>
                        <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
                    </span>
                ],
                onClick: (event) => {
                    console.log(event);
                },
            },
            {
                className: "btn btn-primary buttons-pdf",
                title: "Export TEst",
                children: [
                    <span>
                        <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
                    </span>
                ],
                onClick: (event) => {
                    console.log(event);
                },
                onDoubleClick: (event) => {
                    console.log("doubleClick")
                }
            },
        ]
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

    async onDelete(id) {
        var url_project = ip + "/pts/DeleteProject.php?id=" + id;
        const project = await axios.get(url_project);
        const data_project = project.data;
        if (data_project === "delete project successfully") {
            window.location.replace('/Admin/TableProject', false);
        } else {
            alert("ลบข้อมูลไม่สำเร็จ");
        }
    }

    async componentDidMount() {
        var url_project = ip + "/pts/GetProject.php";
        const project = await axios.get(url_project);
        const data_project = project.data;
        this.setState({
            dataIcon: data_project
        });
    }

    itemProject() {
        for (let i = 0; i < this.state.dataIcon.length; i++) {
            this.records.push(
                {
                    "item": i + 1,
                    "project_id": this.state.dataIcon[i].project_id,
                    "project_name": this.state.dataIcon[i].project_name,
                    "project_description": this.state.dataIcon[i].project_description,
                    "project_img": this.state.dataIcon[i].project_img,
                    "project_sqe": this.state.dataIcon[i].project_sqe,
                    "project_status": this.state.dataIcon[i].project_status
                }
            );
        }
    }

    render() {
        this.records = [];
        this.itemProject();
        // this.records = this.state.dataIcon;
        return (
            <Container>
                <Row style={{ marginTop: "5%", marginLeft: "5%", marginRight: "5%" }}>
                    <Col style={{ textAlign: "center" }}>
                        <h4 >Project</h4>
                    </Col>
                </Row>
                <Row >
                    <Col style={{ marginLeft: "5%", marginRight: "5%", marginBottom: "2%", marginTop: "2%", textAlign: "end" }}>
                        <NavLink to="/Admin/AddProject"><Button variant="success"> Add Project</Button></NavLink>
                    </Col>
                </Row>
                <Row style={{ marginLeft: "5%", marginRight: "5%" }}>
                    <ReactDatatable
                        config={this.config}
                        records={this.records}
                        columns={this.columns}
                        extraButtons={this.extraButtons}
                    />
                </Row>
            </Container>
        )
    }
}
