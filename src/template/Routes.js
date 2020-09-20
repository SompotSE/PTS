import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Home from "../content/Home";
import About from "../content/About";
// import Contact from "../content/RequestaQuote";

import Product from "../content/Product";

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={BasicElectronic} />
                <Route path="/Product/TestAndMeasurement" component={Product} />
            </Switch>
        );
    }
}
