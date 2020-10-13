import React, { Component } from "react";
import { Container, Row, Button, Col } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import { NavLink } from 'react-router-dom';
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import '../css/tableproject.css';
import axios from 'axios';
// var ip2 = "http://localhost";
var ip = "http://aiavs.net:80";

export default class TableProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            desc: "",
            files: [],
            dataIcon: []
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

        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);

        this.columns = [
            {
                key: "project_id",
                text: "",
                className: "project_id",
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
                            <Button variant="outline-primary" onClick={() => this.onEdit(record.around)} style={{ color: "#35526F", marginRight: "0.5em" }}><FaPencilAlt /></Button>
                            <Button variant="outline-danger" fill onClick={() => this.onDelete(record.around)} style={{ color: "#35526F", marginRight: "0.5em" }}><FaTrashAlt /></Button>
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

    onEdit() {

    }

    onDelete() {

    }

    async componentDidMount() {
        var url_project = ip + "/pts/GetProject.php";
        const project = await axios.get(url_project);
        const data_project = project.data;
        this.setState({
            dataIcon: data_project
        });
    }

    render() {
        this.records = this.state.dataIcon;
        return (
            <Container>
                <Row style={{ marginTop: "5%", marginLeft: "5%", marginRight: "5%" }}>
                    <Col style={{ textAlign: "center" }}>
                        <h4 >Project</h4>
                    </Col>
                </Row>
                <Row >
                    <Col style={{ marginLeft: "5%", marginRight: "5%", marginBottom: "2%", marginTop: "2%", textAlign: "end" }}>
                        <NavLink to="/AddProject"><Button variant="success"> Add Project</Button></NavLink>
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
