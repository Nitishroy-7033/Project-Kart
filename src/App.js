import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import UserRoutes from "./routes/userRoutes";
import AdminRoutes from "./routes/adminRoutes";
import ProtectedRoute from "./configs/protectedRoutes";
import AuthPage from "./pages/auth/authPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("role")) {
      localStorage.setItem("role", "User");
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />

        {/* Public User Routes */}
        <Route element={<ProtectedRoute allowedRoles={["User", "Admin", "Seller","Customer"]} />}>
          <Route path="/*" element={<UserRoutes />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["Admin", "Seller"]} />}>
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
