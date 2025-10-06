import React from "react";

const Si3SiHer = () => {
  return (
    <div className="portfolio-detail">
      <div className="container">
        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
          {/* Project Image */}
          <div className="project-image">
            <img 
              src="/img/portfolio/5.jpg" 
              alt="Si3 & Si Her Web3 Platform"
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
              Si3 & Si Her Web3 Platform
            </h2>
            
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Si3 & Si Her aims to create an accessible Web3 era, offering pathways for diverse voices in the new economy. 
              The project emphasizes financial inclusion for women and non-binary tech builders and creators, with live 
              virtual events, educational programming, and community-building initiatives.
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
                <li>Built a comprehensive Brand Kit, including color palettes, logos, icons, fonts, and themes, ensuring consistent digital branding.</li>
                <li>Designed multiple website layouts in Figma, adhering to UI/UX best practices, focusing on main landing pages, individual websites, and Talent Directory.</li>
                <li>Developed and deployed functional websites using HTML, CSS, JavaScript, and wallet connect features, hosted on IPNS with ENS domains for a decentralized web infrastructure.</li>
                <li>Created and launched multiple personal websites with a consistent design, deploying them on IPNS.</li>
              </ul>
            </div>

            <div className="project-links" style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                Figma Links:
              </h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <a 
                  href="https://www.figma.com/design/BTvif4EzLbUF9zucUkqzBw/Si3team?node-id=0-1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.8rem', padding: '0.6rem 1rem' }}
                >
                  Brand Kit & Theme
                </a>
                <a 
                  href="https://www.figma.com/design/j8vqmjUKksDcmTKqtsOr47/Si-Her-Landing-Page?node-id=0-1&p=f" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.8rem', padding: '0.6rem 1rem' }}
                >
                  Main Landing Page
                </a>
                <a 
                  href="https://www.figma.com/design/15tZQZ40S2pZjbPLer6vxy/Talent-Directory" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.8rem', padding: '0.6rem 1rem' }}
                >
                  Talent Directory
                </a>
                <a 
                  href="https://www.figma.com/design/aHjeOeCOWg8QjgGCFxYO2U/Siher-New-template?node-id=0-1&p=f" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.8rem', padding: '0.6rem 1rem' }}
                >
                  Personal Site Template
                </a>
              </div>
              
              <h3 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                Website Links:
              </h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://www.si3.space/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
                >
                  Main Website
                </a>
                <a 
                  href="https://karahoward.siher.eth.limo/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
                >
                  Personal Site 1
                </a>
                <a 
                  href="https://rainbowmosho.siher.eth.limo/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
                >
                  Personal Site 2
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
                {['Figma', 'HTML', 'CSS', 'JavaScript', 'Wallet Connect', 'Metamask', 'Rainbow Wallet', 'IPNS', 'IPFS', 'ENS', 'Photoshop', 'Illustrator', 'Aurpay', 'Pinata', 'Firebase', 'Metaplex SDK'].map(tech => (
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

export default Si3SiHer;
