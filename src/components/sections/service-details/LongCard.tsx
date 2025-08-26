import React, { useState } from 'react';
import { Service } from '@/types/service';
import '@/assets/css/LongCard.css';

interface LongCardProps {
  service: Service;
}

const LongCard: React.FC<LongCardProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`longcard-wrapper ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <main className="longcard-main">
        <hr className="longcard-hr" />

        <section className="longcard-section">
          <h1 className={`longcard-title ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <span className="longcard-text"></span>
            <strong className="longcard-strong">{service.details_long}</strong><br />
            <span className="longcard-text"></span>
          </h1>
        </section>
        
        <div className="longcard-button-container">
          <div className="long_card_button" onClick={toggleExpanded}>
            <div className="box">R</div>
            <div className="box">E</div>
            <div className="box">A</div>
            <div className="box">D</div>
          </div>
        </div>
        
        <hr className="longcard-hr" />
      </main>
    </div>
  );
};

export default LongCard;
