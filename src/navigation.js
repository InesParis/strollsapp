import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import blacklogo from "./blacklogo.jpg";
import "./navigation.css";
export default function NavigationTool() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand
          src={blacklogo}
          href="#home"
          alt="strollslogo"
        ></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Exhibitions</Nav.Link>
          <Nav.Link href="#features">London</Nav.Link>
          <Nav.Link href="#pricing">Paris</Nav.Link>
          <Nav.Link href="#pricing">Future Cities</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
