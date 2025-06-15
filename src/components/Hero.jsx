import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        paddingTop: '120px',
        backgroundColor: '#EFF6FF',
        minHeight: '100vh',
        width: '100vw',
        overflowX: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px', // reduced padding for small screens
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          flexWrap: 'wrap', // allows wrapping on small screens
        }}
      >
        {/* Text - Left */}
        <div
          style={{
            flex: '1 1 300px', // grow and shrink, min width 300px for responsiveness
            minWidth: '280px', // avoid shrinking too small on mobile
          }}
        >
          <h1
            style={{
              fontSize: 'calc(1.5rem + 1vw)', // responsive font size
              fontWeight: 'bold',
              marginBottom: '20px',
              color: 'blue',
            }}
          >
            One Stop Platform to increase Customer Experience,
            <br /> Reviews & Ratings, Customer Engagement & Sales
          </h1>
          <p
            style={{
              marginBottom: '20px',
              color: '#374151',
              fontSize: '14px',
            }}
          >
            No Credit Card. No Contract. No Obligation. Sign Up for a Free 7 Days Trial.
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
              flexWrap: 'wrap',
            }}
          >
            <input
              type="email"
              placeholder="Your Email ID"
              style={{
                padding: '10px',
                border: '1px solid #D1D5DB',
                borderRadius: '6px',
                width: '250px',
                minWidth: '180px', // responsive min width
                flexGrow: 1,
              }}
            />
            <button
              style={{
                backgroundColor: '#2563EB',
                color: '#fff',
                padding: '10px 16px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Start Now
            </button>
          </div>
        </div>

        {/* Image - Right */}
        <div
          style={{
            flex: '1 1 300px',
            minWidth: '280px',
            maxWidth: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src={heroImg}
            alt="Hero"
            style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
