import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./template/Header";
import Footer from "./template/Footer";
import Routes from "./template/Routes";

// import Home from "./content/Home";
// import About from "./content/About";

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
