import React from 'react';
import { Link } from 'react-router-dom';
 import './Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-content-wrapper">
        
        <div className="footer-section footer-brand">
          <Link to="/" className="footer-logo">
            STACKLY
          </Link>
          <p className="footer-mission">
            Your source for the latest news across the globe, business, and lifestyle.
          </p>
          <p className="footer-social-title">Follow Us:</p>
          <div className="footer-social-links">
            {/* These assume you have Font Awesome icons or similar */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-section footer-links">
          <h3>Sections</h3>
          <ul>
            <li><Link to="/Latest">Latest</Link></li>
            <li><Link to="/Business">Business</Link></li>
            <li><Link to="/World">World</Link></li>
            <li><Link to="/Lifestyle">Lifestyle</Link></li>
            <li><Link to="/Education">Education</Link></li>
          </ul>
        </div>
        
        <div className="footer-section footer-links">
          <h3>Company</h3>
          <ul>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Service">Services</Link></li>
            <li><Link to="/Login">Login / Register</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for daily headlines.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" aria-label="Newsletter email input" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {currentYear} . All rights reserved.
        </p>
        <div className="footer-utility-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;