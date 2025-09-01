import React from "react";
import Image from "next/image";
import { Service } from '@/types/service';
import '@/assets/css/ClipCard.css';

interface ClipCardProps {
  service?: Service;
}

const ClipCard: React.FC<ClipCardProps> = ({ service }) => {
  // Fallbacks if API images are missing
  const ClipSrc1 = '/assets/imgs/pages/insurance-consultancy/page-details/img-2.png';
  const ClipSrc2 = '/assets/imgs/pages/insurance-consultancy/page-details/img-1.png';
  const ClipSrc3 = '/assets/imgs/pages/insurance-consultancy/page-details/img-3.png';

  // Use API images if available, else fallback
  const img1 = service?.image_1 || ClipSrc1;
  const img2 = service?.image_2 || ClipSrc2;
  const img3 = service?.image_3 || ClipSrc3;

  return (
    <section className="clip_wrapper">
      <div className="clip_promo" style={{ '--overlay-color': 'hotpink' } as React.CSSProperties}>
        <div className="clip_image-wrapper">
          <Image src={img1} alt="Insurance" width={250} height={250} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <h2 className="clip_title" data-cta="tutorial →">Insurance</h2>
      </div>
      <div className="clip_promo" style={{ '--overlay-color': 'yellow' } as React.CSSProperties}>
        <div className="clip_image-wrapper">
          <Image src={img2} alt="Tax" width={250} height={250} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <h2 className="clip_title" data-cta="tutorial →">Tax</h2>
      </div>
      <div className="clip_promo" style={{ '--overlay-color': 'dodgerblue' } as React.CSSProperties}>
        <div className="clip_image-wrapper">
          <Image src={img3} alt="Professional" width={250} height={250} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        <h2 className="clip_title" data-cta="tutorial →">Professional</h2>
      </div>
    </section>
  );
};

export default ClipCard;
