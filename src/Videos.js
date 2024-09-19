import React from "react";
import "./Videos.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Videos() {
  return (
    <div className="videos">
      <Container>
        <Row>
          <Col>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/uwJ_Pbq-Ul4?si=U7RV_9FtY2GQo7i8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="gallery_item"
            ></iframe>
          </Col>
          <Col>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EY75Z4l20tY?si=fFTpWZNBkGARP7Ij"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="gallery_item"
            ></iframe>
          </Col>
          <Col>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ha_HHDRAHC0?si=m2EpixImfztUYoUg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="gallery_item"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
