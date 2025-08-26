import React from 'react';
import { Service } from '@/types/service';
import '@/assets/css/MotoCard.css';

interface MotoCardProps {
  service: Service;
}

const MotoCard: React.FC<MotoCardProps> = ({ service }) => {
  // Use tax-specific email for tax services, default email for others
  const moto = service.type === 'tax' ? 'Simplifying Taxes, Maximizing Returns' : 'Primeone Agency has the best solutions for your needs';

  return (
<div className="moto_card">
  <div className="moto_bg"></div>
  <div className="moto_blob"></div>
  <div className="moto_text">{moto}</div>
</div>

  );
};

export default MotoCard;
