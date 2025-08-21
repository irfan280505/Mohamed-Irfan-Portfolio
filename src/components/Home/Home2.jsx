import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../../Assets/Projects/irfan.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                     <h6 style={{ fontSize: "1.5em", paddingBottom: "20px" }}>
              Let Intro <strong className="purple">Myself</strong>
            </h6>
                    Hi Everyone, I am <span className="purple">Mohamed Irfan</span> from{" "}
                    <span className="purple">Pudukkottai, India.</span>
                    <br />
                    I am currently studying Python Fullstack in Qspiders at Velachery, Chennai.
                    <br />
                    I have completed a Bachelor of Computer Application in J.J College of Arts and Science at Pudukkottai Affiliated to Bharathidasan University at Tiruchirappalli and
                    Now I am studying online Master of Computer Application at SRM Institute of Science and Technology at
                    Kattankulathur Campus, Chennai.
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" width={330} height={300}  />
            </Tilt>
          </Col>
        </Row>

          
        <Row>
          <Col md={12} className="home-about-social ">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
<ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/irfan280505"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/irfan-pathan-a035a031b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pathan_qaf?igsh=MXFuYmd2eXNzY2cyNQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
