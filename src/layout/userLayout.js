import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar";

const { Content } = Layout;

const UserLayout = () => {
  return (
    <Layout>
      {/* Navbar at the top */}
      <Navbar />
      <Content style={{ padding: "20px", minHeight: "80vh" }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default UserLayout;
