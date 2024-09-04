import React from "react";

import Button from "react-bootstrap/Button";
import "./button.css";
export default function MyButton() {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default behavior of link
    window.open("/More", "_blank", "noopener,noreferrer"); // Open in a new tab
  };

  return (
    <Button variant="outline-light" className="button" onClick={handleClick}>
      Learn More
    </Button>
  );
}
