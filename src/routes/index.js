import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "../content/Home";
import About from "../content/About";
import Contact from "../content/RequestaQuote";
import Contact1 from "../content/RequestaQuote1";
import TestAndMeasur from "../content/Product/TestMeasur";


export default () => (
    <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Contact1" component={Contact1} />
        <Route exact path="/TestAndMeasur" component={TestAndMeasur} />

    </Switch>
)