import { Row } from "antd";
import "./style.css";
const NavBar = () => {
  return (
    <Row justify={"center"} className="nav-bar-top">
      <Row className="nav-bar" align={"middle"} justify={"space-between"}>
      <div className="logo">
        PROJECTS KART
      </div>
      <div>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
      </Row>
    </Row>
  );
};

export default NavBar;
