import React from "react";
import { Link } from "gatsby";

const MiuraProtocol = () => {
  return (
    <div className="portfolio-detail">
      <div className="container">
        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
          {/* Project Image */}
          <div className="project-image">
            <img 
              src="/img/portfolio/freelancer/1.jpg" 
              alt="Miura Protocol DeFi Platform"
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
              Miura Protocol DeFi Platform
            </h2>
            
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Miura Protocol is a decentralized non-custodial liquidity market protocol where users can borrow assets using 
              NFTs as collateral. The project involved designing and developing a seamless and intuitive platform for users to 
              interact with the protocol.
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
                <li>Designed the entire user interface using Figma, ensuring an intuitive and visually appealing user experience.</li>
                <li>Developed the website using HTML, CSS, and JavaScript, and integrated Wallet Connect for secure and seamless user transactions.</li>
                <li>Integrated Solana blockchain and Solflare wallet to enable users to lend, borrow, and bridge assets against their assets.</li>
                <li>Developed a minting site for assets using Next.js, React, Firebase, and Metaplex SDK, allowing users to create and manage their digital assets efficiently.</li>
                <li>Incorporated GIFs and 3D card animations to enhance the site's visual appeal and user engagement.</li>
                <li>Used Blender to create 3D card animations and Canva for additional design elements, ensuring the platform's usability and efficiency through responsive design, rigorous testing, and optimization.</li>
              </ul>
            </div>

            <div className="project-links" style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                Links:
              </h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://miuraprotocol.io/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
                >
                  Website
                </a>
                <a 
                  href="https://www.figma.com/design/N40lxMaa9P2dChKR4vNTvd/Raafey-Bhai-Project?node-id=0-1&p=f" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
                >
                  Figma Design
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
                {['Figma', 'HTML', 'CSS', 'JavaScript', 'Solana', 'Solflare', 'Wallet Connect', 'Blender', 'Canva', 'Adobe Photoshop', 'EZGIF', 'Next.js', 'React', 'Firebase', 'Metaplex SDK'].map(tech => (
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

export default MiuraProtocol;
