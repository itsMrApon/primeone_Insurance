import React, { useEffect } from 'react';
import '@/assets/css/ThemeCard.css';

const ThemeCard: React.FC = () => {
  
  useEffect(() => {
    const checkbox = document.getElementById('theme-switch') as HTMLInputElement;
    
    const handleThemeChange = () => {
      const htmlElement = document.documentElement;
      if (checkbox?.checked) {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    };

    // Add event listener
    checkbox?.addEventListener('change', handleThemeChange);
    
    // Initialize to light mode (remove dark class if it exists)
    document.documentElement.classList.remove('dark');
    
    // Cleanup
    return () => {
      checkbox?.removeEventListener('change', handleThemeChange);
    };
  }, []);
  
  return (
    <div className="toggle-switch">
      <label className="switch-label">
        <input type="checkbox" className="checkbox" id="theme-switch" />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ThemeCard;
