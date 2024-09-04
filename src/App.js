import "./App.css";
import NavigationTool from "./navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import MyButton from "./button.js";
import Footer from "./Footer";
import Hero from "./Hero";
import More from "./more.js";
function App() {
  return (
    <div className="App">
      <NavigationTool />
      <Hero />

      <div className="info">
        <Container fluid="md" className="maintext">
          <Row className="mb-5">
            <Col className="col-md-6">
              <h1 id="about">ABOUT STROLLS</h1>
              <p>
                Strolls is a multimedia exploration of urban identity, memory,
                and the dynamic rhythms that define city life. As citizens, most
                of us spend our lives immersed in the urban environment—an
                ecosystem that shapes and reflects our identities. Understanding
                the city is not just about navigating its streets; it's about
                recognising the profound influence it has on who we are.
                <br />
                <Router>
                  <MyButton />

                  <Routes>
                    <Route path="More" element={<More />} />
                  </Routes>
                </Router>
              </p>
            </Col>
            <Col className="d-none d-sm-block">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/EY75Z4l20tY?si=Moab40fRO4VsgXcF"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        </Container>
        <Container fluid="md" className="maintext">
          <Row className="mb-5">
            <Col className="d-none d-sm-block">
              <div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/EY75Z4l20tY?si=Moab40fRO4VsgXcF"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
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
