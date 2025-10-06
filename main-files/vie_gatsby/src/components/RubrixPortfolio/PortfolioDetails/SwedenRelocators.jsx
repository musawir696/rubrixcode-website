import React from "react";
import { Link } from "gatsby";

const SwedenRelocators = () => {
  return (
    <div className="portfolio-detail">
      <div className="container">
        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
          {/* Project Image */}
          <div className="project-image">
            <img 
              src="/img/portfolio/2.jpg" 
              alt="Sweden Relocators AB Portal"
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
              Sweden Relocators AB Portal
            </h2>
            
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Sweden Relocators AB is a leading relocation and mobility solutions provider, simplifying transitions for 
              individuals and organizations moving to Nordic countries. The project involved designing and developing a 
              responsive, user-friendly web and app-based portal to streamline relocation management for both employers 
              and employees.
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
                <li>Designed an intuitive, accessible interface in Figma with seamless navigation for relocation services.</li>
                <li>Developed a React-based portal with real-time tracking and dashboards for employee transfers and employer oversight.</li>
                <li>Integrated relocation tools like housing search, visa tracking, and budget management, with multi-language support using React-i18next.</li>
                <li>Optimized performance through rigorous testing and enhanced SEO for visibility in Nordic markets.</li>
                <li>Collaborated with stakeholders to deliver a polished, user-friendly platform aligned with Sweden Relocators' mission.</li>
              </ul>
            </div>

            <div className="project-links" style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                Links:
              </h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://swedenrepo-jjzq.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
                >
                  Website (Individuals & Families)
                </a>
                <a 
                  href="https://swedenrelocators.se/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
                >
                  Website (Investors & International)
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
                {['Figma', 'React', 'Tailwind CSS', 'Material UI', 'Node.js', 'Laravel', 'Vite JS'].map(tech => (
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

export default SwedenRelocators;
