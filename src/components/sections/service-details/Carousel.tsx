"use client";
import React, { useEffect } from 'react';
import { Service } from '@/types/service';
import '@/assets/css/Carousel.css';

interface CarouselProps {
  service: Service;
}

const Carousel: React.FC<CarouselProps> = ({ service }) => {
  
  useEffect(() => {
    // Initialize carousel functionality
    const slider = document.querySelector('.hero-slider');
    
    function activate(e: Event) {
      const target = e.target as HTMLElement;
      const items = document.querySelectorAll('.hero-item');
      
      if (target.matches('.hero-next') && slider) {
        slider.append(items[0]);
      }
      if (target.matches('.hero-prev') && slider) {
        slider.prepend(items[items.length-1]);
      }
    }

    document.addEventListener('click', activate, false);
    
    return () => {
      document.removeEventListener('click', activate, false);
    };
  }, []);

  return (
    <section className="hero-carousel-wrapper">
      <main className="hero-main">
        <ul className="hero-slider">
          <li className="hero-item" style={{backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')"}}>
            <div className="hero-content">
              <h2 className="hero-title">&ldquo;{service.title}&rdquo;</h2>
              <p className="hero-description">{service.description}</p>
              <button className="hero-btn">Read More</button>
            </div>
          </li>
          <li className="hero-item" style={{backgroundImage: "url('https://i.redd.it/tc0aqpv92pn21.jpg')"}}>
            <div className="hero-content">
              <h2 className="hero-title">&ldquo;Professional Service&rdquo;</h2>
              <p className="hero-description">
                Expert solutions tailored to your needs with years of experience and dedication.
              </p>
              <button className="hero-btn">Read More</button>
            </div>
          </li>
          <li className="hero-item" style={{backgroundImage: "url('https://wharferj.files.wordpress.com/2015/11/bio_north.jpg')"}}>
            <div className="hero-content">
              <h2 className="hero-title">&ldquo;Trusted Partnership&rdquo;</h2>
              <p className="hero-description">
                Building lasting relationships through reliable service and professional excellence.
              </p>
              <button className="hero-btn">Read More</button>
            </div>
          </li>
          <li className="hero-item" style={{backgroundImage: "url('https://images7.alphacoders.com/878/878663.jpg')"}}>
            <div className="hero-content">
              <h2 className="hero-title">&ldquo;Quality Assurance&rdquo;</h2>
              <p className="hero-description">
                Comprehensive solutions with attention to detail and commitment to excellence.
              </p>
              <button className="hero-btn">Read More</button>
            </div>
          </li>
          <li className="hero-item" style={{backgroundImage: "url('https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg')"}}>
            <div className="hero-content">
              <h2 className="hero-title">&ldquo;Innovation Focus&rdquo;</h2>
              <p className="hero-description">
                Cutting-edge approaches combined with proven methodologies for optimal results.
              </p>
              <button className="hero-btn">Read More</button>
            </div>
          </li>
          <li className="hero-item" style={{backgroundImage: "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')"}}>
            <div className="hero-content">
              <h2 className="hero-title">&ldquo;Client Success&rdquo;</h2>
              <p className="hero-description">
                Dedicated support and personalized service to achieve your business objectives.
              </p>
              <button className="hero-btn">Read More</button>
            </div>
          </li>
        </ul>
        <nav className="hero-nav">
          <button className="hero-btn-nav hero-prev">‹</button>
          <button className="hero-btn-nav hero-next">›</button>
        </nav>
      </main>
    </section>
  );
};

export default Carousel;
