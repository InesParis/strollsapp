import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
export default function Footer() {
  return (
    <section className="foot">
      <Container>
        <Row>
          <Col>
            <h3>Socials</h3>
          </Col>

          <Col>
            {" "}
            <h3>Shop</h3>
          </Col>

          <Col>
            <h3>Contact</h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
