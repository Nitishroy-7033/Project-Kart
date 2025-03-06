import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const UserLayout = () => {
  return (
    <Layout>
      {/* <Navbar /> */}
        <Content style={{ padding: "20px", minHeight: "80vh" }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default UserLayout;
