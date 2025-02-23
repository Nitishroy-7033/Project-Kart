import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './context/theme/ThemeContext';
import HomePage from './pages/home/homePage';
import NotFoundPage from './pages/notFound/NotFoundPage';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
     <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>
  );
}

export default App;
