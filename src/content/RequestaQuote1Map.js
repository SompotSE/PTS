import React, { Component } from "react";
import { Row } from 'react-bootstrap';
import { Map, GoogleApiWrapper } from 'google-maps-react';

 class RequestMap extends Component {
    render() {
        return (
            <Row>
                <Map
                    google={this.props.google}
                    style={{ width: '80%', height: '80%' }}
                    zoom={12}
                    initialCenter={{
                        lat: 13.8185021,
                        lng: 100.5141232
                    }}
                />
            </Row>
        )

    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAFHTcbUykLDkXfK19GoXmm8EltWUbq9dM")
})(RequestMap)