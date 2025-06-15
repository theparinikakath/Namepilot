import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    background: 'linear-gradient(to bottom right, #eff6ff, #dbeafe)',
    paddingBottom: '40px',
    minHeight: '100vh',
  },
  headingSection: {
    backgroundColor: '#1e40af',
    color: 'white',
    padding: '80px 20px',
    textAlign: 'center',
  },
  headingTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  headingText: {
    fontSize: '1.125rem',
    maxWidth: '600px',
    margin: '0 auto 30px',
  },
  tryFreeButton: {
    backgroundColor: 'white',
    color: '#1e40af',
    padding: '12px 36px',
    borderRadius: '9999px',
    fontWeight: '600',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    border: 'none',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '960px',
    margin: '24px auto',
    backgroundColor: 'white',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    overflow: 'hidden',
    alignItems: 'center',
    padding: '32px',
  },
  sectionReverse: {
    flexDirection: 'row-reverse',
  },
  imageContainer: {
    flex: '1 1 50%',
  },
  image: {
    width: '100%',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
  },
  textContainer: {
    flex: '1 1 50%',
    paddingLeft: '24px',
    paddingRight: '24px',
    color: '#111',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: '16px',
  },
  text: {
    fontSize: '1.125rem',
    lineHeight: '1.6',
    color: '#222',
  },
  quickContact: {
    backgroundColor: 'white',
    padding: '48px 20px',
    textAlign: 'center',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)',
    maxWidth: '960px',
    margin: '48px auto 0',
    borderRadius: '12px',
  },
  quickContactTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: '12px',
  },
  quickContactText: {
    color: '#555',
    marginBottom: '24px',
    fontSize: '1rem',
  },
  contactButton: {
    backgroundColor: '#1e40af',
    color: 'white',
    padding: '12px 36px',
    borderRadius: '9999px',
    fontWeight: '500',
    cursor: 'pointer',
    border: 'none',
    boxShadow: '0 4px 12px rgba(30, 64, 175, 0.7)',
  },
};

const HeadingSection = () => (
  <div style={styles.headingSection}>
    <h1 style={styles.headingTitle}>Smart Campaigns</h1>
    <p style={styles.headingText}>
      Run intelligent, automated campaigns to boost engagement and get better results for your business.
    </p>
    <Link to="/signup">
      <button
        style={styles.tryFreeButton}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = '#e0e7ff')}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = 'white')}
      >
        Try Free
      </button>
    </Link>
  </div>
);

const Section = ({ image, title, text, reverse }) => (
  <section
    style={{
      ...styles.section,
      ...(reverse ? styles.sectionReverse : {}),
    }}
  >
    <div style={styles.imageContainer}>
      <img src={image} alt={title} style={styles.image} />
    </div>
    <div style={styles.textContainer}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.text}>{text}</p>
    </div>
  </section>
);

const QuickContact = () => (
  <div style={styles.quickContact}>
    <h3 style={styles.quickContactTitle}>Need Help With Campaign Setup?</h3>
    <p style={styles.quickContactText}>
      Our team is ready to assist you in launching your Smart Campaigns effectively.
    </p>
    <Link to="/contact">
      <button
        style={styles.contactButton}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = '#1a3ea1')}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = '#1e40af')}
      >
        Contact Us
      </button>
    </Link>
  </div>
);

const SmartCampaigns = () => {
  return (
    <div style={styles.container}>
      <HeadingSection />

      <Section
        image="https://famepilot.com/wp-content/uploads/2020/10/rrc-1.png"
        title="Automate Your Outreach"
        text="Use AI-powered tools to create targeted campaigns that reach your customers at the right time with the right message. Save time, increase conversions, and grow your business effortlessly."
      />

      <Section
        image="https://famepilot.com/wp-content/uploads/2020/10/scm-1.png"
        title="Custom Templates"
        text="Choose from professionally designed templates tailored to various industries and goals. Quickly launch email, SMS, or push campaigns with just a few clicks."
        reverse
      />

      <Section
        image="https://famepilot.com/wp-content/uploads/2020/10/Select-Review-Method-in-Famepilot.png"
        title="Smart Segmentation"
        text="Segment your audience based on behavior, purchase history, or demographics. Deliver personalized campaigns that resonate with your users and drive action."
      />

      <Section
        image="https://famepilot.com/wp-content/uploads/2020/10/Todays-Agenda-1-1536x864.png"
        title="Real-Time Analytics"
        text="Monitor campaign performance with real-time analytics. Track open rates, click-throughs, and conversions to optimize your strategies instantly."
        reverse
      />

      <Section
        image="https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594132_1280.jpg"
        title="Multi-Channel Reach"
        text="Launch campaigns across multiple platforms including email, SMS, social media, and more – all from one unified dashboard."
      />

      <QuickContact />
    </div>
  );
};

export default SmartCampaigns;
