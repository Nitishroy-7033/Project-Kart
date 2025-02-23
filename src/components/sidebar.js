import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider style={{ height: "100vh", position: "fixed", left: 0 }}>
      <div className="logo" style={{ height: "64px", textAlign: "center", lineHeight: "64px", color: "white", fontSize: "20px", fontWeight: "bold" }}>
        Admin Panel
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["dashboard"]}>
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          <Link to="/admin">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="users" icon={<UserOutlined />}>
          <Link to="/admin/users">Users</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
