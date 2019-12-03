import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="section">
          <div className="header">
            <img src="https://i.imgur.com/w5Fv9z2.png"></img>
            <nav>
              <a href="/promotions">promotions</a>
              <a href="/franchise">franchise</a>
              <a href="/jobs">jobs</a>
              <a href="/gallery">gallery</a>
              <a href="/contact">contact</a>
            </nav>
          </div>
          <div className="hero">
            <div className="hero-content">
              <h1>
                simple.<span>fuss free.</span>
              </h1>
              <h4>
                Street Fair was founded through reimagining our fast &
                convenient street food to be nutritious and delicious while
                being sustainable at the same time.
              </h4>
            </div>
            <img id="hero-image"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
