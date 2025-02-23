import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import AdminLayout from "../layout/adminLayout";

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        {/* <Route path="/admin" element={<DashboardPage />} /> */}
        {/* <Route path="/admin/users" element={<UsersPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
