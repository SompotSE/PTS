import React, { Component } from "react";
import { Col, Row, Image } from 'react-bootstrap';

import { Popover, PopoverBody } from "reactstrap";

import '../css/footer.css';
import logoLiveChat from '../image/chat.png'

const textLiveChat = {
    opacity: "80%",
    backgroundColor: "black",
    color: "aliceblue",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    fontWeight: "bolder"
}

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        }
    }

    handleHoverChange = visible => {
        console.log(visible, " visible");
        this.setState({
            hovered: !this.state.hovered
        });
    };

    render() {
        return (
            <div>
                <div style={{ marginRight: "5%", width: "3%" }}>
                    <Image src={logoLiveChat} id="Popover-top" style={{ width: "3%" , position:'fixed', bottom:'20px', right:'4%', zIndex: '1000' }} />
                </div>
                <Popover
                    placement="top"
                    isOpen={this.state.hovered}
                    target="Popover-top"
                    toggle={this.handleHoverChange}
                >
                    <PopoverBody>
                        <Row id="row-popup">
                            <Col md={6} xs={6} style={textLiveChat}>แชทผ่าน Line</Col>
                            <Col md={6} xs={6} style={{textAlign: "end"}}><Image src={logoLiveChat} id="Popover-top" style={{ width: "60%" }} fluid responsive /></Col>
                        </Row>
                        <Row id="row-popup">
                            <Col md={6} xs={6} style={textLiveChat}>โทรศัพท์</Col>
                            <Col md={6} xs={6} style={{textAlign: "end"}}><Image src={logoLiveChat} id="Popover-top" style={{ width: "60%" }} fluid responsive /></Col>
                        </Row>
                    </PopoverBody>
                </Popover>
            </div>
        )
    }
}

