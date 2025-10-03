import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const RubrixNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Contact', to: '/contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src="/img/rubrixCodeLogo.jpg" 
              alt="RubrixCode" 
              style={{ 
                height: '40px', 
                width: 'auto'
              }} 
            />
            <h2 style={{ 
              margin: 0, 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: 'var(--text-primary)',
              letterSpacing: '0.5px'
            }}>
              RubrixCode
            </h2>
          </Link>
          
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.to}>{link.name}</Link>
              </li>
            ))}
          </ul>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default RubrixNavbar;
