import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./template/Header";
import Footer from "./template/Footer";
import Routes from "./template/Routes";

// import Home from "./content/Home";
// import About from "./content/About";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    );
  }
}
