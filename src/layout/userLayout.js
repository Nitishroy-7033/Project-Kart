import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar";

const { Content } = Layout;

const UserLayout = () => {
  return (
    <Layout>
      <Navbar />

    

  
    </Layout>
  );
};

export default UserLayout;
