import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiEclipseide, SiPostman, SiVercel } from "react-icons/si";
import { Icon } from '@iconify/react';
import vscodeIcon from '@iconify-icons/simple-icons/visualstudiocode';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide /> {/* Eclipse IDE icon */}
      </Col>
       <Col xs={4} md={2} className="tech-icons">
      <Icon icon={vscodeIcon} />
    </Col>
    </Row>
  );
}

export default Toolstack;
