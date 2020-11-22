import React, { Component } from "react";
// import { OverlayTrigger , Tooltip } from 'react-bootstrap';

// import { Popover, PopoverBody } from "reactstrap";
import { NavLink } from 'react-router-dom';

import '../css/footer.css';
// import logoLiveChat from '../image/buFooter.png';
// import logoLine from '../image/buFooterLine.png';
// import logoPhone from '../image/buFooterTel.png';
// import logoKa from '../image/buFooterKa.png';

import {
    FloatingMenu,
    MainButton,
    ChildButton,
} from 'react-floating-button-menu';
import { MdForum } from 'react-icons/md';
import { FaFacebookMessenger, FaPhoneAlt, FaTimes, FaMapMarkerAlt, FaCommentDots } from 'react-icons/fa';
import LineIcon from 'react-lineicons';

// const textLiveChat = {
//     //opacity: "50%",
//     backgroundColor: "rgba(0, 0, 0, 0.7)",
//     color: "aliceblue",
//     justifyContent: "flex-end",
//     display: "flex",
//     alignItems: "center",
//     fontWeight: "bolder",
//     paddingRight: "5%",
//     height: "fit-content",
//     padding: "3%"
// }

// var iconFooter = { paddingLeft: "4%" }

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
            isOpen: false
        }
    }

    // handleHoverChange = visible => {
    //     console.log(visible, " visible");
    //     this.setState({
    //         hovered: !this.state.hovered
    //     });
    // };

    // liveChat2560() {
    //     return <div>
    //         <div style={{ marginRight: "5%", width: "3%" }}>
    //             <Image src={logoLiveChat} id="Popover-top" style={{ width: "2.5%", position: 'fixed', bottom: '20px', right: '3%', zIndex: '1000' }} />
    //         </div>
    //         <Popover
    //             placement="top"
    //             isOpen={this.state.hovered}
    //             target="Popover-top"
    //             toggle={this.handleHoverChange}
    //         >
    //             <PopoverBody>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Line Chat</Col>
    //                     <Col md={6} xs={6} style={iconFooter}><Image src={logoLine} id="Popover-top" style={{ width: "50%" }} fluid responsive /></Col>
    //                 </Row>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Tel. Phone</Col>
    //                     <Col md={6} xs={6} style={iconFooter}>
    //                         <a href="tel:+66831885535">
    //                             <Image src={logoPhone} id="Popover-top" style={{ width: "50%" }} fluid responsive />
    //                         </a>
    //                     </Col>
    //                 </Row>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Request</Col>
    //                     <Col md={6} xs={6} style={iconFooter}>
    //                         <NavLink to="/Request">
    //                             <Image src={logoKa} id="Popover-top" style={{ width: "50%" }} fluid responsive />
    //                         </NavLink>
    //                     </Col>
    //                 </Row>
    //             </PopoverBody>
    //         </Popover>
    //     </div>
    // }

    // liveChat1920() {
    //     return <div>
    //         <div style={{ marginRight: "5%", width: "3%" }}>
    //             <Image src={logoLiveChat} id="Popover-top" style={{ width: "3%", position: 'fixed', bottom: '20px', right: '4%', zIndex: '1000' }} />
    //         </div>
    //         <Popover
    //             placement="top"
    //             isOpen={this.state.hovered}
    //             target="Popover-top"
    //             toggle={this.handleHoverChange}
    //         >
    //             <PopoverBody>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Line Chat</Col>
    //                     <Col md={6} xs={6} style={iconFooter}><Image src={logoLine} id="Popover-top" style={{ width: "50%" }} fluid responsive /></Col>
    //                 </Row>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Tel. Phone</Col>
    //                     <Col md={6} xs={6} style={iconFooter}>
    //                         <a href="tel:+66831885535">
    //                             <Image src={logoPhone} id="Popover-top" style={{ width: "50%" }} fluid responsive />
    //                         </a>
    //                     </Col>
    //                 </Row>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Request</Col>
    //                     <Col md={6} xs={6} style={iconFooter}>
    //                         <NavLink to="/Request">
    //                             <Image src={logoKa} id="Popover-top" style={{ width: "50%" }} fluid responsive />
    //                         </NavLink>
    //                     </Col>
    //                 </Row>
    //             </PopoverBody>
    //         </Popover>
    //     </div>
    // }

    // liveChat1440() {
    //     return <div>
    //         <div style={{ marginRight: "5%", width: "3%" }}>
    //             <Image src={logoLiveChat} id="Popover-top" style={{ width: "4%", position: 'fixed', bottom: '20px', right: '5.5%', zIndex: '1000' }} />
    //         </div>
    //         <Popover
    //             placement="top"
    //             isOpen={this.state.hovered}
    //             target="Popover-top"
    //             toggle={this.handleHoverChange}
    //         >
    //             <PopoverBody>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Line Chat</Col>
    //                     <Col md={6} xs={6} style={iconFooter}><Image src={logoLine} id="Popover-top" style={{ width: "50%" }} fluid responsive /></Col>
    //                 </Row>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Tel. Phone</Col>
    //                     <Col md={6} xs={6} style={iconFooter}>
    //                         <a href="tel:+66831885535">
    //                             <Image src={logoPhone} id="Popover-top" style={{ width: "50%" }} fluid responsive />
    //                         </a>
    //                     </Col>
    //                 </Row>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Request</Col>
    //                     <Col md={6} xs={6} style={iconFooter}>
    //                         <NavLink to="/Request">
    //                             <Image src={logoKa} id="Popover-top" style={{ width: "50%" }} fluid responsive />
    //                         </NavLink>
    //                     </Col>
    //                 </Row>
    //             </PopoverBody>
    //         </Popover>
    //     </div>
    // }

    // liveChat1024() {
    //     return <div>
    //         <div style={{ marginRight: "5%", width: "3%" }}>
    //             <Image src={logoLiveChat} id="Popover-top" style={{ width: "5%", position: 'fixed', bottom: '20px', right: '8.1%', zIndex: '1000' }} />
    //         </div>
    //         <Popover
    //             placement="top"
    //             isOpen={this.state.hovered}
    //             target="Popover-top"
    //             toggle={this.handleHoverChange}
    //         >
    //             <PopoverBody>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Line Chat</Col>
    //                     <Col md={6} xs={6} style={iconFooter}><Image src={logoLine} id="Popover-top" style={{ width: "40%" }} fluid responsive /></Col>
    //                 </Row>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Tel. Phone</Col>
    //                     <Col md={6} xs={6} style={iconFooter}>
    //                         <a href="tel:+66831885535">
    //                             <Image src={logoPhone} id="Popover-top" style={{ width: "40%" }} fluid responsive />
    //                         </a>
    //                     </Col>
    //                 </Row>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Request</Col>
    //                     <Col md={6} xs={6} style={iconFooter}>
    //                         <NavLink to="/Request">
    //                             <Image src={logoKa} id="Popover-top" style={{ width: "40%" }} fluid responsive />
    //                         </NavLink>
    //                     </Col>
    //                 </Row>
    //             </PopoverBody>
    //         </Popover>
    //     </div>
    // }

    // liveChat768() {
    //     return <div>
    //         <div style={{ marginRight: "5%", width: "3%" }}>
    //             <Image src={logoLiveChat} id="Popover-top" style={{ width: "6%", position: 'fixed', bottom: '20px', right: '11.5%', zIndex: '1000' }} />
    //         </div>
    //         <Popover
    //             placement="top"
    //             isOpen={this.state.hovered}
    //             target="Popover-top"
    //             toggle={this.handleHoverChange}
    //         >
    //             <PopoverBody>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Line Chat</Col>
    //                     <Col md={6} xs={6} style={iconFooter}><Image src={logoLine} id="Popover-top" style={{ width: "40%" }} fluid responsive /></Col>
    //                 </Row>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Tel. Phone</Col>
    //                     <Col md={6} xs={6} style={iconFooter}>
    //                         <a href="tel:+66831885535">
    //                             <Image src={logoPhone} id="Popover-top" style={{ width: "40%" }} fluid responsive />
    //                         </a>
    //                     </Col>
    //                 </Row>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Request</Col>
    //                     <Col md={6} xs={6} style={iconFooter}>
    //                         <NavLink to="/Request">
    //                             <Image src={logoKa} id="Popover-top" style={{ width: "40%" }} fluid responsive />
    //                         </NavLink>
    //                     </Col>
    //                 </Row>
    //             </PopoverBody>
    //         </Popover>
    //     </div>
    // }

    // liveChat425() {
    //     return <div>
    //         <div style={{ marginRight: "5%", width: "3%" }}>
    //             <Image src={logoLiveChat} id="Popover-top" style={{ width: "8%", position: 'fixed', bottom: '20px', right: '18.4%', zIndex: '1000' }} />
    //         </div>
    //         <Popover
    //             placement="top"
    //             isOpen={this.state.hovered}
    //             target="Popover-top"
    //             toggle={this.handleHoverChange}
    //         >
    //             <PopoverBody>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={7} style={textLiveChat}>Line Chat</Col>
    //                     <Col md={6} xs={5} style={iconFooter}><Image src={logoLine} id="Popover-top" style={{ width: "40%" }} fluid responsive /></Col>
    //                 </Row>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={7} style={textLiveChat}>Tel. Phone</Col>
    //                     <Col md={6} xs={5} style={iconFooter}>
    //                         <a href="tel:+66831885535">
    //                             <Image src={logoPhone} id="Popover-top" style={{ width: "40%" }} fluid responsive />
    //                         </a>
    //                     </Col>
    //                 </Row>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={7} style={textLiveChat}>Request</Col>
    //                     <Col md={6} xs={5} style={iconFooter}>
    //                         <NavLink to="/Request">
    //                             <Image src={logoKa} id="Popover-top" style={{ width: "40%" }} fluid responsive />
    //                         </NavLink>
    //                     </Col>
    //                 </Row>
    //             </PopoverBody>
    //         </Popover>
    //     </div>
    // }

    // liveChat375() {
    //     return <div>
    //         <div style={{ marginRight: "5%", width: "3%" }}>
    //             <Image src={logoLiveChat} id="Popover-top" style={{ width: "8%", position: 'fixed', bottom: '20px', right: '16.8%', zIndex: '1000' }} />
    //         </div>
    //         <Popover
    //             placement="top"
    //             isOpen={this.state.hovered}
    //             target="Popover-top"
    //             toggle={this.handleHoverChange}
    //         >
    //             <PopoverBody>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Line Chat</Col>
    //                     <Col md={6} xs={6} style={iconFooter}><Image src={logoLine} id="Popover-top" style={{ width: "100%" }} fluid responsive /></Col>
    //                 </Row>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Tel. Phone</Col>
    //                     <Col md={6} xs={6} style={iconFooter}>
    //                         <a href="tel:+66831885535">
    //                             <Image src={logoPhone} id="Popover-top" style={{ width: "100%" }} fluid responsive />
    //                         </a>
    //                     </Col>
    //                 </Row>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={6} style={textLiveChat}>Request</Col>
    //                     <Col md={6} xs={6} style={iconFooter}>
    //                         <NavLink to="/Request">
    //                             <Image src={logoKa} id="Popover-top" style={{ width: "100%" }} fluid responsive />
    //                         </NavLink>
    //                     </Col>
    //                 </Row>
    //             </PopoverBody>
    //         </Popover>
    //     </div>
    // }
    // liveChat320() {
    //     return <div>
    //         <div style={{ marginRight: "5%", width: "3%" }}>
    //             <Image src={logoLiveChat} id="Popover-top" style={{ width: "7%", position: 'fixed', bottom: '20px', right: '16%', zIndex: '1000' }} />
    //         </div>
    //         <Popover
    //             placement="top"
    //             isOpen={this.state.hovered}
    //             target="Popover-top"
    //             toggle={this.handleHoverChange}
    //         >
    //             <PopoverBody>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={9} style={textLiveChat}>Line Chat</Col>
    //                     <Col md={6} xs={3} style={iconFooter}><Image src={logoLine} id="Popover-top" style={{ width: "40%" }} fluid responsive /></Col>
    //                 </Row>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={9} style={textLiveChat}>Tel. Phone</Col>
    //                     <Col md={6} xs={3} style={iconFooter}>
    //                         <a href="tel:+66831885535">
    //                             <Image src={logoPhone} id="Popover-top" style={{ width: "40%" }} fluid responsive />
    //                         </a>
    //                     </Col>
    //                 </Row>
    //                 <Row id="row-popup">
    //                     <Col md={6} xs={9} style={textLiveChat}>Request</Col>
    //                     <Col md={6} xs={3} style={iconFooter}>
    //                         <NavLink to="/Request">
    //                             <Image src={logoKa} id="Popover-top" style={{ width: "40%" }} fluid responsive />
    //                         </NavLink>
    //                     </Col>
    //                 </Row>
    //             </PopoverBody>
    //         </Popover>
    //     </div>
    // }

    render() {
        return (
            // <>
            //     {window.innerWidth >= 2560 ?
            //         this.liveChat2560()
            //         : window.innerWidth >= 1920 ?
            //             this.liveChat1920()
            //             : window.innerWidth >= 1440 ?
            //                 this.liveChat1440()
            //                 : window.innerWidth >= 1024 ?
            //                     this.liveChat1024()
            //                     : window.innerWidth >= 768 ?
            //                         this.liveChat768()
            //                         : window.innerWidth >= 425 ?
            //                             this.liveChat425()
            //                             : window.innerWidth >= 375 ?
            //                                 this.liveChat375()
            //                                 : this.liveChat320()
            //     }
            // </>
            <FloatingMenu
                slideSpeed={500}
                direction="up"
                isOpen={this.state.isOpen}
                style={{ position: 'fixed', bottom: '20px', right: '3%', zIndex: '100000' }}
            >
                <MainButton
                    iconResting={<MdForum style={{ fontSize: 30, color: "aliceblue" }} />}
                    iconActive={<FaTimes style={{ fontSize: 30, color: "aliceblue" }} />}
                    style={{ backgroundColor: '#FF9C00' }}
                    size={60}
                    onClick={() => this.setState({ isOpen: !this.state.isOpen })}
                />

                <ChildButton
                    icon={<NavLink to="/Request"><FaCommentDots name="comment" style={{ fontSize: 25, color: "aliceblue" }} /></NavLink>}
                    background='black'
                    size={50}
                    onClick={() => { window.location = "/Request"; }}
                />

                <ChildButton
                    icon={
                        // <OverlayTrigger key="left" defaultShow={true} placement="left" overlay={<Tooltip id="tooltip-left"> <strong>Tel Phone</strong></Tooltip>}>
                        <FaPhoneAlt style={{ fontSize: 25, color: "aliceblue" }} />
                        // </OverlayTrigger>
                    }
                    background='teal'
                    size={50}
                    onClick={() => { window.open("tel:+66831885535"); }}
                />


                <ChildButton
                    icon={<LineIcon name="line" style={{ fontSize: 25, color: "aliceblue" }} />}
                    background='#00C300'
                    size={50}
                    onClick={() => { window.open("http://line.me/ti/p/0831885535", "_blank"); }}
                />
                <ChildButton
                    icon={<FaFacebookMessenger style={{ fontSize: 25, color: "aliceblue" }} />}
                    background='blue'
                    size={50}
                    onClick={() => { window.open("https://web.facebook.com/ptscombinationTH?_rdc=1&_rdr", "_blank"); }}
                />
                <ChildButton
                    icon={<FaMapMarkerAlt style={{ fontSize: 25, color: "aliceblue" }} />}
                    background='darkred'
                    size={50}
                    onClick={() => { window.open("https://goo.gl/maps/pJUA7Ufye1yqayxY9", "_blank"); }}
                />
            </FloatingMenu>
        )
    }
}

