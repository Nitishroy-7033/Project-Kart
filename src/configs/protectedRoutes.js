import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const role = localStorage.getItem("role"); 

  return allowedRoles.includes(role) ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
