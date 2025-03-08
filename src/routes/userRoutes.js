import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import { Layout } from "antd";
import HomePage from "../pages/home/homePage";
import NavBar from "../components/navBar";
import AllProductsPage from "../pages/allProducts/allProductsPage";
import FooterWidget from "../components/footerWidget";

const UserRoutes = () => {
  return (
    <Layout >
     {/* {
        isNotificationShow === true? <TopNotificationBanner /> : null
     } */}
      <NavBar />
     <div>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<AllProductsPage />} />
        {/* <Route path="/products/:productId" element={<ProductDetails />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
     </div>
     <FooterWidget />
    </Layout>
  );
};

export default UserRoutes;
