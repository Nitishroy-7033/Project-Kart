import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import HomePage from "../pages/home/homePage";
import UserLayout from "../layout/userLayout";
import { Layout } from "antd";
import Navbar from "../components/navBar";
import LoginPage from "../pages/auth/loginPage";

const UserRoutes = () => {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<LoginPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default UserRoutes;
