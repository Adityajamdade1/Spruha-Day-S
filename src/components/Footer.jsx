import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Brand Info */}
        <div style={styles.section}>
          <h3 style={styles.logo}>Spruha-Day'S</h3>
          <p style={styles.text}>
            Safe, hygienic, and eco-friendly sanitary solutions for a healthier tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Quick Links</h4>
          <div style={styles.linkGrid}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/products" style={styles.link}>Products</Link>
            <Link to="/brand-story" style={styles.link}>Brand Story</Link>
            <Link to="/faq" style={styles.link}>FAQ</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Contact Us</h4>
          <div style={styles.contactItem}>📞 +91 0000000000</div>
          <div style={styles.contactItem}>📧 support@Spruha-Days.com</div>
          <div style={styles.contactItem}>📍 India</div>
        </div>

        {/* Social Media */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Follow Us</h4>
          <div style={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottom}>
        <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Spruha-Day'S. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #ff6f91, #ff9671)',
    color: '#fff',
    padding: '40px 20px 20px',
    fontFamily: 'Arial, sans-serif'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '30px',
    maxWidth: '1100px',
    margin: '0 auto'
  },
  section: {
    flex: '1 1 220px',
    minWidth: '200px'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  text: {
    fontSize: '0.95rem',
    lineHeight: '1.5'
  },
  heading: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    borderBottom: '2px solid rgba(255,255,255,0.4)',
    paddingBottom: '5px'
  },
  linkGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '8px'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease',
  },
  contactItem: {
    marginBottom: '10px',
    fontSize: '0.95rem'
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
    marginTop: '10px'
  },
  socialIcon: {
    color: '#fff',
    fontSize: '1.3rem',
    transition: 'transform 0.3s ease, color 0.3s ease',
    textDecoration: 'none'
  },
  bottom: {
    textAlign: 'center',
    borderTop: '1px solid rgba(255,255,255,0.3)',
    marginTop: '30px',
    paddingTop: '20px',
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.8)'
  }
};
