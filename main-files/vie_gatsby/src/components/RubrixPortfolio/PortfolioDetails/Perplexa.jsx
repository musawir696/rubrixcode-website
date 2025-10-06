import React from "react";

const Perplexa = () => {
  return (
    <div className="portfolio-detail">
      <div className="container">
        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
          {/* Project Image */}
          <div className="project-image">
            <img 
              src="/img/portfolio/curs/2.jpg" 
              alt="Perplexa Digital Agency Website"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
            />
          </div>

          {/* Project Details */}
          <div className="project-content">
            <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Perplexa Digital Agency Website
            </h2>
            
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Perplexa is a leading digital marketing agency that serves as a bridge between companies and the markets they 
              operate in, offering essential services that drive growth and efficiency. Specializing in business growth, 
              marketing advice, and finance consulting, Perplexa is dedicated to helping businesses achieve economies of 
              scale, enhance their competitive advantage, and navigate the complexities of the modern market landscape.
            </p>

            <div className="project-achievements" style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                Role/Results/Achievements:
              </h3>
              <ul style={{ 
                color: 'var(--text-secondary)',
                paddingLeft: '1.5rem',
                lineHeight: '1.6'
              }}>
                <li>Designed and developed a comprehensive React website for Perplexa, a premium template for digital agencies, startups, small businesses, and more.</li>
                <li>Created key pages including Home, About Us, Services, Portfolio, and Contact, ensuring a user-friendly and visually appealing experience.</li>
                <li>Integrated interactive elements and dynamic content to enhance user engagement, such as "Get a Free Quote" and newsletter subscription features.</li>
                <li>Developed detailed sections showcasing the company's services, benefits, and recent projects, highlighting their expertise in business growth, marketing advice, and finance consulting.</li>
                <li>Ensured the website is fully responsive, providing an optimal viewing experience across all devices and maintaining consistency with the Perplexa brand.</li>
              </ul>
            </div>

            <div className="project-links" style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                Links:
              </h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://perplexa.netlify.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
                >
                  Website
                </a>
              </div>
            </div>

            <div className="tech-stack">
              <h3 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                Technology Stack:
              </h3>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem' 
              }}>
                {['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Figma', 'Adobe XD', 'Adobe Photoshop', 'Illustrator', 'Firebase', 'Google APIs'].map(tech => (
                  <span
                    key={tech}
                    style={{
                      background: 'var(--bg-600)',
                      color: 'var(--accent-400)',
                      padding: '0.5rem 1rem',
                      borderRadius: '25px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      border: '1px solid var(--accent-400)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perplexa;
