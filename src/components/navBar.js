import { Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import { useTheme } from "../context/theme/ThemeContext";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" }}>
      {/* Left Side - Logo and Links */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", fontSize: "20px", fontWeight: "bold", marginRight: "20px" }}>
          MyApp
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          style={{ background: "transparent", borderBottom: "none" }}
        >
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </div>

      {/* Right Side - Theme Toggle Button */}
      <Button type="primary" shape="circle" icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />} onClick={toggleTheme} />
    </Header>
  );
};

export default Navbar;
