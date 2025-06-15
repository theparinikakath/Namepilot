import React from 'react';
import './Everyone.css'; // custom styles for flipping

const cardData = [
  {
    title: 'Single Location Business',
    text: 'If you are a single location business, and finding it difficult to manage customer engagement proactively. You can now setup review request by sending them automatically to your review sites.',
  },
  {
    title: 'Enterprise - Multiple Business Locations',
    text: 'Win your customers with best experience. If you have more than 1 location to manage for new posts, Q&A, ratings and reviews across multiple online platforms, Famepilot is your automated solution.',
  },
  {
    title: 'Agency, Re-Sellers, Digital Marketing Agencies',
    text: 'Famepilot is the best choice for agencies & resellers to manage your clients’ reputation. Built for online marketing and SEO agencies, it gives you full control and flexibility.',
  },
];

const Everyone = () => {
  return (
    <section id="everyone" style={{ padding: '100px 0', backgroundColor: '#F0F9FF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '40px',
            color: 'blue',
            textAlign: 'center',
          }}
        >
          Famepilot Is For Everyone
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'space-between',
          }}
        >
          {cardData.map((card, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>

                {/* Back Side */}
                <div className="flip-card-back">
                  <h3>{card.title}</h3>
                  <a href="/signup">
                    <button className="signup-btn">Sign Up Now</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Everyone;
