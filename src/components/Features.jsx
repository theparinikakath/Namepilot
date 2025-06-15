import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faRobot,
  faChartBar,
  faBell,
  faCog,
  faGlobe,
  faLock,
  faBullseye,
  faHeadset,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '960px',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#1e40af',
  },
  mainHeadingSection: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  mainHeadingSub: {
    fontSize: '1.25rem',
    color: '#444',
    marginBottom: '8px',
  },
  mainHeading: {
    fontSize: '2.8rem',
    fontWeight: '700',
    marginBottom: '8px',
  },
  mainHeadingSub2: {
    fontSize: '1.75rem',
    fontWeight: '600',
    color: '#1e40af',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
    gap: '24px',
    marginTop: '30px',
    marginBottom: '50px',
  },
  card: {
    backgroundColor: 'white',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    padding: '24px',
    textAlign: 'center',
  },
  cardIcon: {
    fontSize: '3rem',
    marginBottom: '16px',
    color: '#2563eb', // blue-600
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '12px',
  },
  cardText: {
    fontSize: '1rem',
    color: '#444',
    lineHeight: '1.5',
  },
  sectionHeading: {
    fontSize: '2rem',
    fontWeight: '700',
    borderBottom: '3px solid #1e40af',
    display: 'inline-block',
    marginBottom: '24px',
  },
  faqSection: {
    marginTop: '80px',
    marginBottom: '60px',
  },
  faqMainHeading: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1e40af',
    textAlign: 'center',
    marginBottom: '10px',
  },
  faqSubHeading: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#444',
    textAlign: 'center',
    marginBottom: '40px',
  },
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  faqItem: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    padding: '20px',
    cursor: 'pointer',
    userSelect: 'none',
  },
  faqQuestion: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: '600',
    fontSize: '1rem',
    color: '#1e40af',
  },
  faqAnswer: {
    marginTop: '12px',
    fontSize: '0.95rem',
    color: '#444',
    lineHeight: '1.4',
  },
  plusIcon: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e40af',
    userSelect: 'none',
    transition: 'transform 0.3s ease',
  },
  plusIconOpen: {
    transform: 'rotate(45deg)',
  },
};

const featureCards = [
  {
    icon: faRocket,
    title: 'Fast Performance',
    text: 'Experience lightning-fast response times for all your campaigns.',
  },
  {
    icon: faRobot,
    title: 'AI-Powered Insights',
    text: 'Gain smart recommendations based on data-driven AI algorithms.',
  },
  {
    icon: faChartBar,
    title: 'Detailed Analytics',
    text: 'Track every metric to optimize your marketing strategy effectively.',
  },
  {
    icon: faBell,
    title: 'Real-Time Alerts',
    text: 'Stay updated instantly on key events and campaign statuses.',
  },
  {
    icon: faCog,
    title: 'Custom Automation',
    text: 'Create workflows that run automatically without manual intervention.',
  },
  {
    icon: faGlobe,
    title: 'Multi-Channel Support',
    text: 'Reach your customers through email, SMS, social media, and more.',
  },
];

const premiumCards = [
  {
    icon: faLock,
    title: 'Enhanced Security',
    text: 'Premium encryption and privacy controls to protect your data.',
  },
  {
    icon: faBullseye,
    title: 'Advanced Targeting',
    text: 'Pinpoint your audience with precision segmentation tools.',
  },
  {
    icon: faHeadset,
    title: 'Priority Support',
    text: 'Get expedited help from our expert support team whenever you need.',
  },
];

const faqItems = [
  {
    question: 'How easy is it to set up campaigns?',
    answer: 'Our user-friendly interface makes setting up campaigns straightforward and fast.',
  },
  {
    question: 'Can I customize templates?',
    answer: 'Yes, you can fully customize templates to fit your brand and campaign goals.',
  },
  {
    question: 'Do you support multi-channel marketing?',
    answer: 'Absolutely! Reach your audience via email, SMS, social media, and more from one dashboard.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, you can try all features for free for a limited time after signing up.',
  },
  {
    question: 'How secure is my data?',
    answer: 'We employ top-level security protocols to keep your data safe and private.',
  },
  {
    question: 'What kind of analytics can I access?',
    answer: 'You get detailed real-time reports on opens, clicks, conversions, and other key metrics.',
  },
];

const Features = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      {/* Main Heading Section */}
      <div style={styles.mainHeadingSection}>
        <p style={styles.mainHeadingSub}>Just Say The Word, Famepilot Can Do It All!</p>
        <h1 style={styles.mainHeading}>Powerful Features</h1>
      </div>

      {/* Feature Cards */}
      <div style={styles.cardsGrid}>
        {featureCards.map(({ icon, title, text }, i) => (
          <div key={i} style={styles.card}>
            <FontAwesomeIcon icon={icon} style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>{title}</h3>
            <p style={styles.cardText}>{text}</p>
          </div>
        ))}
      </div>

      {/* Premium Features Section */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2 style={{ 
          fontSize: '2rem',
          fontWeight: '700',
          borderBottom: '3px solid #1e40af',
          display: 'inline-block',
          margin: '0 auto',
        }}>
          Premium Features
        </h2>
      </div>

      <div style={styles.cardsGrid}>
        {premiumCards.map(({ icon, title, text }, i) => (
          <div key={i} style={styles.card}>
            <FontAwesomeIcon icon={icon} style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>{title}</h3>
            <p style={styles.cardText}>{text}</p>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div style={styles.faqSection}>
        <h2 style={styles.faqMainHeading}>We Have Great Answers</h2>
        <p style={styles.faqSubHeading}>Ask Us Anything</p>
        <div style={styles.faqGrid}>
          {faqItems.map(({ question, answer }, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div
                key={i}
                style={styles.faqItem}
                onClick={() => toggleFaq(i)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') toggleFaq(i);
                }}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
              >
                <div style={styles.faqQuestion}>
                  {question}
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{
                      ...styles.plusIcon,
                      ...(isOpen ? styles.plusIconOpen : {}),
                    }}
                  />
                </div>
                {isOpen && (
                  <p
                    style={styles.faqAnswer}
                    id={`faq-answer-${i}`}
                  >
                    {answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
