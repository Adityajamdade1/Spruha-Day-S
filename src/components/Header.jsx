import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Brand Story', path: '/brand-story' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
   ];

  const transitionStyles = {
    standard: { transition: 'all 0.3s ease' },
    elastic: { transition: 'width 0.3s ease' }
  };

  return (
    <header style={{ backgroundColor: '#f8f9fa', padding: '10px 20px', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', textDecoration: 'none' }}>
          Spruha-Day'S
        </Link>

        {/* Desktop Menu */}
        <nav className="d-none d-md-flex gap-4">
          {navItems.map((item) => (
            <div
              key={item.name}
              style={{ position: 'relative', padding: '5px 0' }}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: isActive
                    ? '#FFD700'
                    : hoveredItem === item.name
                    ? '#FFD700'
                    : '#333',
                  display: 'flex',
                  alignItems: 'center',
                  ...transitionStyles.standard,
                  transform: hoveredItem === item.name ? 'translateY(-2px)' : 'none'
                })}
              >
                {item.icon && item.icon}
                {item.name}
              </NavLink>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: hoveredItem === item.name ? '100%' : '0%',
                  height: '2px',
                  backgroundColor: '#FFD700',
                  ...transitionStyles.elastic
                }}
              ></div>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="d-md-none">
          {mobileMenuOpen ? (
            <FaTimes
              size={24}
              style={{ cursor: 'pointer' }}
              onClick={() => setMobileMenuOpen(false)}
            />
          ) : (
            <FaBars
              size={24}
              style={{ cursor: 'pointer' }}
              onClick={() => setMobileMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="d-md-none bg-light p-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                padding: '10px 0',
                fontSize: '1.1rem',
                textDecoration: 'none',
                color: isActive ? '#FFD700' : '#333'
              })}
            >
              {item.icon && item.icon}
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
