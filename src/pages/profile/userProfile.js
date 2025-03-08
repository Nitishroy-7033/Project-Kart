import { TbLogout2 } from "react-icons/tb";
import "./style.css";

import { Button, Col, Layout, Row } from "antd";
import { MdOutlineAddChart } from "react-icons/md";

const UserProfile = () => {
  return (
    <Layout className="body-container">
      <br></br>
      <br></br>
      <br></br>
      <Row
        style={{
          gap: "20px",
        }}
      >
        <div className="user-profile-box"></div>
        <Col>
          <Row
            style={{
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            Nitish kumar
          </Row>
          <Row
            style={{
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Nitishkumar@gmail.com
          </Row>
          <br></br>
          <Row style={{
            gap:'10px'
          }}>
            <Button><TbLogout2/> Logout</Button>
            <Button><MdOutlineAddChart/>  Post a Ads</Button>
          </Row>
        </Col>
      </Row>
      <br></br>
      this is profiel
    </Layout>
  );
};

export default UserProfile;
