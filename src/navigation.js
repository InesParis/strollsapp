import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import blacklogo from "./blacklogo.jpg";
import "./navigation.css";
export default function NavigationTool() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand src={blacklogo}></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/More">
              About Strolls
            </Nav.Link>
            <Nav.Link href="#link">London</Nav.Link>
            <Nav.Link href="#link">Paris</Nav.Link>
            <Nav.Link href="#link">Exhibitions</Nav.Link>
            <Nav.Link href="#link">Future Cities</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
