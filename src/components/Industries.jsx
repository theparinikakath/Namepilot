import React from 'react';
import { FaSchool, FaUniversity, FaHotel } from 'react-icons/fa';

const Industries = () => {
  return (
    <section id="industries" style={{ padding: '100px 0', backgroundColor: '#EFF6FF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: 'blue',
          }}
        >
          INDUSTRIES
        </h2>
        <p style={{ color: '#334155', marginBottom: '24px', fontSize: '16px' }}>
          Industry-specific solutions based on the niche of business.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* School */}
          <div style={iconCardStyle} className="icon-card">
            <FaSchool size={60} className="icon" />
            <p style={iconTextStyle}>Schools</p>
          </div>

          {/* College */}
          <div style={iconCardStyle} className="icon-card">
            <FaUniversity size={60} className="icon" />
            <p style={iconTextStyle}>Colleges</p>
          </div>

          {/* Hotel */}
          <div style={iconCardStyle} className="icon-card">
            <FaHotel size={60} className="icon" />
            <p style={iconTextStyle}>Hotels</p>
          </div>
        </div>

        {/* Centered Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#1D4ED8',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            See All Industries
          </button>
        </div>
      </div>
    </section>
  );
};

// Reusable styles
const iconCardStyle = {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  textAlign: 'center',
  color: '#1D4ED8',
  width: '180px',
  transition: 'transform 0.3s ease',
};

const iconTextStyle = {
  marginTop: '12px',
  fontWeight: 'bold',
  fontSize: '16px',
};

export default Industries;
