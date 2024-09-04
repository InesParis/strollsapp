import React from "react";
import Button from "react-bootstrap/Button";
import "./button.css";
export default function MyButton({ to }) {
  return (
    <a href={`More${to}`}>
      <Button variant="outline-light" className="button">
        Learn More {to === "" ? "./more" : to}
      </Button>
    </a>
  );
}
