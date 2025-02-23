import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import AdminLayout from "../layout/adminLayout";
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import React from "react";
import { Content, Footer, Header } from "antd/es/layout/layout";

const AdminRoutes = () => {
  const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));
  return (
    <Layout>
      <Sider>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <Routes>
            {/* <Route path="/admin" element={<DashboardPage />} /> */}
            {/* <Route path="/admin/users" element={<UsersPage />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminRoutes;
