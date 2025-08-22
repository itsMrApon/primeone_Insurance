import React from 'react';
import { Service } from '@/types/service';
import '@/assets/css/PdfCard.css';

interface PdfCardProps {
  service: Service;
}

const PdfCard: React.FC<PdfCardProps> = ({ service }) => {
  const handleDownloadPdf = () => {
    // Here you can implement PDF download logic
    // You could integrate with a backend API to generate and download PDFs
    const fileName = `${service.title.replace(/\s+/g, '_')}_Details.pdf`;
    alert(`PDF download for "${service.title}" will be implemented.\nFile: ${fileName}`);
    
    // Example of what you might implement:
    // window.open(`/api/pdf/download?serviceId=${service.id}`, '_blank');
  };

  const getPdfContent = (serviceType: string) => {
    switch (serviceType?.toLowerCase()) {
      case 'insurance':
        return 'Coverage Details';
      case 'tax':
        return 'Tax Guide';
      case 'other':
        return 'Service Info';
      default:
        return 'Read More';
    }
  };

  const getServiceDescription = (serviceType: string) => {
    switch (serviceType?.toLowerCase()) {
      case 'insurance':
        return 'COMPREHENSIVE. PROTECTIVE. SECURE.';
      case 'tax':
        return 'ACCURATE. COMPLIANT. EFFICIENT.';
      case 'other':
        return 'PROFESSIONAL. RELIABLE. EXPERT.';
      default:
        return 'QUALITY. DETAILED. COMPREHENSIVE.';
    }
  };

  return (
    <div className="pdf-card" onClick={handleDownloadPdf}>
      <div className="pdf-card-inner">
        <div className="pdf-card-front">
          <div className="pdf-noise"></div>
          <div className="pdf-product-image">
            <svg
              className="pdf-product-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="brutal-pattern"
                  patternUnits="userSpaceOnUse"
                  width="8"
                  height="8"
                >
                  <rect width="8" height="8" fill="#fff"></rect>
                  <rect width="4" height="4" fill="#000"></rect>
                  <rect x="4" y="4" width="4" height="4" fill="#000"></rect>
                </pattern>
              </defs>

              <polygon
                points="50,10 90,30 90,70 50,90 10,70 10,30"
                fill="#fff"
                stroke="#fff"
                strokeWidth="3"
              ></polygon>
              <polygon
                points="50,20 80,35 80,65 50,80 20,65 20,35"
                fill="#000"
                stroke="#fff"
                strokeWidth="2"
              ></polygon>
              <rect
                x="35"
                y="35"
                width="30"
                height="30"
                fill="url(#brutal-pattern)"
              ></rect>
              <polygon points="50,25 70,40 50,55 30,40" fill="#fff"></polygon>
              <circle cx="50" cy="45" r="8" fill="#000"></circle>
              <rect x="46" y="41" width="8" height="8" fill="#fff"></rect>
              <polygon points="50,60 65,70 50,75 35,70" fill="#fff"></polygon>
            </svg>
          </div>
          <div className="pdf-card-content">
            <div className="pdf-product-title">{getPdfContent(service.type)}</div>
            <div className="pdf-product-price">{service.title}</div>
            <div className="pdf-product-description">{getServiceDescription(service.type)}</div>
            <div className="pdf-buy-button">
              <div>Download</div>
            </div>
          </div>
        </div>
        <div className="pdf-card-back">
          <svg
            className="pdf-product-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="brutal-pattern-back"
                patternUnits="userSpaceOnUse"
                width="8"
                height="8"
              >
                <rect width="8" height="8" fill="#fff"></rect>
                <rect width="4" height="4" fill="#000"></rect>
                <rect x="4" y="4" width="4" height="4" fill="#000"></rect>
              </pattern>
            </defs>

            <polygon
              points="50,10 90,30 90,70 50,90 10,70 10,30"
              fill="#fff"
              stroke="#fff"
              strokeWidth="3"
            ></polygon>
            <polygon
              points="50,20 80,35 80,65 50,80 20,65 20,35"
              fill="#000"
              stroke="#fff"
              strokeWidth="2"
            ></polygon>
            <rect
              x="35"
              y="35"
              width="30"
              height="30"
              fill="url(#brutal-pattern-back)"
            ></rect>
            <polygon points="50,25 70,40 50,55 30,40" fill="#fff"></polygon>
            <circle cx="50" cy="45" r="8" fill="#000"></circle>
            <rect x="46" y="41" width="8" height="8" fill="#fff"></rect>
            <polygon points="50,60 65,70 50,75 35,70" fill="#fff"></polygon>
          </svg>
          <div className="pdf-added-text">{service.title}</div>
          <div className="pdf-added-subtext">PDF DOCUMENT</div>
        </div>
      </div>
    </div>
  );
};

export default PdfCard;
