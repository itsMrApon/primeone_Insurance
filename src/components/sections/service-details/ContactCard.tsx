import React, { useState } from "react";
import Image from "next/image";
import { Service } from '@/types/service';
import "../../../assets/css/ContactCard.css";

interface ContactCardProps {
  name: string;
  title: string;
  email: string;
  phoneNumber: string;
  image?: string;
  service?: Service;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, title, email, phoneNumber, image, service }) => {
  const [imageError, setImageError] = useState(false);

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Get service type for styling
  const serviceType = service?.type?.toLowerCase() || 'other';

  return (
    <div className="card" data-service-type={serviceType}>
      <button className="mail" onClick={handleEmailClick}>
        <svg
          className="lucide lucide-mail"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect rx="2" y="4" x="2" height="16" width="20"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      </button>
      <div className="profile-pic">
        {image && !imageError ? (
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image 
              src={image} 
              alt={name}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              onError={handleImageError}
            />
          </div>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              fill="#fbb9b6"
            />
          </svg>
        )}
      </div>
      <div className="bottom">
        <div className="content">
          <span className="name">{name}</span>
          <span className="about-me">
            {title}
          </span>
        </div>
        <div className="bottom-bottom">
          <div className="social-links-container">
            <svg
              viewBox="0 0 16 15.999"
              height="15.999"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(6 598)"
                d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z"
                data-name="Subtraction 4"
                id="Subtraction_4"
              ></path>
            </svg>
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              ></path>
            </svg>
            <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              ></path>
            </svg>
          </div>
          <button className="button" onClick={handleCallClick}>Contact Me</button>
        </div>
      </div>
    </div>

  );
};

export default ContactCard;
