import React from "react";

const AegeanTaxi = () => {
  return (
    <div className="portfolio-detail">
      <div className="container">
        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
          {/* Project Image */}
          <div className="project-image">
            <img 
              src="/img/portfolio/7.jpg" 
              alt="Aegean Taxi Transportation Website"
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
              Aegean Taxi Transportation Website
            </h2>
            
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Aegean Taxi is a premium transportation service offering seamless travel solutions across key locations in 
              Greece. The project involved designing and developing a responsive, user-friendly website for both mobile and 
              desktop platforms, ensuring a smooth and visually engaging experience for travelers.
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
                <li>Designed the entire user interface using Figma, emphasizing modern aesthetics, accessibility, and user-centric navigation.</li>
                <li>Developed the website using Next.js and Tailwind CSS, ensuring fast load times, responsiveness, and scalability across devices.</li>
                <li>Created reusable UI components with Tailwind CSS, ensuring design consistency and efficient future scalability.</li>
                <li>Developed a mobile-first design strategy to prioritize usability for travelers on the go.</li>
                <li>Ensured cross-browser compatibility and optimized performance through rigorous testing and debugging.</li>
                <li>Collaborated closely with stakeholders to incorporate feedback, delivering a polished and user-friendly platform.</li>
                <li>Enhanced SEO to improve search engine rankings and visibility, driving higher user engagement.</li>
              </ul>
            </div>

            <div className="project-links" style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                Links:
              </h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://aegeantaxi.com/" 
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
                {['Figma', 'HTML', 'Vanilla CSS', 'JavaScript', 'Tailwind CSS', 'Next.js', 'React'].map(tech => (
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

export default AegeanTaxi;
