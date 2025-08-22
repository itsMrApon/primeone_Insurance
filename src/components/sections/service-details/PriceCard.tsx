import React from 'react';
import Link from 'next/link';
import { Service } from '@/types/service';
import '@/assets/css/PriceCard.css';

interface PriceCardProps {
  service: Service;
}

const PriceCard: React.FC<PriceCardProps> = ({ service }) => {
  const getServiceFeatures = (serviceType: string) => {
    switch (serviceType?.toLowerCase()) {
      case 'insurance':
        return [
          { icon: 'shield', text: 'Coverage Analysis' },
          { icon: 'heart', text: 'Risk Assessment' },
          { icon: 'users', text: 'Family Protection' },
          { icon: 'phone', text: '24/7 Support' }
        ];
      case 'tax':
        return [
          { icon: 'calculator', text: 'Tax Preparation' },
          { icon: 'document', text: 'Document Review' },
          { icon: 'chart', text: 'Deduction Analysis' },
          { icon: 'calendar', text: 'Year-round Support' }
        ];
      default:
        return [
          { icon: 'star', text: 'Professional Service' },
          { icon: 'checkmark', text: 'Quality Assured' },
          { icon: 'support', text: 'Expert Guidance' },
          { icon: 'time', text: 'Timely Delivery' }
        ];
    }
  };

  const getIconSvg = (iconName: string) => {
    const icons = {
      shield: (
        <svg viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17 15.4,17.8 14.8,17.8H9.2C8.6,17.8 8,17 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" />
        </svg>
      ),
      heart: (
        <svg viewBox="0 0 24 24">
          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
        </svg>
      ),
      users: (
        <svg viewBox="0 0 24 24">
          <path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4M16,14C18.67,14 24,15.33 24,18V20H8V18C8,15.33 13.33,14 16,14M8,4C10.21,4 12,5.79 12,8C12,10.21 10.21,12 8,12C5.79,12 4,10.21 4,8C4,5.79 5.79,4 8,4M8,14C10.67,14 16,15.33 16,18V20H0V18C0,15.33 5.33,14 8,14Z" />
        </svg>
      ),
      phone: (
        <svg viewBox="0 0 24 24">
          <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
        </svg>
      ),
      calculator: (
        <svg viewBox="0 0 24 24">
          <path d="M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V8H17V4H7M7,10V12H9V10H7M11,10V12H13V10H11M15,10V12H17V10H15M7,14V16H9V14H7M11,14V16H13V14H11M15,14V16H17V14H15M7,18V20H9V18H7M11,18V20H13V18H11M15,18V20H17V18H15Z" />
        </svg>
      ),
      document: (
        <svg viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
        </svg>
      ),
      chart: (
        <svg viewBox="0 0 24 24">
          <path d="M22,21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21M16,13H18V15H16V13M12,8H14V15H12V8M8,11H10V15H8V11M4,9H6V15H4V9Z" />
        </svg>
      ),
      calendar: (
        <svg viewBox="0 0 24 24">
          <path d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19M5,6V5H19V6H5Z" />
        </svg>
      ),
      star: (
        <svg viewBox="0 0 24 24">
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
        </svg>
      ),
      checkmark: (
        <svg viewBox="0 0 24 24">
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        </svg>
      ),
      support: (
        <svg viewBox="0 0 24 24">
          <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z" />
        </svg>
      ),
      time: (
        <svg viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.7L16.2,16.2Z" />
        </svg>
      )
    };
    return icons[iconName as keyof typeof icons] || icons.star;
  };

  const features = getServiceFeatures(service.type);

  return (
    <div className="price-card">
      <div className="price-card-pattern-grid" />
      <div className="price-card-overlay-dots" />
      <div className="price-card-bold-pattern">
        <svg viewBox="0 0 100 100">
          <path strokeDasharray="15 10" strokeWidth={10} stroke="#000" fill="none" d="M0,0 L100,0 L100,100 L0,100 Z" />
        </svg>
      </div>
      <div className="price-card-title-area">
        <span>{service.title}</span>
        <span className="price-card-tag">{service.type}</span>
      </div>
      <div className="price-card-body">
        <div className="price-card-description">
          {service.details_short || 'Professional service tailored to meet your specific needs with expert guidance and reliable support.'}
        </div>
        <div className="price-card-feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="price-card-feature-item">
              <div className="price-card-feature-icon">
                {getIconSvg(feature.icon)}
              </div>
              <span className="price-card-feature-text">{feature.text}</span>
            </div>
          ))}
        </div>
        <div className="price-card-actions">
          <div className="price-card-price">
            <span className="price-card-price-currency">$</span>{service.price}
            <span className="price-card-price-period">per service</span>
          </div>
          <Link href="/contact" className="price-card-button">
            Get Started
          </Link>
        </div>
      </div>
      <div className="price-card-dots-pattern">
        <svg viewBox="0 0 80 40">
          <circle fill="#000" r={3} cy={10} cx={10} />
          <circle fill="#000" r={3} cy={10} cx={30} />
          <circle fill="#000" r={3} cy={10} cx={50} />
          <circle fill="#000" r={3} cy={10} cx={70} />
          <circle fill="#000" r={3} cy={20} cx={20} />
          <circle fill="#000" r={3} cy={20} cx={40} />
          <circle fill="#000" r={3} cy={20} cx={60} />
          <circle fill="#000" r={3} cy={30} cx={10} />
          <circle fill="#000" r={3} cy={30} cx={30} />
          <circle fill="#000" r={3} cy={30} cx={50} />
          <circle fill="#000" r={3} cy={30} cx={70} />
        </svg>
      </div>
      <div className="price-card-accent-shape" />
      <div className="price-card-corner-slice" />
      <div className="price-card-stamp">
        <span className="price-card-stamp-text">Approved</span>
      </div>
    </div>
  );
};

export default PriceCard;
