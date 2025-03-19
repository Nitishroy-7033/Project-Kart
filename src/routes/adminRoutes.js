import { Routes, Route, useNavigate } from "react-router-dom";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import { Layout, Menu } from "antd";
import React from "react";
import "./style.css"
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import AdminProductsPage from "../admin/pages/products/adminProductsPage";

const { Content, Footer, Header, Sider } = Layout;

const AdminRoutes = () => {
  const navigate = useNavigate(); // Hook for navigation

  const menu = [
    { key: "dashboard", icon: <TbLayoutDashboardFilled />, label: "Dashboard", path: "/admin/dashboard" },
    { key: "products", icon: <HiShoppingCart />, label: "Products", path: "/admin/products" },
    { key: "orders", icon: <HiOutlineDocumentArrowDown />, label: "Orders", path: "/admin/orders" },
  ];

  return (
    <Layout>
      {/* Sticky Sidebar */}
      <Sider width={200} className="admin-sider">
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          onClick={({ key }) => {
            const selectedMenu = menu.find((item) => item.key === key);
            if (selectedMenu) {
              navigate(selectedMenu.path);
            }
          }}
          items={menu}
        />
      </Sider>

      {/* Main Layout: Shifted to the right of the sidebar */}
      <Layout className="admin-layout">
        <Header className="admin-header" />

        {/* Scrollable Content */}
        <Content className="admin-content">
          <Routes>
            <Route path="/products" element={<AdminProductsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Content>

        {/* Footer */}
        <Footer className="admin-footer">
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminRoutes;