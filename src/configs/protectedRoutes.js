import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const role = localStorage.getItem("role");
  const location = useLocation();

  if (!role) {
    return <Navigate to="/auth" replace />;
  }

  // If the user has an allowed role, allow access
  if (allowedRoles.includes(role)) {
    return <Outlet />;
  }

  // If user tries to access /admin/* but isn't Admin/Seller, redirect to /auth
  if (location.pathname.startsWith("/admin") && !(role === "Admin" || role === "Seller")) {
    return <Navigate to="/auth" replace />;
  }

  // Default redirect for unauthorized access
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
