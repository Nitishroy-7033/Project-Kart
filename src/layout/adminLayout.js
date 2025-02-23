import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

const AdminLayout = () => {
  return (
    <div className="admin-container" style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
