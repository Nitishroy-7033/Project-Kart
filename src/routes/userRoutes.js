import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import { Layout } from "antd";
import HomePage from "../pages/home/homePage";
import NavBar from "../components/navBar";
import AllProductsPage from "../pages/allProducts/allProductsPage";
import FooterWidget from "../components/footerWidget";
import ProductDetails from "../pages/productDetails/ProductDetails";
import UserProfile from "../pages/profile/userProfile";
import Preloader from "../components/preloader";
import { useEffect, useState } from "react";

const UserRoutes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Show for 2s
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Layout>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/users/:userId" element={<UserProfile />} />
          <Route path="/products/:productId/:productTitle" element={<ProductDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <FooterWidget />
    </Layout>
  );
};

export default UserRoutes;
