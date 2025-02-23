import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import HomePage from "../pages/home/homePage";
import UserLayout from "../layout/userLayout";

const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </UserLayout>
  );
};

export default UserRoutes;
