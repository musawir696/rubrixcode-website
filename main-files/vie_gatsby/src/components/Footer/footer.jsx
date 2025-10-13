import React from "react";
import { Link } from 'gatsby'
import appData from "data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ 
      background: '#000000', 
      padding: '60px 0 40px 0',
      color: '#ffffff'
    }}>
      <div className="container">
        <div className="row" style={{ alignItems: 'flex-start' }}>
          {/* Logo and Tagline */}
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <div className="footer-logo" style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }} className="justify-content-center justify-content-md-start">
                <img 
                  src="/img/rubrixCodeLogo.jpg" 
                  alt="RubrixCode" 
                  style={{ 
                    height: '50px', 
                    width: 'auto',
                    marginRight: '15px'
                  }} 
                  loading="lazy"
                />
                <div>
                  <h4 style={{ 
                    color: '#ffffff', 
                    margin: '0', 
                    fontSize: '16px',
                    fontWeight: '400'
                  }}>
                    RubrixCode
                  </h4>
                </div>
              </div>
              <div style={{ 
                color: '#ffffff', 
                fontSize: '16px',
                lineHeight: '1.6',
                fontStyle: 'italic'
              }}>
            
              </div>
              </div>
                  </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-6 text-center text-md-start">
            <div style={{ marginBottom: '30px' }}>
              <h5 style={{ 
                color: '#ffffff', 
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px'
              }}>
                Company
              </h5>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }} className="text-center text-md-start">
                <li style={{ marginBottom: '12px' }}>
                  <Link to="/" style={{ 
                    color: '#ffffff', 
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'color 0.3s ease'
                  }}>
                    Home
                  </Link>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link to="/about" style={{ 
                    color: '#ffffff', 
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'color 0.3s ease'
                  }}>
                    About
                  </Link>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link to="/portfolio" style={{ 
                    color: '#ffffff', 
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'color 0.3s ease'
                  }}>
                    Portfolio
                  </Link>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link to="/contact" style={{ 
                    color: '#ffffff', 
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'color 0.3s ease'
                  }}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <div style={{ marginBottom: '30px' }}>
              <h5 style={{ 
                color: '#ffffff', 
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px'
              }}>
                Reach us out
              </h5>
              <div style={{ marginBottom: '15px' }}>
                <div style={{ 
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '5px',
                  fontSize: '14px'
                }}>
                  For General Queries
                </div>
                <div style={{ 
                  color: '#ffffff',
                  fontSize: '16px'
                }}>
                  hello@rubrixcode.com
                </div>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <div style={{ 
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '5px',
                  fontSize: '14px'
                }}>
                  For Job Related Queries
              </div>
                <div style={{ 
                  color: '#ffffff',
                  fontSize: '16px'
                }}>
                  careers@rubrixcode.com
                  </div>
                  </div>
              <div>
                <div style={{ 
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '5px',
                  fontSize: '14px'
                }}>
                  For Support
                  </div>
                <div style={{ 
                  color: '#ffffff',
                  fontSize: '16px'
                }}>
                  support@rubrixcode.com
                  </div>
                  </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="col-lg-2 col-md-6 text-center text-md-start">
            <div style={{ marginBottom: '30px' }}>
              <h5 style={{ 
                color: '#ffffff', 
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '5px'
              }}>
                Follow us on
              </h5>
              <div style={{ 
                color: '#ffffff',
                fontSize: '16px',
                marginBottom: '20px'
              }}>
                Social Media
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }} className="justify-content-center justify-content-md-start">
                <a href="#" style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid #ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
               
                <a href="#" style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid #ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}>
                  <i className="fab fa-instagram"></i>
                </a>
                
                
              </div>
            </div>
          </div>

          {/* Back To Home Button */}
          <div className="col-lg-2 col-md-6 text-center text-md-start">
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'flex-start'
            }} className="justify-content-center justify-content-lg-end">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <button 
                  onClick={scrollToTop}
                  style={{
                  background: 'transparent',
                  border: '1px solid #ffffff',
                  borderRadius: '20px',
                  padding: '25px 0px',
                  color: '#ffffff',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                  minWidth: '55px',
                  marginBottom: '10px' 
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#ffffff';
                    e.target.style.color = '#000000';
                    e.target.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#ffffff';
                    e.target.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.2)';
                  }}
                >
                  <i className="fas fa-home" style={{ fontSize: '16px' }}></i>
                </button>
                <div style={{ fontSize: '13px', textAlign: 'center', color: '#ffffff' }}>
                  <div>Back To</div>
                  <div>Home</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;