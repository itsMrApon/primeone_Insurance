import React from 'react';
import { Service } from '@/types/service';
import '@/assets/css/ShortCard.css';

interface ShortCardProps {
  service: Service;
}

const ShortCard: React.FC<ShortCardProps> = ({ service }) => {
  return (
    <div className="short-card-wrapper">
      <main className="short-main">
        <hr />

        <section className="short-section">
          <div className="short-dot"></div>
          <div className="short-dot"></div>
          <div className="short-dot"></div>
          <div className="short-dot"></div>
          
          <h1 className="short-title">
            <span>Experience our</span><br />
            <strong>{service.details_short?.split(' ').slice(0, 2).join(' ')}</strong> <span>{service.details_short?.split(' ').slice(2).join(' ')}</span><br />
            <span> today</span>
          </h1>
        </section>
        
        <hr />
      </main>
    </div>
  );
};

export default ShortCard;
