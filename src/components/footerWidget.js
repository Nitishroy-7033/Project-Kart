import { Col, Row } from "antd";
import "./style.css";
const FooterWidget = () => {
  return (
    <Col
      style={{
        width: "100%",
        // height: "400px",
        backgroundColor: "var(--footer-color)",
      }}
    >
      <Row justify={"center"}>
        <Col sm={7} className="footer-col">
          <Row className="footer-header">NEXT-PASS</Row>
          <ul className="footer-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
            <li>
              <a href="#privacy-policy">Privacy and Policy</a>
            </li>
            <li>
              <a href="#return-refund">Return and Refund</a>
            </li>
          </ul>
        </Col>
      
        <Col sm={7} className="footer-col">
          <Row className="footer-header">NEXT-PASS</Row>
          <ul className="footer-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
            <li>
              <a href="#privacy-policy">Privacy and Policy</a>
            </li>
            <li>
              <a href="#return-refund">Return and Refund</a>
            </li>
          </ul>
        </Col>
      
        <Col sm={7} className="footer-col">
          <Row className="footer-header">NEXT-PASS</Row>
          <ul className="footer-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
            <li>
              <a href="#privacy-policy">Privacy and Policy</a>
            </li>
            <li>
              <a href="#return-refund">Return and Refund</a>
            </li>
          </ul>
        </Col>
      
      </Row>

      <Row
        justify={"center"}
        style={{
          padding: "10px",
          margin: "10px",
          fontSize: "15px",
          fontWeight: "500",
          color: "var(--primary-container)",
          backgroundColor: "var(--secondary-color)",
        }}
      >
        Made ❤️ Devhq.in
      </Row>
    </Col>
  );
};

export default FooterWidget;
