import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Get In Touch With Our Team</h1>
        <p>We value feedback, tips, and inquiries. To ensure a timely response, please select the most appropriate department below.</p>
      </header>

      <div className="contact-grid">
        {/* News & Editorial Inquiries */}
        <div className="contact-card editorial-inquiry">
          <i className="fas fa-newspaper contact-icon"></i>
          <h2>News Tips & Pitches</h2>
          <p>Have a breaking story, an investigative lead, or an article idea? Send it directly to our editorial desk.</p>
          <p className="contact-detail">
            <strong>Email:</strong> tips@yournewsdomain.com
          </p>
          <a href="/submit-tip" className="contact-button primary-button">Submit a Secure Tip</a>
        </div>

        {/* Technical & Reader Feedback */}
        <div className="contact-card technical-feedback">
          <i className="fas fa-bug contact-icon"></i>
          <h2>Website & Technical Support</h2>
          <p>Report technical issues, broken links, or problems with your subscription or digital access.</p>
          <p className="contact-detail">
            <strong>Email:</strong> support@yournewsdomain.com
          </p>
          <p className="contact-detail">
            <strong>Phone:</strong> (555) 123-4567
          </p>
        </div>

        {/* Business & Advertising */}
        <div className="contact-card business-ads">
          <i className="fas fa-briefcase contact-icon"></i>
          <h2>Advertising & Business Inquiries</h2>
          <p>For questions about advertising rates, content licensing, media partnerships, or sales.</p>
          <p className="contact-detail">
            <strong>Email:</strong> business@yournewsdomain.com
          </p>
          <a href="/media-kit" className="contact-button secondary-button">View Media Kit</a>
        </div>

        {/* Corrections & Accountability */}
        <div className="contact-card corrections">
          <i className="fas fa-edit contact-icon"></i>
          <h2>Corrections & Ethics</h2>
          <p>Found an error in one of our reports? Help us maintain accuracy by reporting a correction.</p>
          <p className="contact-detail">
            <strong>Correction Form:</strong> <a href="/correction-form">/report-correction</a>
          </p>
          <p className="contact-detail">
            **Ethics Editor:** editor@yournewsdomain.com
          </p>
        </div>
      </div>

      <section className="map-location">
        <h2>Our Main Office</h2>
        <address>
          123 Main Street, Suite 500<br />
          News City, State 12345
        </address>
        {/* Replace with an actual embedded map component or iframe */}
        
      </section>
    </div>
  );
};

export default Contact;