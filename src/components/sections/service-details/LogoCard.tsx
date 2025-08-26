import React, { useState } from "react";
import Image from "next/image";
import { Service } from '@/types/service';
import '@/assets/css/LogoCard.css';

interface LogoCardProps {
  image?: string;
  service?: Service;
}

const LogoCard: React.FC<LogoCardProps> = ({ image, service }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Default logo images based on theme
  const getDefaultLogo = () => {
    // Check if it's dark mode (you can adjust this logic based on your theme implementation)
    if (typeof window !== 'undefined') {
      const isDarkMode = document.documentElement.classList.contains('dark');
      return isDarkMode ? '/assets/imgs/logo/light.png' : '/assets/imgs/logo/dark.png';
    }
    return '/assets/imgs/logo/dark.png';
  };

  const logoSrc = image || getDefaultLogo();

  return (
    <div className="logo_card">
      {!imageError ? (
        <Image 
          src={logoSrc}
          alt={service?.title || 'Company Logo'}
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'center'
          }}
          onError={handleImageError}
          className="logo_image"
        />
      ) : (
        <div className="logo_fallback">
          <div className="logo_placeholder">
            {service?.title?.charAt(0) || 'L'}
          </div>
        </div>
      )}
      {service?.title && (
        <p className="logo_text">{service.title}</p>
      )}
    </div>
  );
};


export default LogoCard;
