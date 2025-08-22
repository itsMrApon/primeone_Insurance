import React from 'react';
import Link from 'next/link';
import { Service } from '@/types/service';
import '@/assets/css/QuoteCard.css';

interface QuoteCardProps {
  service: Service;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ service }) => {
  // Get current date or service creation date
  const date = new Date(service.created_at);
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const day = date.getDate();

  // Generate dynamic content based on service type
  const getServiceDescription = (serviceType: string) => {
    switch (serviceType?.toLowerCase()) {
      case 'insurance':
        return 'Get a personalized insurance quote tailored to your specific coverage needs and budget requirements.';
      case 'tax':
        return 'Receive a detailed tax preparation quote with transparent pricing for your filing requirements.';
      case 'other':
        return 'Request a customized quote for our professional services with competitive pricing options.';
      default:
        return `Get a comprehensive quote for ${service.title} with detailed pricing breakdown.`;
    }
  };

  const getCallToAction = (serviceType: string) => {
    switch (serviceType?.toLowerCase()) {
      case 'insurance':
        return 'Get Quote';
      case 'tax':
        return 'Tax Quote';
      case 'other':
        return 'Request Quote';
      default:
        return 'Get Quote';
    }
  };

  return (
    <div className="quote-parent">
      <div className="quote-card" data-service-type={service.type?.toLowerCase()}>
        <div className="quote-content-box">
          <span className="quote-card-title">{service.title}</span>
          <p className="quote-card-content">
            {getServiceDescription(service.type)}
          </p>
          <Link href={`/contact?service=${encodeURIComponent(service.title)}&type=${service.type}`} className="quote-see-more">
            {getCallToAction(service.type)}
          </Link>
        </div>
        <div className="quote-date-box">
          <span className="quote-month">{month}</span>
          <span className="quote-date">{day}</span>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
