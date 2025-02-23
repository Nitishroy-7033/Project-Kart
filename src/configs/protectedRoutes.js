import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ allowedRoles }) => {
  const { role } = useSelector((state) => state.auth);

  return allowedRoles.includes(role) ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
