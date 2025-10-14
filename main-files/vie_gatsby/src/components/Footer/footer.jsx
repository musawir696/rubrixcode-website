import * as React from "react";
import { Link } from "gatsby";

const Footer = ({ hideBGCOLOR = false }) => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`footer-responsive ${hideBGCOLOR ? "no-bg" : ""}`}
      style={{
        background: hideBGCOLOR ? "transparent" : "#000",
        padding: "60px 0 40px 0",
        color: "#fff",
      }}
    >
      {/* Inline styles for responsiveness */}
      <style>{`
        .footer-responsive h5 { font-weight: 600; }
        .footer-responsive a { text-decoration: none; color: #fff; }
        .footer-responsive a:hover { color: #999; }
        @media (max-width: 767px) {
          .footer-responsive { padding: 40px 0 30px 0; }
          .footer-responsive h5 { font-size: 16px; margin-bottom: 15px; }
          .footer-responsive ul li { margin-bottom: 8px; }
        }
      `}</style>

      <div className="container">
        <div className="row" style={{ alignItems: "flex-start" }}>
          {/* Company Logo */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 text-center text-md-start mb-4">
            <div className="footer-logo" style={{ marginBottom: "30px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  justifyContentMd: "flex-start",
                }}
              >
                <img
                  src="/img/rubrixCodeLogo.jpg"
                  alt="RubrixCode Logo"
                  style={{ height: "50px", width: "auto", marginRight: "15px" }}
                  loading="lazy"
                />
                <h4 style={{ color: "#fff", margin: 0, fontSize: "16px" }}>
                  RubrixCode
                </h4>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-2 col-sm-6 col-6 mb-4">
            <h5>Company</h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-4">
            <h5>Reach Us Out</h5>
            <div style={{ fontSize: "14px", lineHeight: "1.8" }}>
              <p><strong>General:</strong> hello@rubrixcode.com</p>
              <p><strong>Jobs:</strong> careers@rubrixcode.com</p>
              <p><strong>Support:</strong> support@rubrixcode.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="col-lg-2 col-md-3 col-sm-6 col-6 mb-4">
            <h5>Follow Us</h5>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a
                href="https://linkedin.com/company/rubrixcode"
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://instagram.com/rubrixcode"
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <div className="col-lg-2 col-md-12 col-sm-6 col-6 text-center text-lg-end mb-4">
            <button
              onClick={scrollToTop}
              style={{
                background: "transparent",
                border: "1px solid #fff",
                borderRadius: "20px",
                color: "#fff",
                padding: "20px 10px",
                cursor: "pointer",
                minWidth: "55px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#fff";
                e.target.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#fff";
              }}
            >
              <i className="fas fa-home" style={{ fontSize: "16px" }}></i>
            </button>
            <div style={{ fontSize: "13px", color: "#fff" }}>Back To Home</div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="row mt-4 pt-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="col-12 text-center">
            <p style={{ fontSize: "14px", margin: 0 }}>
              © {new Date().getFullYear()} RubrixCode. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const iconStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  border: "1px solid #fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  transition: "all 0.3s ease",
};

export default Footer;
