import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";

// Import resume preview image
import resumeImage from "../../Assets/resume-image.jpg"; // JPG/PNG preview image

function ResumeSimple() {
  const downloadResume = () => {
    const url = process.env.PUBLIC_URL + "/Resume.pdf";

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Fallback: open PDF in new tab if download doesn't start automatically
    setTimeout(() => {
      window.open(url, "_blank");
    }, 1000);
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
            border: "1px solid #ddd",
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
