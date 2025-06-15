import React from 'react';
import Slider from 'react-slick';

const reviews = [
  {
    text: "Famepilot really helped our business understand customer needs and improve overall satisfaction.",
    name: "John Doe",
    role: "Restaurant Owner",
  },
  {
    text: "The feedback collection and analysis tools are top-notch and very user friendly.",
    name: "Jane Smith",
    role: "Hospital Admin",
  },
  {
    text: "Their platform made managing multiple locations effortless and boosted our customer engagement.",
    name: "Michael Lee",
    role: "Retail Chain Manager",
  },
  {
    text: "Amazing support and intuitive interface! Highly recommend Famepilot for any business.",
    name: "Sara Johnson",
    role: "Hotel Manager",
  },
  {
    text: "The automated review requests saved us a lot of time and increased positive reviews significantly.",
    name: "Raj Patel",
    role: "Digital Marketing Agency",
  },
];

const Listen = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="listen" style={{ padding: '100px 0', backgroundColor: '#EFF6FF' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        {/* Heading */}
        <h2
          style={{
            fontSize: '32px',
            fontWeight: '700',
            color: 'blue',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          We listen to what our customers want
        </h2>

        {/* Review Cards Slider */}
        <Slider {...settings}>
          {reviews.map(({ text, name, role }, index) => (
            <div
              key={index}
              style={{
                padding: '15px',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '20px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  height: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <p style={{ fontStyle: 'italic', color: '#374151', fontSize: '16px', flexGrow: 1 }}>
                  "{text}"
                </p>
                <div style={{ marginTop: '20px', textAlign: 'right' }}>
                  <strong style={{ fontWeight: 'bold', color: '#1D4ED8' }}>{name}</strong>
                  <div style={{ fontSize: '14px', color: '#6B7280' }}>{role}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Listen;
