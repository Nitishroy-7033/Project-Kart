import { Button, Col, Input, Row } from "antd";
import { setRole } from "../../context/reducers/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.auth);

  const login = () => {
    dispatch(setRole("user"));
    navigate("/"); 
  };

  const adminLogin = () => {
    dispatch(setRole("admin"));
    navigate("/admin"); // Redirect to Admin Dashboard
  };

  return (
    <Row
      align={"middle"}
      justify={"center"}
      style={{ padding: "0 24px 24px", minHeight: "100vh" }}
    >
      <Col
        span={8}
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(184, 184, 184, 0.5)",
        }}
      >
        <h1>Login Page</h1>
        <h2>Your Current Role is <span style={{color:"blue"}} >{role}</span></h2>
        <Input size="large" type="email" placeholder="Enter email" />
        <br />
        <br />
        <Input size="large" type="password" placeholder="Enter password" />
        <br />
        <br />

        <Row justify="center" style={{ gap: "10px" }}>
          <Button type="primary" onClick={login}>
            Login as user
          </Button>
          <Button type="primary" onClick={adminLogin}>
            Login as admin
          </Button>
          <Button
            type="primary"
            onClick={() => {
              console.log(role);
            }}
          >
            Print Role
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default LoginPage;
