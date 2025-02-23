import { Layout, Menu, Button, Row } from "antd";
import { Link } from "react-router-dom";
import { useTheme } from "../context/theme/ThemeContext";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const normalButtonStyle = {
    color: theme.lableColor,
    fontSize: "18px",
    fontWeight: "normal",
    textDecoration: "none",
    transition: "0.3s",
  };
  return (
    <Header
      style={{
        backgroundColor: theme.background,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <div style={{ color:  theme.text, fontSize: "20px", fontWeight: "bold" }}>
        React Antd Starter
      </div>
      <Row style={{ gap: "20px" }}>
        <Link
          style={normalButtonStyle}
          to="/"
        >
          Home
        </Link>
        <Link style={normalButtonStyle} to="/about">About</Link>
        <Link style={normalButtonStyle} to="/contact">Contact</Link>
        <Link style={normalButtonStyle} to="/admin">Admin</Link>
      </Row>
      <Button type="primary" shape="circle" icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />} onClick={toggleTheme} />
    </Header>
  );
};

export default Navbar;
