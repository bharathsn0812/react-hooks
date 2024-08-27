import React, { createContext, useState, useContext } from 'react';

// Create a Context
const ThemeContext = createContext();

// Create a Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ThemeButton Component
const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Current Theme: {theme}
    </button>
  );
};

// Main App Component
const App = () => {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
};

export default App;
