import React from 'react';
import { Service } from '@/types/service';
import '@/assets/css/EmailCard.css';

interface EmailCardProps {
  service: Service;
}

const EmailCard: React.FC<EmailCardProps> = ({ service }) => {
  // Use tax-specific email for tax services, default email for others
  const emailAddress = service.type === 'tax' ? 'helpfortax1040@gmail.com' : 'dhossain143@gmail.com';
  
  return (
<div className="email-card">
  <div className="email-card-content">
    <div className="email-card-top">
      <span className="email-card-title"></span>
      <p>{service.title}</p>
    </div>
    <div className="email-card-bottom">
      <a href={`mailto:${emailAddress}`}>
      <p>{emailAddress}</p></a>
      <svg width="32" viewBox="0 -960 960 960" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path></svg>
    </div>
  </div>
  <div className="email-card-image">
    <svg width="48" viewBox="0 -960 960 960" height="48" xmlns="http://www.w3.org/2000/svg"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"></path></svg>
  </div>
</div>
  );
};

export default EmailCard;
