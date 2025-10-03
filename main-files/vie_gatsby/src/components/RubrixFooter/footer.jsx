import React from "react";
import { Link } from "gatsby";

const RubrixFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', to: '/about' },
      { name: 'Portfolio', to: '/portfolio' },
      { name: 'Contact', to: '/contact' }
    ],
    Services: [
      { name: 'Web Development', to: '#services' },
      { name: 'Mobile Apps', to: '#services' },
      { name: 'UI/UX Design', to: '#services' },
      { name: 'Cloud Solutions', to: '#services' }
    ],
    Resources: [
      { name: 'Blog', to: '/blog' },
      { name: 'Case Studies', to: '/case-studies' },
      { name: 'Documentation', to: '/docs' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/rubrixcode', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/rubrixcode', icon: '🐦' },
    { name: 'GitHub', url: 'https://github.com/rubrixcode', icon: '🔗' },
    { name: 'Dribbble', url: 'https://dribbble.com/rubrixcode', icon: '🎨' }
  ];

  return (
    <footer style={{
      background: 'var(--bg-800)',
      borderTop: '1px solid var(--bg-700)',
      padding: '4rem 0 2rem 0',
      marginTop: '5rem'
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-4" style={{ marginBottom: '3rem' }}>
          {/* Company Info */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <img 
                src="/img/rubrixCodeLogo.jpg" 
                alt="RubrixCode" 
                style={{ 
                  height: '50px', 
                  width: 'auto'
                }} 
              />
            </div>
            <p style={{ 
              color: 'var(--text-secondary)', 
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              Crafting digital excellence through innovative software solutions. 
              We transform ideas into reality with cutting-edge technology.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    width: '40px',
                    height: '40px',
                    background: 'var(--bg-700)',
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--accent-400)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'var(--bg-700)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{ 
                color: 'var(--text-primary)', 
                marginBottom: '1rem',
                fontSize: '1.1rem'
              }}>
                {category}
              </h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0 
              }}>
                {links.map((link, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>
                    <Link
                      to={link.to}
                      style={{
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = 'var(--accent-400)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'var(--text-secondary)';
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--bg-700)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ 
            color: 'var(--text-muted)', 
            margin: 0,
            fontSize: '0.9rem'
          }}>
            © {currentYear} RubrixCode. All rights reserved.
          </p>
          
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link
              to="/privacy"
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--accent-400)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-muted)';
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--accent-400)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-muted)';
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RubrixFooter;
