import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeSimple() {
  const downloadResume = async () => {
    try {
      const response = await fetch(pdf);
      if (!response.ok) throw new Error("Network response was not ok");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Resume.pdf");

      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  return (
    <Container fluid className="resume-section" style={{ position: "relative" }}>
      <Particle />

      <Row style={{ justifyContent: "center" }}>
        <iframe
          src={pdf + "#toolbar=0"}
          width="80%"
          height="1130px"
          title="Resume PDF"
          style={{ border: "1px solid #ddd", borderRadius: "8px" }}
        />
      </Row>

      <Row style={{ justifyContent: "center", marginTop: 20 }}>
        <Button
          variant="primary"
          onClick={downloadResume}
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeSimple;
