import React from "react";
import { Link } from 'gatsby';
import "./footer.css";

const Footer = ({ hideBGCOLOR }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      
      <footer className="footer-responsive">
      <div className="container">
        <div className="row">
          {/* Logo and Tagline */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 text-center text-md-start">
            <div className="footer-logo footer-section">
              <div className="footer-logo-wrapper justify-content-center justify-content-md-start">
                <img 
                  src="/img/rubrixCodeLogo.jpg" 
                  alt="RubrixCode" 
                  loading="lazy"
                />
                <div>
                  <h4 className="footer-logo-title">
                    RubrixCode
                  </h4>
                </div>
              </div>
              <div className="footer-tagline">
            
              </div>
              </div>
                  </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-2 col-sm-6 col-6 text-center text-md-start">
            <div className="footer-section">
              <div className="footer-section-title">
                Company
              </div>
              <ul className="footer-links text-center text-md-start">
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center text-md-start">
            <div className="footer-section">
              <div className="footer-section-title">
                Reach us out
              </div>
              <div className="footer-contact-item text-center text-md-start">
                <div className="footer-contact-label">
                  For General Queries
                </div>
                <div className="footer-contact-value">
                  hello@rubrixcode.com
                </div>
              </div>
              <div className="footer-contact-item text-center text-md-start">
                <div className="footer-contact-label">
                  For Job Related Queries
              </div>
                <div className="footer-contact-value">
                  careers@rubrixcode.com
                  </div>
                  </div>
              <div className="footer-contact-item text-center text-md-start">
                <div className="footer-contact-label">
                  For Support
                  </div>
                <div className="footer-contact-value">
                  support@rubrixcode.com
                  </div>
                  </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="col-lg-2 col-md-3 col-sm-6 col-6 text-center text-md-start">
            <div className="footer-section">
              <div className="footer-section-title">
                Follow us on
              </div>
              <div className="footer-section-subtitle text-center text-md-start">
                Social Media
              </div>
              <div className="footer-social-icons justify-content-center justify-content-md-start">
                <a href="#" className="footer-social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
               
                <a href="#" className="footer-social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                
                
              </div>
            </div>
          </div>

          {/* Back To Home Button */}
          <div className="col-lg-2 col-md-12 col-sm-6 col-6 text-center text-lg-end">
            <div className="footer-back-to-home-wrapper justify-content-center justify-content-lg-end">
              <div className="footer-back-to-home-content">
                <button 
                  onClick={scrollToTop}
                  className="footer-back-button"
                >
                  <i className="fas fa-home"></i>
                </button>
                <div className="footer-back-text">
                  <div>Back To</div>
                  <div>Home</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </footer>
    </>
  );
};

export default Footer;