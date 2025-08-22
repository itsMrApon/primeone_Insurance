import React from 'react';
import { Service } from '@/types/service';
import '@/assets/css/LongCard.css';

interface LongCardProps {
  service: Service;
}

const LongCard: React.FC<LongCardProps> = ({ service }) => {
  const generateServiceDetails = (service: Service): string => {
    return `// ${service.title} - Service Details

/* Service Information */
service: {
  id: ${service.id},
  title: "${service.title}",
  type: "${service.type}",
  category: "${service.category?.name || 'General'}",
  created: "${new Date(service.created_at).toLocaleDateString()}",
  
  description: "${service.description || 'Professional service tailored to your needs'}",
  
  features: [
    "Professional consultation",
    "Expert guidance", 
    "Customized solutions",
    "24/7 support availability",
    "Competitive pricing",
    "Quality assurance"
  ],
  
  pricing: {
    base: "${service.price || 'Contact for quote'}",
    currency: "USD",
    billing: "per project"
  },
  
  contact: {
    method: "consultation",
    response_time: "24 hours",
    availability: "business_days"
  }
}

/* Service Benefits */
✓ Expert professional service
✓ Customized to your needs  
✓ Reliable and trustworthy
✓ Competitive market rates
✓ Full support included

/* Ready to get started? */
// Contact us for detailed consultation`;
  };

  return (
    <div className="long-card">
      <div className="long-card-header">
        <div className="long-card-top">
          <div className="long-card-circle">
            <span className="long-card-red long-card-circle2"></span>
          </div>
          <div className="long-card-circle">
            <span className="long-card-yellow long-card-circle2"></span>
          </div>
          <div className="long-card-circle">
            <span className="long-card-green long-card-circle2"></span>
          </div>
          <div className="long-card-title">
            <p>{service.title.toLowerCase().replace(/\s+/g, '_')}_details.js</p>
          </div>
        </div>
      </div>
      <div className="long-card-code-container">
        <textarea 
          className="long-card-code" 
          value={generateServiceDetails(service)}
          readOnly
        />
      </div>
    </div>
  );
};

export default LongCard;
