import React from "react";

const DecimalsRebuilt = () => {
  return (
    <div className="portfolio-detail">
      <div className="container">
        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
          {/* Project Image */}
          <div className="project-image">
            <img 
              src="/img/portfolio/Decimal.jpg" 
              alt="Decimals Rebuilt NFT Platform"
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
              Decimals Rebuilt NFT Platform
            </h2>
            
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Developed a sophisticated NFT platform with a seamless user experience, combining advanced blockchain 
              features with an intuitive web interface. The platform allows users to mint, purchase, and manage NFTs through 
              a sleek, dynamic website with key functionalities including dynamic pricing, exclusive presales, and easy access to 
              token ownership information.
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
                <li>Designed and implemented a user-friendly interface to guide users through the NFT minting process, offering intuitive navigation for different NFT categories.</li>
                <li>Developed a dynamic pricing system on the website, allowing users to easily view and purchase NFTs at varying prices based on category and exclusivity.</li>
                <li>Integrated whitelist presale functionality, enabling early access for users and ensuring an exclusive experience for early buyers.</li>
                <li>Provided a seamless, transparent view of ownership details for each token on the website, allowing users to track their investments and explore token-specific information.</li>
                <li>Developed robust security features, ensuring safe and efficient transactions through a streamlined web-based minting process.</li>
                <li>Enhanced user engagement by incorporating royalty management, where users could view and participate in royalty distributions directly from the platform.</li>
                <li>Focused on ensuring responsive design and smooth performance, optimizing the website for an exceptional user experience across all devices.</li>
              </ul>
            </div>

            <div className="project-links" style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                Links:
              </h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://decimalsrebuilt.com/" 
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
                {['Solidity', 'ERC-721A', 'OpenZeppelin', 'Remix', 'Hardhat', 'Truffle', 'JavaScript', 'Polygon', 'Polygonscan', 'Etherscan', 'Ethers.js', 'Infura', 'Alchemy', 'Web3', 'React.js'].map(tech => (
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

export default DecimalsRebuilt;
