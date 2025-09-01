import React from "react";
import Image from "next/image";
import { Service } from '@/types/service';
import '@/assets/css/IntroCard.css';

interface IntroCardProps {
  image?: string;
  service?: Service;
}

const IntroCard: React.FC<IntroCardProps> = ({ service }) => {
  // Always use img-5.png
  const IntroSrc = '/assets/imgs/pages/insurance-consultancy/page-details/img-5.png';
  const logoSrc = '/assets/imgs/logo/light.png';

  return (
    <section className="intro_wrapper">

      {/* Card */}
      <div className="intro_card" data-effect="zoom">
        <button className="intro_card__save js-save" type="button">
          <i className="fa fa-bookmark"></i>
        </button>
        <figure className="intro_card__image">
          <Image 
            src={IntroSrc} 
            alt="Service image"
            width={500}
            height={800}
            style={{ objectFit: 'cover' }}
          />
        </figure>
        <div className="intro_card__header">
          <figure className="intro_card__profile">
            <Image 
              src={logoSrc} 
              alt="Profile"
              width={140}
              height={140}
              style={{ objectFit: 'cover' }}
            />
          </figure>
        </div>
        <div className="intro_card__body">
          <h3 className="intro_card__name">Prime One</h3>

          <p className="intro_card__bio">American Trusted Agency That Cares About Your Needs</p>
        </div>
        <div className="intro_card__footer">
          <p className="intro_card__date">{service?.title || 'Service'}</p>
          <p className="intro_card__time"></p>
        </div>
      </div>
    </section>
  );
};

export default IntroCard;
