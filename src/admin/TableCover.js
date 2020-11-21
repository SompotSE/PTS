import React, { Component } from "react";
import { Container, Row, Button, Col, Image } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import { NavLink } from 'react-router-dom';
import { FaPencilAlt } from "react-icons/fa";
import '../css/tableproject.css';
import axios from 'axios';
// var ip2 = "http://localhost";
var ip = "http://178.128.209.69";

export default class TableCover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataIcon: [],
            user: []
        };

        this.records = [ ];

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
                key: "cover_img_path",
                text: "IMAGE",
                className: "cover_img_path",
                width: 311,
                align: "center",
                sortable: true,
                cell: record => {
                    return (
                        <div>
                            <Image src={record.cover_img_path} width='30%' alt={this.state.img_path} />
                        </div>
                    );
                }
            },
            {
                key: "name",
                text: "NAME COVER",
                className: "name",
                width: 311,
                align: "center",
                sortable: true
            },
            {
                key: "cover_img",
                text: "NAME IMAGE",
                className: "cover_img",
                width: 311,
                align: "center",
                sortable: true
            },
            {
                key: "action",
                text: "",
                className: "action",
                width: 80,
                align: "center",
                sortable: false,
                cell: record => {
                    return (
                        <div>
                            <NavLink to={`/Admin/EditCover/${record.cover_id}`}><Button variant="outline-primary" style={{ color: "#35526F", marginRight: "0.5em" }}><FaPencilAlt /></Button></NavLink>
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

    async componentDidMount() {
        var url_cover = ip + "/pts/GetCover.php";
        const cover = await axios.get(url_cover);
        const data_cover = cover.data;
        console.log(data_cover, " data_cover");
        this.setState({
            dataIcon: data_cover
        });
    }

    itemCover() {
        for (let i = 0; i < this.state.dataIcon.length; i++) {
            this.records.push(
                {
                    "item": i + 1,
                    "name": "COVER" + (i+1),
                    "cover_id": this.state.dataIcon[i].cover_id,
                    "cover_img": this.state.dataIcon[i].cover_img,
                    "cover_img_path": "http://178.128.209.69/PTS/cover/" + this.state.dataIcon[i].cover_img
                }
            );
        }
    }

    render() {
        this.records = [];
        this.itemCover();
        return (
            <Container>
                <Row style={{ marginTop: "5%", marginLeft: "5%", marginRight: "5%" }}>
                    <Col style={{ textAlign: "center" }}>
                        <h4 >Cover</h4>
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
