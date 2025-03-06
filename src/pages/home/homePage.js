import { Col, Layout, Row } from "antd";
import "./style.css";

const HomePage = () => {
  return (
    <Layout
      style={{
        height: "100vh", // Full viewport height
      }}
    >
      <Row
        style={{
          height: "80vh", // 80% of the viewport height
          backgroundSize: "cover", // Ensure background image covers the entire area
          backgroundPosition: "center", // Center the image
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundColor: "var(--primary-color)", // Fallback background color
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col
          style={{
            padding: "20px",
            // backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
          }}
          justify={"center"}
          about="center"
          xs={24}
          md={24}
          lg={24}
          xl={24}
        >
          <Row justify={"center"}>
            <div className="live-button">
              <div className="circle"></div>
              Cantact With us
            </div>
          </Row>
          <Row justify={"center"}>
           <div  className="brand-tagline">
           One stop solution for all Student who <span
           style={{
            color: "var(--secondary-color)",
            fontWeight: "bold",
           }}
           >need project</span>
           </div>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default HomePage;
