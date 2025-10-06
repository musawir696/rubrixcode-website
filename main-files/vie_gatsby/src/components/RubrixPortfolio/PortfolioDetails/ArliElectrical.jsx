import React from "react";
import { Link } from "gatsby";

const ArliElectrical = () => {
  return (
    <div className="portfolio-detail">
      <div className="container">
        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
          {/* Project Image */}
          <div className="project-image">
            <img 
              src="/img/portfolio/3.jpg" 
              alt="Arli Electrical Website"
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
              Arli Electrical Website
            </h2>
            
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Arli Electrical offers a wide range of electrical services for both domestic and commercial properties, from 
              installations and maintenance to rewiring and testing. Their focus is on providing high-quality, reliable service 
              with quick response times, even for emergency situations.
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
                <li>Designed and developed a clear, visually appealing website to present Arli Electrical's wide range of services, including installations, maintenance, and emergency responses.</li>
                <li>Implemented intuitive navigation for customers to easily find service information, request quotes, and make contact for urgent needs.</li>
                <li>Ensured mobile responsiveness, optimizing the website for a smooth experience across devices.</li>
                <li>Enhanced customer engagement by offering multiple contact options, including phone and online forms, facilitating quick communication.</li>
              </ul>
            </div>

            <div className="project-links" style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                Links:
              </h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://arli.uk/electrical/" 
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
                {['HTML', 'CSS', 'JavaScript', 'GoDaddy Hosting'].map(tech => (
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

export default ArliElectrical;
