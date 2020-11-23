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
                    bootstrapURLKeys={{ key: "AIzaSyBE6J11a5MdRIs7XT112VKntqCxZCELKcs" }}
                    // bootstrapURLKeys={{ key: "" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onClick={() => { window.open("https://www.google.com/maps/place/13%C2%B056'37.4%22N+100%C2%B033'49.6%22E/@13.9437202,100.5615853,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d13.943715!4d100.563774", "_blank"); }}
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
                        text="PTS COMBINATION"
                    />
                    {/* </OverlayTrigger> */}
                </GoogleMapReact>
            </div >
        );
    }
}

export default RequestaQuote1Map;