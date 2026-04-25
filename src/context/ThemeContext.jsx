import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [dyslexicFont, setDyslexicFont] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    if (dyslexicFont) {
      root.style.setProperty('--font-sans', '"OpenDyslexic", "Comic Sans MS", sans-serif');
    } else {
      root.style.removeProperty('--font-sans');
    }
  }, [theme, dyslexicFont]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, dyslexicFont, setDyslexicFont }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
