import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I fell in love <span className="purple">Programming </span>
            and i have at learn something, I think,
            I am fluent and classics like <span className="purple">C, Java and React.</span>
            <br />
            Whenever possible, I also apply my passion for developing products with <span className="purple">Node.js</span> and <span className="purple">Modern Javascript Library and Frameworks </span>           
            like <span className="purple">React.js and Next.js.</span> <br />
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
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
