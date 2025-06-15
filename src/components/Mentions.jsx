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
  buttonInline: {
    backgroundColor: '#1e40af',
    color: 'white',
    padding: '6px 16px',
    borderRadius: '9999px',
    fontWeight: '500',
    cursor: 'pointer',
    border: 'none',
    boxShadow: '0 4px 12px rgba(30, 64, 175, 0.7)',
    fontSize: '0.875rem',
    marginLeft: '12px',
  },
  listItem: {
    marginBottom: '16px',
    fontSize: '1.125rem',
    lineHeight: '1.6',
    color: '#222',
  },
  listContainer: {
    paddingLeft: '20px',
  },
};

const HeadingSection = () => (
  <div style={styles.headingSection}>
    <h1 style={styles.headingTitle}>Mentions</h1>
    <p style={styles.headingText}>
      Track and manage all your business mentions across platforms to stay ahead and maintain your reputation.
    </p>
    <Link to="/signup">
      <button
        style={styles.tryFreeButton}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = '#e0e7ff')}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = 'white')}
      >
        Try for Free
      </button>
    </Link>
  </div>
);

const Section = ({ image, title, children, reverse }) => (
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
      {children}
    </div>
  </section>
);

const QuickContact = () => (
  <div style={styles.quickContact}>
    <h3 style={styles.quickContactTitle}>Need Help Tracking Mentions?</h3>
    <p style={styles.quickContactText}>
      Our experts can help you set up and monitor your brand mentions seamlessly.
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

const Mentions = () => {
  return (
    <div style={styles.container}>
      <HeadingSection />

      <Section
        image="https://famepilot.com/wp-content/uploads/2020/10/Mention-11-1.png"
        title="Brand Monitoring - Monitor your brand across 100M+ Websites, News Sources, Youtube & Social Media."
      >
        <p style={styles.text}>
          Know what people saying about your brand & grow your online presence by taking real-time action with a brand monitoring feature. Simply enter a keyword & Famepilot will fetch online mentions daily.
        </p>
      </Section>

      <Section
        image="https://famepilot.com/wp-content/uploads/2020/10/Mention-Tags.png"
        title="TAGS - Label specific mentions to sort it like a pro."
        reverse
      >
        <p style={styles.text}>
          You might add a tag to organize your top influencers, brand advocates or potential customer service matters into custom feeds. The selection is yours, and the possibilities infinite.
        </p>
            <Link to="/signup">
            <button
                style={{
                ...styles.buttonInline,
                backgroundColor: '#b58900',
                color: 'white',
                padding: '16px 48px',      // bigger padding
                fontSize: '1rem',       // larger font size
                fontWeight: '70',         // bolder text
                borderRadius: '99px',    // keep pill shape if you want
                cursor: 'pointer',
                border: 'none',
                transition: 'background-color 0.3s ease', // smooth transition
                }}
                onMouseOver={e => {
                e.currentTarget.style.backgroundColor = 'blue';
                e.currentTarget.style.color = 'white';
                }}
                onMouseOut={e => {
                e.currentTarget.style.backgroundColor = '#b58900';
                e.currentTarget.style.color = 'white';
                }}
            >
                Try for Free
            </button>
            </Link>
      </Section>

      <Section
        image="https://famepilot.com/wp-content/uploads/2020/10/Mention-33-1.png"
        title="What you can discover with Brand Monitoring?"
      >
        <ul style={styles.listContainer}>
          <li style={styles.listItem}>
            <strong>Influencers:</strong> The most influential people talking about your brand.
          </li>
          <li style={styles.listItem}>
            <strong>Websites:</strong> The most popular websites where the conversation occurs.
          </li>
          <li style={styles.listItem}>
            <strong>Your brand's social reach:</strong> Trends and changes in your Brand's Social reach over time.
            
          </li>
          <Link to="/signup">
            <button
                style={{
                ...styles.buttonInline,
                backgroundColor: '#b58900',
                color: 'white',
                padding: '16px 48px',      // bigger padding
                fontSize: '1rem',       // larger font size
                fontWeight: '70',         // bolder text
                borderRadius: '99px',    // keep pill shape if you want
                cursor: 'pointer',
                border: 'none',
                transition: 'background-color 0.3s ease', // smooth transition
                }}
                onMouseOver={e => {
                e.currentTarget.style.backgroundColor = 'blue';
                e.currentTarget.style.color = 'white';
                }}
                onMouseOut={e => {
                e.currentTarget.style.backgroundColor = '#b58900';
                e.currentTarget.style.color = 'white';
                }}
            >
                Mention your brand!
            </button>
            </Link>


        </ul>
      </Section>

      <Section
        image="https://famepilot.com/wp-content/uploads/2020/10/Mention-Service-Ticketing-1.png"
        title="SERVICE TICKETING - Turn Customer Conversation into Service Tickets."
        reverse
      >
        <p style={styles.text}>
          Solve issues before they heighten. Address customer issues proactively with Famepilot’s Brand Monitoring Tool and Assign each ticket to a particular employee and receive automatic alerts on the updates of that ticket.
        </p>
      </Section>

      <QuickContact />
    </div>
  );
};

export default Mentions;
