import React from "react";

const MiuraProtocol = () => {
  return (
    <div className="portfolio-detail">
      {/* Project Image - Full Width, No Margins */}
      <div className="project-image" style={{ marginBottom: '3rem' }}>
        <img 
          src="/img/portfolio/Miura.jpg" 
          alt="Miura Protocol DeFi Platform"
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
            Miura Protocol DeFi Platform
          </h2>
          
          <p style={{ 
            color: '#ffffff', 
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '2.5rem'
          }}>
            Miura Protocol is a decentralized non-custodial liquidity market protocol where users can borrow assets using 
            NFTs as collateral. The project involved designing and developing a seamless and intuitive platform for users to 
            interact with the protocol.
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
              <li style={{ marginBottom: '0.75rem' }}>Designed the entire user interface using Figma, ensuring an intuitive and visually appealing user experience.</li>
              <li style={{ marginBottom: '0.75rem' }}>Developed the website using HTML, CSS, and JavaScript, and integrated Wallet Connect for secure and seamless user transactions.</li>
              <li style={{ marginBottom: '0.75rem' }}>Integrated Solana blockchain and Solflare wallet to enable users to lend, borrow, and bridge assets against their assets.</li>
              <li style={{ marginBottom: '0.75rem' }}>Developed a minting site for assets using Next.js, React, Firebase, and Metaplex SDK, allowing users to create and manage their digital assets efficiently.</li>
              <li style={{ marginBottom: '0.75rem' }}>Incorporated GIFs and 3D card animations to enhance the site's visual appeal and user engagement.</li>
              <li style={{ marginBottom: '0.75rem' }}>Used Blender to create 3D card animations and Canva for additional design elements, ensuring the platform's usability and efficiency through responsive design, rigorous testing, and optimization.</li>
            </ul>
          </div>

          <div className="project-links" style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'rgb(120, 110, 204)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
              Links:
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="https://miuraprotocol.io/" 
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
              <a 
                href="https://www.figma.com/design/N40lxMaa9P2dChKR4vNTvd/Raafey-Bhai-Project?node-id=0-1&p=f" 
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
                Figma Design
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
              {['Figma', 'HTML', 'CSS', 'JavaScript', 'Solana', 'Solflare', 'Wallet Connect', 'Blender', 'Canva', 'Adobe Photoshop', 'EZGIF', 'Next.js', 'React', 'Firebase', 'Metaplex SDK'].map(tech => (
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

export default HoyaKerry;
