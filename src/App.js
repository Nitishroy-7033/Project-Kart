import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './context/theme/ThemeContext';
import NotFoundPage from './pages/notFound/NotFoundPage';
import UserRoutes from './routes/userRoutes';
import AdminRoutes from './routes/adminRoutes';
import LoginPage from './pages/auth/loginPage';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
    <Routes>
      <Route path="/*" element={<UserRoutes />} />
      <Route path="/auth" element={<LoginPage />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
  );
}

export default App;
