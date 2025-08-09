import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamed Irfan </span>
            from <span className="purple">Pudukkottai, India.</span>
            <br />
            I am currently studying python Fullstack in Qspiders at Velachery, Chennai.
            <br />
            I have completed Bachelor of Computer Application in J.J College of Arts and Science at Pudukkottai and now going online Master of Computer Application 
            in SRM Institude of Science and Technology at Kattangulathur Campus, Chennai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Video creator
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">irfan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
