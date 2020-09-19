import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./template/Header";
import Footer from "./template/Footer";
import Routing from "./routes";

// import Home from "./content/Home";
// import About from "./content/About";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
          <Routing />
        <Footer />
      </Router>
    );
  }
}


// import React, { Component } from 'react';
// import Routing from "./routes";
// import Footer from "./footer";
// import Header from "./header";


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <div id="content">
//           <Routing />
//         </div>
//         <Footer />

//       </div>
//     );
//   }
// }

// export default App;