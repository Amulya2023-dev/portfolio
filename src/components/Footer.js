import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} Amulya Jonnalagedda. All rights reserved.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/amulya-jonnalagedda-40baa975" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/Amulya2023-dev/demo" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" />
              </a>
            </div>
            <div className="contact-info-footer">
              <span>
                <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="Phone" />
                +1 (860) 726-3685
              </span>
              <a href="mailto:your.email@example.com">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/gmail.png" alt="Gmail" />
                jamulya2023@gmail.com
              </a>
            </div>
          </div>
          <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
