import React, { useEffect } from 'react';
import { Service } from '@/types/service';
import '@/assets/css/ThemeCard.css';

interface ThemeCardProps {
  service: Service;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ service }) => {
  
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
    <>
      <input id="theme-switch" type="checkbox" />
      <div className="theme-app">
        <div className="theme-body">
          
          <div className="theme-phone">
          
            <div className="theme-menu">
              <div className="theme-time">4:20</div>
              <div className="theme-icons">
                <div className="theme-network"></div>
                <div className="theme-battery"></div>
              </div>
            </div>
          
            <div className="theme-content">
              <div className="theme-circle">
                <div className="theme-crescent"></div>
              </div>
             
              <label htmlFor="theme-switch">
                <div className="theme-toggle"></div>
                <div className="theme-names">
                  <p className="theme-light">Light</p>
                  <p className="theme-dark">Dark</p>
                </div>
              </label>
              
             
            </div>
            
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ThemeCard;
