import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "../content/Home";
import About from "../content/About";
import Contact from "../content/RequestaQuote";
import Contact1 from "../content/RequestaQuote1";
import Product from "../content/Product";


export default () => (
    <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Contact1" component={Contact1} />
        <Route exact path="/Product/TestAndMeasurement" component={Product} />
        <Route exact path="/Product/Labpts" component={Product} />
        <Route exact path="/Product/TestingSolutionIntegration" component={Product} />

    </Switch>
)