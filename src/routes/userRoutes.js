import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import HomePage from "../pages/home/homePage";
import UserLayout from "../layout/userLayout";
import { Layout } from "antd";
import Navbar from "../components/navBar";
import TopNotificationBanner from "../components/topNotiticationBanner";
import { useDispatch, useSelector } from "react-redux";
import ProductDetails from "../pages/productDetails/productsDetails";

const UserRoutes = () => {
  const dispatch = useDispatch();
  
  const { isNotificationShow } = useSelector((state) => state.appSettings);
  return (
    <Layout >
     {
        isNotificationShow === true? <TopNotificationBanner /> : null
     }
      <Navbar />
     <div style={{
      // padding:"20px"
     }}>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        {/* <Route path="/" element={<LoginPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
     </div>
    </Layout>
  );
};

export default UserRoutes;
