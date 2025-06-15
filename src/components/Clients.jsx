import React from 'react';
import Slider from 'react-slick';

import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import client5 from '../assets/client5.png';
import client6 from '../assets/client6.png';
import client7 from '../assets/client7.png';

const clients = [client1, client2, client3, client4, client5, client6, client7];

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="clients" style={{ padding: '100px 0', backgroundColor: '#EFF6FF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Heading and Description */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: 'blue' }}>
            OUR CLIENTS
          </h2>
          <p style={{ fontSize: '16px', color: '#374151', marginTop: '12px' }}>
            Trusted by 100+ brands including restaurants, hospitals, and local businesses to enhance digital reputation and collect feedback.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {clients.map((imgSrc, index) => (
            <div
              key={index}
              style={{
                padding: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={imgSrc}
                alt={`Client ${index + 1}`}
                style={{
                  width: '100%',
                  maxHeight: '100px',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  backgroundColor: '#ffffff',
                  padding: '12px',
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
