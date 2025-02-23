import { Button, Col, Input, Row } from "antd";
import { setRole } from "../../context/reducers/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/theme/ThemeContext";
// import { useTheme } from "../context/theme/ThemeContext";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.auth);
  const { theme, toggleTheme } = useTheme();
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
      style={{ 
        background: theme.background,
        padding: "0 24px 24px", minHeight: "100vh" }}
    >
      <Col
        span={8}
        style={{
          backgroundColor: theme.background,
          padding: "20px",
          boxShadow: "0 0 10px rgba(217, 217, 217, 0.5)",
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
