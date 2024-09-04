import "./App.css";
import NavigationTool from "./navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./Footer";
import Hero from "./Hero";
function App() {
  return (
    <div className="App">
      <NavigationTool />

      <div>
        <Hero />
      </div>
      <div className="info">
        <Container fluid="md" className="maintext">
          <Row className="mb-5">
            <Col className="col-md-6">
              <h1 id="about">ABOUT STROLLS</h1>
              <p>
                Scrolling photographs are made of stitched panoramas resulting
                in miles and miles of photographs. The effect was achieved by
                layering street sides on each other in an attempt to make a
                virtual graffiti effect.
                <br />
                It’s fascinating how we remember cities and how it remembers us.
                In this project, I try to imagine how the city, streets,
                buildings and places record memory.
              </p>
            </Col>
            <Col className="d-none d-sm-block"></Col>
          </Row>
        </Container>
        <Container fluid="md" className="maintext">
          <Row className="mb-5">
            <Col className="d-none d-sm-block">
              <div></div>
            </Col>
            <Col className="col-md-6">
              <div>
                <h1>FUTURE EXHIBITIONS</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
