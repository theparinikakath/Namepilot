import React from 'react';

const QuickContact = () => {
  return (
    <div style={{
      backgroundColor: '#1D4ED8',
      color: 'white',
      padding: '30px 20px',
      borderRadius: '10px',
      maxWidth: '600px',
      margin: '40px auto 20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Get in Touch Quickly</h2>
      <p style={{ marginBottom: '20px' }}>Have questions or want a demo? Reach out to our team now!</p>
      <form style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: '10px',
            fontSize: '1rem',
            borderRadius: '5px',
            border: 'none',
            flex: '1 1 200px',
            minWidth: '200px'
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: '10px',
            fontSize: '1rem',
            borderRadius: '5px',
            border: 'none',
            flex: '1 1 200px',
            minWidth: '200px'
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#2563EB',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 25px',
            fontSize: '1rem',
            cursor: 'pointer',
            flex: '0 0 auto'
          }}
        >
          Contact Us
        </button>
      </form>
    </div>
  );
};

const SectionWithImageText = ({ imageFirst = true, imgSrc, imgAlt, title, children }) => {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: imageFirst ? 'row' : 'row-reverse',
        alignItems: 'center',
        gap: '30px',
        marginBottom: '60px',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0 20px',
      }}
    >
      <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{ width: '100%', borderRadius: '10px', objectFit: 'cover', maxHeight: '300px' }}
        />
      </div>
      <div style={{ flex: '1 1 400px', minWidth: '300px', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#1D4ED8', marginBottom: '10px' }}>{title}</h2>
        <p style={{ fontSize: '1rem', color: '#334155' }}>{children}</p>
      </div>
    </section>
  );
};

const ReviewMonitoring = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #E0F2FE, #BAE6FD)', // Light blue gradient
        paddingBottom: '60px',
      }}
    >
      {/* Dark blue banner on top */}
      <div
        style={{
          backgroundColor: '#1E40AF', // dark blue
          color: 'white',
          padding: '60px 20px 40px',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          maxWidth: '900px',
          margin: '0 auto 60px',
          borderRadius: '10px',
        }}
      >
        <h1 style={{ fontSize: '2.8rem', marginBottom: '20px' }}>Reviews Management</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto' }}>
          Get customer reviews from 20+ Industry-leading review sites to acquire and retain more customers, and ensure loyalty.
        </p>
      </div>

      {/* First 3 feature blocks, alternating image/text */}
      <SectionWithImageText
        imageFirst={true}
        imgSrc="https://img.site24x7static.com/images/network-monitoring-banner-new.png"
        imgAlt="Multi-Site Monitoring"
        title="Multi-Site Monitoring"
      >
        Monitor your reviews with powerful filters for locations, ratings, sources, and sentiment wise so you can quickly locate the reviews you're looking for.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={false}
        imgSrc="https://famepilot.com/wp-content/uploads/2020/09/Review-Generation-Famepilot-1.png"
        imgAlt="Real-Time Alerts"
        title="Real-Time Alerts"
      >
        Get more local reviews on the sites to boost local ranking. Generating new reviews has never been easier. Famepilot sends a review request to customers to share their feedback on Industry-Leading Review Sites.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={true}
        imgSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
        imgAlt="Sentiment Analysis"
        title="Sentiment Analysis"
      >
        Understand customer sentiment with AI-powered analysis for smarter business decisions.
      </SectionWithImageText>

      {/* Last 4 feature blocks, alternating image/text */}
      <SectionWithImageText
        imageFirst={false}
        imgSrc="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80"
        imgAlt="Advanced Filtering"
        title="Advanced Filtering"
      >
        Utilize powerful filters to sort reviews by location, rating, source, and sentiment, allowing you to quickly identify and address specific feedback.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={true}
        imgSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
        imgAlt="Unified Dashboard"
        title="Unified Dashboard"
      >
        Access all your reviews in a single, easy-to-navigate dashboard, streamlining your review management process.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={false}
        imgSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
        imgAlt="Automated Responses"
        title="Automated Responses"
      >
        Set up automated responses to reviews, ensuring timely communication with your customers and maintaining a positive brand image.
      </SectionWithImageText>

      <SectionWithImageText
        imageFirst={true}
        imgSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
        imgAlt="Customizable Reports"
        title="Customizable Reports"
      >
        Generate detailed reports to analyze review trends, customer satisfaction, and overall brand reputation over time.
      </SectionWithImageText>

      {/* Quick Contact Form */}
      <QuickContact />
    </div>
  );
};

export default ReviewMonitoring;
