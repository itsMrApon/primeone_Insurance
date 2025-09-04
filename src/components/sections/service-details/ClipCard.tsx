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

  // Helper to derive a readable name from a URL or file path
  const extractName = (src: string | null | undefined): string | null => {
    if (!src) return null;
    try {
      const last = src.split('?')[0].split('#')[0].split('/').pop() || '';
      if (!last) return null;
      const base = last.replace(/\.[^.]+$/, '');
      const spaced = base.replace(/[-_]+/g, ' ').trim();
      if (!spaced) return null;
      return spaced
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
    } catch {
      return null;
    }
  };

  // Support optional API fields image_1_name/image_2_name/image_3_name without changing global type
  type ServiceWithImageNames = Service & {
    image_1_name?: string;
    image_2_name?: string;
    image_3_name?: string;
    image_1_url?: string;
    image_2_url?: string;
    image_3_url?: string;
  };
  const svc = service as ServiceWithImageNames | undefined;

  // Prefer API-provided names if present, fallback to filename-derived, then default text
  const name1 = svc?.image_1_name || extractName(img1) || 'service image_1 name';
  const name2 = svc?.image_2_name || extractName(img2) || 'service image_2 name';
  const name3 = svc?.image_3_name || extractName(img3) || 'service image_3 name';

  // Optional per-image links (can be added by the API later)
  const url1 = svc?.image_1_url || null;
  const url2 = svc?.image_2_url || null;
  const url3 = svc?.image_3_url || null;

  return (
    <section className="clip_wrapper">
      <div className="clip_promo" style={{ '--overlay-color': 'hotpink' } as React.CSSProperties}>
        <div className="clip_image-wrapper">
          <Image src={img1} alt="Insurance" width={250} height={250} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        {url1 ? (
          <a href={url1} target="_blank" rel="noopener noreferrer" className="clip_title" data-cta="tutorial →">{name1}</a>
        ) : (
          <h2 className="clip_title" data-cta="tutorial →">{name1}</h2>
        )}
      </div>
      <div className="clip_promo" style={{ '--overlay-color': 'yellow' } as React.CSSProperties}>
        <div className="clip_image-wrapper">
          <Image src={img2} alt="Tax" width={250} height={250} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        {url2 ? (
          <a href={url2} target="_blank" rel="noopener noreferrer" className="clip_title" data-cta="tutorial →">{name2}</a>
        ) : (
          <h2 className="clip_title" data-cta="tutorial →">{name2}</h2>
        )}
      </div>
      <div className="clip_promo" style={{ '--overlay-color': 'dodgerblue' } as React.CSSProperties}>
        <div className="clip_image-wrapper">
          <Image src={img3} alt="Professional" width={250} height={250} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </div>
        {url3 ? (
          <a href={url3} target="_blank" rel="noopener noreferrer" className="clip_title" data-cta="tutorial →">{name3}</a>
        ) : (
          <h2 className="clip_title" data-cta="tutorial →">{name3}</h2>
        )}
      </div>
    </section>
  );
};

export default ClipCard;
