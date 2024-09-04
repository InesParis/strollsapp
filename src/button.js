import React from "react";
import Button from "react-bootstrap/Button";
import "./button.css";
export default function MyButton() {
  return (
    <a href="/More" target="_blank" rel="noopener noreferrer">
      <Button variant="outline-light" className="button">
        Learn More
      </Button>
    </a>
  );
}
