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
          <li className="hero-item" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80')"}}>
            <div className="hero-content">
              <h2 className="hero-title">&ldquo;{service.title}&rdquo;</h2>
              <p className="hero-description">{service.description}</p>
              <button className="hero-btn">Read More</button>
            </div>
          </li>
          <li className="hero-item" style={{backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80')"}}>
            <div className="hero-content">
              <h2 className="hero-title">&ldquo;Insurance Protection&rdquo;</h2>
              <p className="hero-description">
                Comprehensive insurance solutions to protect what matters most to you and your family.
              </p>
              <button className="hero-btn">Read More</button>
            </div>
          </li>
          <li className="hero-item" style={{backgroundImage: "url('https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80')"}}>
            <div className="hero-content">
              <h2 className="hero-title">&ldquo;Tax Services&rdquo;</h2>
              <p className="hero-description">
                Expert tax preparation and planning services to maximize your savings and ensure compliance.
              </p>
              <button className="hero-btn">Read More</button>
            </div>
          </li>
          <li className="hero-item" style={{backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80')"}}>
            <div className="hero-content">
              <h2 className="hero-title">&ldquo;Financial Planning&rdquo;</h2>
              <p className="hero-description">
                Strategic financial planning and investment advice to secure your financial future.
              </p>
              <button className="hero-btn">Read More</button>
            </div>
          </li>
          <li className="hero-item" style={{backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80')"}}>
            <div className="hero-content">
              <h2 className="hero-title">&ldquo;Professional Team&rdquo;</h2>
              <p className="hero-description">
                Experienced professionals dedicated to providing personalized service and expert guidance.
              </p>
              <button className="hero-btn">Read More</button>
            </div>
          </li>
          <li className="hero-item" style={{backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80')"}}>
            <div className="hero-content">
              <h2 className="hero-title">&ldquo;Client Success&rdquo;</h2>
              <p className="hero-description">
                Building lasting relationships through reliable service and achieving your financial goals.
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
