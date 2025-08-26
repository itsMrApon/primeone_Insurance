'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize theme based on system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    applyTheme(prefersDark);
  }, []);

  const applyTheme = (isDarkMode: boolean) => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.add('dark');
    } else {
      rootElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    // Get center position for transition effect
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;

    // Use View Transition API if supported
    if ('startViewTransition' in document) {
      const documentWithTransition = document as Document & {
        startViewTransition: (callback: () => void) => {
          ready: Promise<void>;
        };
      };
      
      const transition = documentWithTransition.startViewTransition(() => {
        applyTheme(newIsDark);
      });

      transition.ready.then(() => {
        document.documentElement.style.setProperty('--x', `${x}px`);
        document.documentElement.style.setProperty('--y', `${y}px`);
      });
    } else {
      // Fallback for browsers without View Transition API
      applyTheme(newIsDark);
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
