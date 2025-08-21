import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";

// Import resume preview image (from src/assets)
import resumeImage from "../../Assets/Resume-image.jpg"; 

function ResumeSimple() {
  const downloadResume = () => {
    fetch(process.env.PUBLIC_URL + "/Resume.pdf")
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Resume.pdf"; // Force download as PDF
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => {
        console.error("Failed to download PDF", err);
      });
  };

  return (
    <Container
      fluid
      className="resume-section"
      style={{
        position: "relative",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {/* Resume Preview */}
      <Row style={{ justifyContent: "center" }}>
        <img
          src={resumeImage}
          alt="Resume Preview"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "900px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        />
      </Row>

      {/* Download Button */}
      <Button
        className="fork-btn-inner"
        onClick={downloadResume}
        style={{
          fontSize: "18px",
          padding: "10px 20px",
          borderRadius: "6px",
          color: "white",
        }}
      >
        <AiOutlineDownload style={{ marginRight: "8px" }} />
        Download Resume
      </Button>
    </Container>
  );
}

export default ResumeSimple;
