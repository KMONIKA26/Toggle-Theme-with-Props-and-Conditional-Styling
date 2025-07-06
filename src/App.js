import React, { useContext } from "react";
import ThemeProvider, { ThemeContext } from "./ThemeContext";
import Main from "./components/Main";

const AppContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "20px"
  };

  return (
    <div style={appStyle}>
      <h1>React Context API Theme Example</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Main />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
