import React from "react";

const CrossroadsAdventure = () => {
  return (
    <div className="portfolio-detail">
      {/* Project Image - Full Width, No Margins */}
      <div className="project-image" style={{ marginBottom: '3rem' }}>
        <img 
          src="/img/portfolio/crossroad.jpg" 
          alt="Crossroads Adventure Website"
          style={{
            width: '100%',
            height: '500px',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>

      <div className="container">
        {/* Project Details - Below Image */}
        <div className="project-content">
          <h2 style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '2.5rem' }}>
            Crossroads Adventure Website
          </h2>
          
          <p style={{ 
            color: '#ffffff', 
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '2.5rem'
          }}>
            Crossroads Adventure is a premier luxury expedition specialist in Pakistan, dedicated to curating bespoke 
            journeys that connect discerning explorers to the country's most breathtaking landscapes, rich heritage, and 
            vibrant cultures.
          </p>

          <div className="project-achievements" style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'rgb(120, 110, 204)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
              Role/Results/Achievements:
            </h3>
            <ul style={{ 
              color: '#ffffff',
              paddingLeft: '1.5rem',
              lineHeight: '1.8',
              fontSize: '1.05rem'
            }}>
              <li style={{ marginBottom: '0.75rem' }}>Created a responsive website using HTML, CSS, and JavaScript, hosted on GoDaddy for seamless mobile and desktop access.</li>
              <li style={{ marginBottom: '0.75rem' }}>Built a robust backend with Node.js and Express.js for efficient server-side operations.</li>
              <li style={{ marginBottom: '0.75rem' }}>Integrated MongoDB for dynamic content storage and retrieval of trip details, user information, and blogs.</li>
              <li style={{ marginBottom: '0.75rem' }}>Developed an admin panel for managing trips, user content, and blogs, providing full control over the site.</li>
              <li style={{ marginBottom: '0.75rem' }}>Designed a modern, clean aesthetic with intuitive navigation and accessibility.</li>
              <li style={{ marginBottom: '0.75rem' }}>Ensured a mobile-friendly design for better usability across devices.</li>
              <li style={{ marginBottom: '0.75rem' }}>Improved SEO to boost search engine rankings and user engagement.</li>
              <li style={{ marginBottom: '0.75rem' }}>Worked closely with stakeholders to refine the platform, meeting the needs of the adventure-seeking community.</li>
            </ul>
          </div>

          <div className="project-links" style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'rgb(120, 110, 204)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
              Links:
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="https://crossroadsadventure.earth/" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  fontSize: '0.9rem', 
                  padding: '0.75rem 1.5rem',
                  background: 'rgb(120, 110, 204)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgb(140, 130, 214)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgb(120, 110, 204)'}
              >
                Website
              </a>
            </div>
          </div>

          <div className="tech-stack" style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'rgb(120, 110, 204)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
              Technology Stack:
            </h3>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.5rem' 
            }}>
              {['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'GoDaddy Hosting'].map(tech => (
                <span
                  key={tech}
                  style={{
                    background: 'var(--bg-600)',
                    color: 'rgb(120, 110, 204)',
                    padding: '0.5rem 1rem',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    border: '1px solid rgb(120, 110, 204)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Back Button - Below All Content */}
          <div>
            <button 
              onClick={() => window.history.back()}
              type="button"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: '#ffffff',
                border: '2px solid rgb(120, 110, 204)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgb(120, 110, 204)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossroadsAdventure;
