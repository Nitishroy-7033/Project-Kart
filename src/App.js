import logo from './logo.svg';
import './App.css';
import { useTheme } from './context/theme/ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="App" style={{ background: theme.background, color: theme.text }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
      onClick={toggleTheme}
      style={{
        background: theme.primary,
        color: theme.text,
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
        marginTop: "20px",
        borderRadius: "5px",
      }}
    >
      Toggle Theme
    </button>
      </header>
    </div>
  );
}

export default App;
