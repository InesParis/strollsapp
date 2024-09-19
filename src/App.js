import "./App.css";
import React from "react";
import Videos from "./Videos.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div className="App">
      <div className="Brand">STROLLS</div>
      <div>
        <Navbar expand="lg" className="navbar-custom ">
          <Container className="navbar-items">
            <Navbar.Brand href="#" className="navbar-content">
              Home
            </Navbar.Brand>
            <Navbar.Brand href="#" className="navbar-content">
              About
            </Navbar.Brand>
            <Navbar.Brand href="#" className="navbar-content">
              Cities
            </Navbar.Brand>
            <Navbar.Brand href="#" className="navbar-content">
              Exhibitions
            </Navbar.Brand>
            <Navbar.Brand href="#" className="navbar-content">
              Roadmap
            </Navbar.Brand>
            <Navbar.Brand href="#" className="navbar-content">
              Contact
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <div className="main">
        <Videos />
      </div>
      <footer>
        Join our mailing list to get updates from the shows. email: link
      </footer>
    </div>
  );
}

export default App;
