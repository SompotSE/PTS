import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import banner1 from '../image/banner1.jpg';
import banner2 from '../image/banner2.jpg';
import banner3 from '../image/banner3.jpg';
import banner4 from '../image/banner4.jpg';
import banner5 from '../image/banner5.jpg';
import banner6 from '../image/banner6.jpg';
export default class Home extends Component {
    render() {
        return (
            < Carousel style={{marginLeft: "1%", marginRight: "1%", marginTop: "1%"}}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                        fluid responsive
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                        fluid responsive
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                        fluid responsive
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                        fluid responsive
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner5}
                        alt="Third slide"
                        fluid responsive
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner6}
                        alt="Third slide"
                        fluid responsive
                    />
                </Carousel.Item>
            </Carousel >
        )
    }
}