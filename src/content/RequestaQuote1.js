import React, { Component } from "react";
import { Form, Container, Row, Button, Col, Image } from 'react-bootstrap';
// import map from '../image/map.png'
import map from '../image/map.png';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Request extends Component {
    render() {
        return (
            <Container>
                <Row style={{ marginTop: '10%', marginBottom: '5%' }}>
                    <Col xs={1} md={1}></Col>
                    <Col xs={10} md={10}>
                        {/* <Image src={map.png} fluid responsive /> */}
                        <Image src={map} fluid responsive />
                    </Col>
                    <Col xs={1} md={1}></Col>
                </Row>
                {/* <Map
                    google={this.props.google}
                    style={{ width: '50%', height: '50%', position: 'relative' }}
                    zoom={12}
                    initialCenter={{
                        lat: 13.8185021,
                        lng: 100.5141232
                    }}
                /> */}
                {/* <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyAFHTcbUykLDkXfK19GoXmm8EltWUbq9dM" }}
                        defaultCenter={{
                            lat: 59.95,
                            lng: 30.33
                        }}
                        defaultZoom={11}
                    > */}
                        {/* <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        /> */}
                    {/* </GoogleMapReact>
                </div> */}
                <Row style={{}}>
                    <Col xs={2} md={1}></Col>
                    <Col xs={8} md={5}>
                        <div style={{ textAlign: 'left', fontSize: '30', fontWeight: 'bold', paddingBottom: '3%', color: 'DarkBlue' }}>CONTRACT US</div>
                        <Form>
                            <Form.Group controlId="formGroupName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" as="textarea" rows="2" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" as="textarea" rows="2" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="phone" as="textarea" rows="2" />
                            </Form.Group>
                            <Form.Group controlId="formGroupMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control type="message" placeholder="Write message" as="textarea" rows="5" />
                            </Form.Group>
                            <Form.Text id="passwordHelpBlock" muted>
                                Please enter the result number from above.
                            </Form.Text>
                            <Button type="submit" style={{ background: 'Navy', marginTop: '1%' }}>Send message</Button>
                        </Form>
                    </Col>
                    <Col xs={2} md={1}></Col>
                    <Col xs={2} md={1}></Col>
                    <Col xs={8} md={3}>
                        <div style={{ textAlign: 'left', fontSize: '30', fontWeight: 'bold', paddingTop: '25%' }}>ADDRESS</div>
                        <div>PTS COMBINATION CO., LTD. 11/26 Moo 1, Banmai tumbol, Pakkret, Nontaburi, 11120 Thailand</div>
                        <div></div>
                        <div style={{ textAlign: 'left', fontSize: '30', fontWeight: 'bold', paddingTop: '15%' }}>Contract :</div>
                        <div>Tel. 02-5015677, 02-5015228</div>
                        <div>Fax. 02-5015357</div>
                        <div>Email pts.sales8@gmail.com</div>
                        <div style={{ textAlign: 'left', fontSize: '30', fontWeight: 'bold', paddingTop: '15%' }}>Office Hours</div>
                        <div>M0-Fr : 8.30 - 17.00</div>
                        <div>Sa-Su : closed</div>
                    </Col>
                    <Col xs={2} md={1}></Col>
                </Row>
            </Container>
        )

    }
}

export default Request
// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyAFHTcbUykLDkXfK19GoXmm8EltWUbq9dM")
// })(Request)