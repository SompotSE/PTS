import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "../content/Home";
import About from "../content/About";
import Contact from "../content/RequestaQuote1";
import Contact1 from "../content/RequestaQuote";
import Product from "../content/Product";

import BasicElectronic from "../content/Product/LabPTS/BasicElectronic";
import BasicAnalog from "../content/Product/LabPTS/BasicAnalog";
import EmbeddedLearning from "../content/Product/LabPTS/EmbeddedLearning";
import ControlSystem from "../content/Product/LabPTS/ControlSystem";
import Experimental from "../content/Product/LabPTS/Experimental";

import BrushedDC from "../content/Product/ControlSystem/BrushedDC";
import LevelProcess from "../content/Product/ControlSystem/LevelProcess";
import TempProcess from "../content/Product/ControlSystem/TempProcess";

export default () => (
    <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Contact1" component={Contact1} />
        <Route exact path="/Product/TestAndMeasurement" component={Product} />
        <Route exact path="/Product/Labpts" component={Product} />
        <Route exact path="/Product/TestingSolutionIntegration" component={Product} />

        <Route exact path="/Product/Labpts/BasicElectronic" component={BasicElectronic} />
        <Route exact path="/Product/Labpts/BasicAnalog" component={BasicAnalog} />
        <Route exact path="/Product/Labpts/EmbeddedLearning" component={EmbeddedLearning} />
        <Route exact path="/Product/Labpts/ControlSystem" component={ControlSystem} />
        <Route exact path="/Product/Labpts/Experimental" component={Experimental} />

        <Route exact path="/Product/Labpts/BrushedDC" component={BrushedDC} />
        <Route exact path="/Product/Labpts/LevelProcess" component={LevelProcess} />
        <Route exact path="/Product/Labpts/TempProcess" component={TempProcess} />

    </Switch>
)