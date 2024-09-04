import React from "react";
import Button from "react-bootstrap/Button";
export default function MyButton({ to }) {
  return (
    <a href={`More${to}`}>
      <Button variant="outline-light">
        Learn {to === "./more" ? "more" : to}
      </Button>
    </a>
  );
}
