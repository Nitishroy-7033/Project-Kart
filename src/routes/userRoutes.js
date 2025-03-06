import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import { Layout } from "antd";

const UserRoutes = () => {
  
  const { isNotificationShow } = useSelector((state) => state.appSettings);
  return (
    <Layout >
     {
        isNotificationShow === true? <TopNotificationBanner /> : null
     }
      {/* <Navbar /> */}
     <div>
     <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/products/:productId" element={<ProductDetails />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
     </div>
     <FooterWidget/>
    </Layout>
  );
};

export default UserRoutes;
