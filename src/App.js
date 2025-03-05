import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./context/theme/ThemeContext";
import { useSelector } from "react-redux";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import UserRoutes from "./routes/userRoutes";
import AdminRoutes from "./routes/adminRoutes";
import LoginPage from "./pages/auth/loginPage";
import ProtectedRoute from "./configs/protectedRoutes";
import ScrollToTop from "./context/ScrollToTop";
import AuthPage1 from "./pages/auth/pages/authPage1";

function App() {
  const { theme, toggleTheme } = useTheme();
  const { role } = useSelector((state) => state.auth);

  return (
    <Router>
     
        <ScrollToTop />
      <Routes>
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/auth1" element={<AuthPage1 />} />

        {/* Protected User Routes */}
        <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
          <Route path="/*" element={<UserRoutes />} />
        </Route>

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Route>

        {/* Catch-all Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
