import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    background: 'linear-gradient(to bottom right, #eff6ff, #dbeafe)', // blue-50 to blue-100 gradient
    paddingBottom: '40px',
    minHeight: '100vh',
  },
  headingSection: {
    backgroundColor: '#1e40af', // dark blue
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
    color: '#111', // dark text
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#1e40af', // blue-800
    marginBottom: '16px',
  },
  text: {
    fontSize: '1.125rem',
    lineHeight: '1.6',
    color: '#222', // darker gray
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
    <h1 style={styles.headingTitle}>Our Services</h1>
    <p style={styles.headingText}>
      Managed Services to help Businesses in making their Customers Happy.
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
    <h3 style={styles.quickContactTitle}>Need Help Getting Started?</h3>
    <p style={styles.quickContactText}>
      Our experts are here to assist you in setting up your listings efficiently.
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

const ListingsManagement = () => {
  return (
    <div style={styles.container}>
      <HeadingSection />

      <Section
        image="https://famepilot.com/wp-content/uploads/2020/10/local-seo-1.png"
        title="Local SEO - Boost your Business Visibility on Google's Near Me Searches & get more Reservations and Queries."
        text="Google shows only that information in which it has pretty high confidence. A strategy that helps your business be more visible in local search results on Google should always consist of confident hints and accurate citations."
      />

      <Section
        image="https://famepilot.com/wp-content/uploads/2020/10/Slr-1.png"
        title="Store Locator - Easily Update changes of your Business information."
        text="Local SEO is as technical as SEO. It requires structured data and schema markups from your website to confidently hint google about your changes in your Business Information. Famepilot creates Store Locator similar to your theme and design that provides a plethora of benefits, local SEO, Leads, Queries are few that it offers."
        reverse
      />

      <Section
        image="https://famepilot.com/wp-content/uploads/2020/10/Listings-M-1.png"
        title="Listings Management - Maintaining Business Listings accurately can help your customers in finding your business easily."
        text="Efficiently manage listings for all your business locations from a single dashboard with consistency and ease."
      />

      <Section
        image="https://famepilot.com/wp-content/uploads/2020/10/Offline-Feedback-1.png"
        title="Offline Feedback Management - Get all your Feedback on your Famepilot Dashboard and respond directly from it."
        text="Whether you collect Paper Feedback, Feedback Forms or use any other 3rd party app for feedback collection. Famepilot have the managed solution for all to centralize the Feedback on one platform."
        reverse
      />

      <QuickContact />
    </div>
  );
};

export default ListingsManagement;
