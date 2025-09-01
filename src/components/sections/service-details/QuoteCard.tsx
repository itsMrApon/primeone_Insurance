import React from 'react';
import Link from 'next/link';
import { Service } from '@/types/service';
import '@/assets/css/QuoteCard.css';

interface QuoteCardProps {
  service: Service;
  customCallToAction?: string;
  customTitle?: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ service, customCallToAction, customTitle }) => {
  // Get current date or service creation date
  const date = new Date(service.created_at);
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const day = date.getDate();

  // Generate dynamic content based on custom title
  const getServiceDescription = (customTitle?: string) => {
    if (customTitle === "FAQ Quote") {
      return 'Find answers to frequently asked questions about our services and get instant quotes for your needs.';
    } else if (customTitle === "Portal Quote") {
      return 'Access our client portal for personalized quotes and manage your account with ease.';
    }
    return `Get a comprehensive quote for ${service.title} with detailed pricing breakdown.`;
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
          <span className="quote-card-title">{customTitle || service.title}</span>
          <p className="quote-card-content">
            {getServiceDescription(customTitle)}
          </p>
          <Link href={customCallToAction === "FAQ Quote" ? "/faq" : `/contact?service=${encodeURIComponent(service.title)}&type=${service.type}`} className="quote-see-more">
            {customCallToAction || getCallToAction(service.type)}
          </Link>
        </div>
        <div className="quote-date-box">
          <span className="quote-last-update">Last Update</span>
          <span className="quote-date">{month}</span>
          <span className="quote-date">{day}</span>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
