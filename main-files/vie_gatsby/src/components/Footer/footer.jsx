import React from "react";
import { Link } from 'gatsby'

const Footer = ({ hideBGCOLOR }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style jsx>{`
        .footer-responsive {
          background: #000000;
          padding: 60px 0 40px 0;
          color: #ffffff;
        }
        
        /* Mobile First Approach */
        @media (max-width: 575.98px) {
          .footer-responsive {
            padding: 40px 0 30px 0;
          }
          .footer-responsive .container {
            padding-left: 15px;
            padding-right: 15px;
          }
          .footer-responsive .footer-logo {
            margin-bottom: 25px !important;
          }
          .footer-responsive .footer-section {
            margin-bottom: 25px !important;
          }
          .footer-responsive h5 {
            font-size: 16px !important;
            margin-bottom: 15px !important;
          }
          .footer-responsive ul li {
            margin-bottom: 8px !important;
          }
          .footer-responsive ul li a {
            font-size: 14px !important;
          }
        }
        
        /* Small devices (landscape phones, 576px and up) */
        @media (min-width: 576px) and (max-width: 767.98px) {
          .footer-responsive {
            padding: 50px 0 35px 0;
          }
          
          /* Better spacing for 576-768px range */
          .footer-responsive .footer-section {
            margin-bottom: 35px !important;
          }
          
          .footer-responsive h5 {
            font-size: 17px !important;
            margin-bottom: 18px !important;
          }
          
          .footer-responsive ul li a,
          .footer-responsive div[style*="fontSize"] {
            font-size: 15px !important;
          }
        }
        
        /* Specific fix for 582-780px range */
        @media (min-width: 582px) and (max-width: 780px) {
          .footer-responsive .col-sm-6 {
            flex: 0 0 50%;
            max-width: 50%;
          }
          
          .footer-responsive .row {
            margin-left: -10px;
            margin-right: -10px;
          }
          
          .footer-responsive [class*="col-"] {
            padding-left: 10px;
            padding-right: 10px;
          }
          
          /* Better alignment */
          .footer-responsive .text-center {
            text-align: left !important;
          }
          
          .footer-responsive .justify-content-center {
            justify-content: flex-start !important;
          }
          
          /* Adjust logo section */
          .footer-responsive .footer-logo img {
            height: 45px !important;
          }
          
          /* Social media icons spacing */
          .footer-responsive [class*="col-"] > div > div[style*="gap"] {
            gap: 8px !important;
          }
          
          /* Back button positioning */
          .footer-responsive .col-md-12.col-sm-6 {
            margin-top: 10px;
          }
        }
        
        /* Medium devices (tablets, 768px and up) */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .footer-responsive {
            padding: 55px 0 35px 0;
          }
        }
        
        /* Large devices (desktops, 992px and up) */
        @media (min-width: 992px) {
          .footer-responsive {
            padding: 60px 0 40px 0;
          }
        }
        
        /* Ensure proper spacing on very small screens */
        @media (max-width: 400px) {
          .footer-responsive .col-6 {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 20px;
          }
        }
      `}</style>
      
      <footer className="footer-responsive">
      <div className="container">
        <div className="row" style={{ alignItems: 'flex-start' }}>
          {/* Logo and Tagline */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 text-center text-md-start">
            <div className="footer-logo footer-section" style={{ marginBottom: '30px' }}>
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
          <div className="col-lg-2 col-md-2 col-sm-6 col-6 text-center text-md-start">
            <div className="footer-section" style={{ marginBottom: '30px' }}>
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
          <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center text-md-start">
            <div className="footer-section" style={{ marginBottom: '30px' }}>
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
          <div className="col-lg-2 col-md-3 col-sm-6 col-6 text-center text-md-start">
            <div className="footer-section" style={{ marginBottom: '30px' }}>
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
          <div className="col-lg-2 col-md-12 col-sm-6 col-6 text-center text-lg-end">
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

        {/* Copyright Section */}
        <div className="row" style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div className="col-12 text-center">
            <p style={{ margin: '0', color: '#ffffff', fontSize: '14px' }}>
              © {new Date().getFullYear()} RubrixCode. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;