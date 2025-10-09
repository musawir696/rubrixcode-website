import React from "react";

const Si3SiHer = () => {
  return (
    <div className="portfolio-detail">
      {/* Project Image - Full Width, No Margins */}
      <div className="project-image" style={{ marginBottom: '3rem' }}>
        <img 
          src="/img/portfolio/sis.jpg" 
          alt="Si3 & Si Her Web3 Platform"
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
            Si3 & Si Her Web3 Platform
          </h2>
          
          <p style={{ 
            color: '#ffffff', 
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '2.5rem'
          }}>
            Si3 & Si Her aims to create an accessible Web3 era, offering pathways for diverse voices in the new economy. 
            The project emphasizes financial inclusion for women and non-binary tech builders and creators, with live 
            virtual events, educational programming, and community-building initiatives.
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
              <li style={{ marginBottom: '0.75rem' }}>Built a comprehensive Brand Kit, including color palettes, logos, icons, fonts, and themes, ensuring consistent digital branding.</li>
              <li style={{ marginBottom: '0.75rem' }}>Designed multiple website layouts in Figma, adhering to UI/UX best practices, focusing on main landing pages, individual websites, and Talent Directory.</li>
              <li style={{ marginBottom: '0.75rem' }}>Developed and deployed functional websites using HTML, CSS, JavaScript, and wallet connect features, hosted on IPNS with ENS domains for a decentralized web infrastructure.</li>
              <li style={{ marginBottom: '0.75rem' }}>Created and launched multiple personal websites with a consistent design, deploying them on IPNS.</li>
            </ul>
          </div>

          <div className="project-links" style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'rgb(120, 110, 204)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
              Figma Links:
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <a 
                href="https://www.figma.com/design/BTvif4EzLbUF9zucUkqzBw/Si3team?node-id=0-1" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  fontSize: '0.8rem', 
                  padding: '0.6rem 1rem',
                  background: 'transparent',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  border: '2px solid rgb(120, 110, 204)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
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
                Brand Kit & Theme
              </a>
              <a 
                href="https://www.figma.com/design/j8vqmjUKksDcmTKqtsOr47/Si-Her-Landing-Page?node-id=0-1&p=f" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  fontSize: '0.8rem', 
                  padding: '0.6rem 1rem',
                  background: 'transparent',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  border: '2px solid rgb(120, 110, 204)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
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
                Main Landing Page
              </a>
              <a 
                href="https://www.figma.com/design/15tZQZ40S2pZjbPLer6vxy/Talent-Directory" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  fontSize: '0.8rem', 
                  padding: '0.6rem 1rem',
                  background: 'transparent',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  border: '2px solid rgb(120, 110, 204)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
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
                Talent Directory
              </a>
              <a 
                href="https://www.figma.com/design/aHjeOeCOWg8QjgGCFxYO2U/Siher-New-template?node-id=0-1&p=f" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  fontSize: '0.8rem', 
                  padding: '0.6rem 1rem',
                  background: 'transparent',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  border: '2px solid rgb(120, 110, 204)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
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
                Personal Site Template
              </a>
            </div>
            
            <h3 style={{ color: 'rgb(120, 110, 204)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
              Website Links:
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="https://www.si3.space/" 
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
                Main Website
              </a>
              <a 
                href="https://karahoward.siher.eth.limo/" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  fontSize: '0.9rem', 
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  border: '2px solid rgb(120, 110, 204)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
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
                Personal Site 1
              </a>
              <a 
                href="https://rainbowmosho.siher.eth.limo/" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  fontSize: '0.9rem', 
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  border: '2px solid rgb(120, 110, 204)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
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
                Personal Site 2
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
              {['Figma', 'HTML', 'CSS', 'JavaScript', 'Wallet Connect', 'Metamask', 'Rainbow Wallet', 'IPNS', 'IPFS', 'ENS', 'Photoshop', 'Illustrator', 'Aurpay', 'Pinata', 'Firebase', 'Metaplex SDK'].map(tech => (
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

export default Si3SiHer;
