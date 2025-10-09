import React from "react";

const BankRollBears = () => {
  return (
    <div className="portfolio-detail">
      {/* Project Image - Full Width, No Margins */}
      <div className="project-image" style={{ marginBottom: '3rem' }}>
        <img 
          src="/img/portfolio/BankRoll.jpg" 
          alt="Bankroll Bear Society NFT Collection"
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
            The Bankroll Bear Society
          </h2>
          
          <p style={{ 
            color: '#ffffff', 
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '2.5rem'
          }}>
            The Bankroll Bear Society is an NFT collection of 5,000 unique bears with over 75 attributes each. Integrated into the Forest ecosystem, it offers real‑world utilities, staking, giveaways, and proprietary token usage. The project also aims to plant 5,000 trees to support environmental sustainability.
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
              <li style={{ marginBottom: '0.75rem' }}>Developed and launched the website for The Bankroll Bear Society, ensuring a seamless user experience and effective integration with the NFT collection.</li>
              <li style={{ marginBottom: '0.75rem' }}>Set up the NFT collection on Ebisus Bay, facilitating secure and efficient transactions for the community.</li>
              <li style={{ marginBottom: '0.75rem' }}>Contributed to the ecosystem with real‑world utilities, staking features, and token integration.</li>
              <li style={{ marginBottom: '0.75rem' }}>Enabled holders to access discounts, giveaways, and environmental initiatives participation.</li>
            </ul>
          </div>

          <div className="project-links" style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'rgb(120, 110, 204)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
              Links:
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="https://app.ebisusbay.com/drops/bankroll-bear-society" 
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
              {['HTML', 'CSS', 'JavaScript', 'Solidity', 'Ethereum', 'Web3', "Ebisus Bay", 'Firebase', 'Metaplex SDK'].map(tech => (
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

export default BankRollBears;
