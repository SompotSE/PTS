import React, { Component } from "react";
import { Container, Row, Button, Col } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';

import { FaPencilAlt } from "react-icons/fa";
import '../css/tableproject.css';

export default class TableCover extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.records = [
            {
                item: "1",
                name: "Cover1",
                img: "Img1"
            },
            {
                item: "2",
                name: "Cover2",
                img: "Img2"
            },
            {
                item: "3",
                name: "Cover3",
                img: "Img3"
            },
            {
                item: "4",
                name: "Cover4",
                img: "Img4"
            }
        ];

        this.onEdit = this.onEdit.bind(this);

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
                key: "name",
                text: "NAME COVER",
                className: "name",
                width: 311,
                align: "center",
                sortable: true
            },
            {
                key: "img",
                text: "IMAGE",
                className: "img",
                width: 542,
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
                            <Button variant="outline-primary" onClick={() => this.onEdit(record.around)} style={{ color: "#35526F", marginRight: "0.5em" }}><FaPencilAlt /></Button>
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

    render() {
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
