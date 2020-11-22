import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../css/marker.css';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const AnyReactComponent = ({ text }) => 
<>
    <div className="pin"></div> <div className="pulse"></div>
</>;

class RequestaQuote1Map extends Component {
    static defaultProps = {
        center: {
            lat: 13.943715,
            lng: 100.563774
        },
        zoom: 16
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    // bootstrapURLKeys={{ key: "AIzaSyAOZEMyf1aCftH2yCBpseNxMm0txvtyI7I" }}
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {/* <OverlayTrigger
                        trigger="click"
                        key="top"
                        placement="top"
                        overlay={
                            <Tooltip id="tooltip-top">
                                <strong>PTS COMBINATION</strong>.
                            </Tooltip>
                        }
                    > */}
                        <AnyReactComponent
                            lat={13.943715}
                            lng={100.563774}
                            text="My Marker"
                        />
                    {/* </OverlayTrigger> */}
                </GoogleMapReact>
            </div >
        );
    }
}

export default RequestaQuote1Map;