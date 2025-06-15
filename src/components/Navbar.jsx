import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    productsServices: false,
    products: false,
    services: false,
    industries: false,
    resources: false,
  });

  const toggleDropdown = (key, value) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const linkStyle = {
    color: '#334155',
    textDecoration: 'none',
    padding: '8px 12px',
    display: 'block',
  };

  const dropdownContainerStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '6px',
    minWidth: '200px',
    padding: '12px 0',
    zIndex: 1000,
  };

  const dropdownItemStyle = {
    padding: '12px 20px',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    color: '#334155',
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    borderBottom: 'none',
    textDecoration: 'none',
  };

  const nestedDropdownStyle = {
    position: 'absolute',
    top: 0,
    left: '100%', // makes it open to the right
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '6px',
    minWidth: '200px',
    padding: '12px 0',
    zIndex: 1001,
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.color = 'yellow';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = '#334155';
  };

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        backgroundColor: '#E0F2FE',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img
              src="https://images-platform.99static.com//GsGuNQCxKGYVdCJZ9dOVV8J2aFk=/201x1404:1388x2589/fit-in/500x500/99designs-contests-attachments/113/113556/attachment_113556060"
              alt="Logo"
              style={{ width: '32px', height: '32px' }}
            />
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#1D4ED8' }}>NamePilot</span>
          </Link>
        </div>

        {/* Navbar Links */}
        <ul
          style={{
            display: 'flex',
            gap: '24px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            alignItems: 'center',
          }}
        >
          {/* Products & Services */}
          <li
            style={{ position: 'relative', cursor: 'pointer' }}
            onMouseEnter={() => toggleDropdown('productsServices', true)}
            onMouseLeave={() => toggleDropdown('productsServices', false)}
          >
            <span style={{ color: '#334155', userSelect: 'none' }}>Products & Services ▼</span>

            {dropdownOpen.productsServices && (
              <div style={dropdownContainerStyle}>
                {/* Products */}
                <div
                  style={dropdownItemStyle}
                  onMouseEnter={() => toggleDropdown('products', true)}
                  onMouseLeave={() => toggleDropdown('products', false)}
                >
                  <span>Products ▶</span>
                  {dropdownOpen.products && (
                    <div style={nestedDropdownStyle}>
                      <Link
                        to="/review-management"
                        style={dropdownItemStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        Review Management
                      </Link>
                      <Link
                        to="/smart-campaigns"
                        style={dropdownItemStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        Smart Campaigns
                      </Link>
                      <Link
                        to="/mentions"
                        style={dropdownItemStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        Mentions
                      </Link>
                    </div>
                  )}
                </div>

                {/* Services */}
                <Link
                  to="/services"
                  style={dropdownItemStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Services
                </Link>
              </div>
            )}
          </li>

          {/* Features */}
          <li>
            <Link to="/features" style={linkStyle}>
              Features
            </Link>
          </li>

          

          {/* Industries */}
          <li
            style={{ position: 'relative', cursor: 'pointer' }}
            onMouseEnter={() => toggleDropdown('industries', true)}
            onMouseLeave={() => toggleDropdown('industries', false)}
          >
            <span style={{ color: '#334155', userSelect: 'none' }}>Industries ▼</span>

            {dropdownOpen.industries && (
              <div style={dropdownContainerStyle}>
                <Link
                  to="/industries/schools"
                  style={dropdownItemStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Schools
                </Link>
                <Link
                  to="/industries/colleges"
                  style={dropdownItemStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Colleges
                </Link>
                <Link
                  to="/industries/hotels"
                  style={dropdownItemStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Hotels
                </Link>
              </div>
            )}
          </li>

          {/* Contact Us */}
          <li>
            <Link to="/contact" style={linkStyle}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
