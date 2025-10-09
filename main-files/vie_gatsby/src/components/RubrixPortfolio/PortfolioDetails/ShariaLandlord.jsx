import React from "react";

const ShariaLandlord = () => {
  return (
    <div className="portfolio-detail">
      {/* Project Image - Full Width, No Margins */}
      <div className="project-image" style={{ marginBottom: '3rem' }}>
        <img 
          src="/img/portfolio/Sharia.jpg" 
          alt="Sharia Landlord NFT Collection"
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
            Sharia Landlord NFT Collection
          </h2>
          
          <p style={{ 
            color: '#ffffff', 
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '2.5rem'
          }}>
            Sharia Landlord NFTs are a unique utility-based NFT collection that offers both high profits from capital gains and regular dividends from managed real estate and sharing house businesses. These NFT memberships ensure stable investment value despite market fluctuations.
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
              <li style={{ marginBottom: '0.75rem' }}>Developed and optimized the Sharia Landlord website with key sections: Project Overview, Investment Benefits, How to Buy, FAQs, and Contact Information.</li>
              <li style={{ marginBottom: '0.75rem' }}>Implemented a user-friendly buying interface, streamlining the purchasing process and ensuring clear communication of investment benefits.</li>
              <li style={{ marginBottom: '0.75rem' }}>Created a comprehensive FAQs section addressing key investor questions about dividends, price stability, and project management.</li>
              <li style={{ marginBottom: '0.75rem' }}>Integrated a detailed roadmap outlining the project's development phases and future goals for potential investors.</li>
              <li style={{ marginBottom: '0.75rem' }}>Established a contact form for inquiries, facilitating direct communication with the project team.</li>
              <li style={{ marginBottom: '0.75rem' }}>Developed a secure metadata management system for digital assets, ensuring high-quality investment representations.</li>
              <li style={{ marginBottom: '0.75rem' }}>Launched the site on OpenSea, utilizing the Polygon blockchain for secure and efficient transactions.</li>
            </ul>
          </div>

          <div className="project-links" style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'rgb(120, 110, 204)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
              Links:
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="https://landlord.analis.co.id/" 
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
                href="https://opensea.io/collection/sharia-landlord/overview" 
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
                OpenSea
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
              {['Polygon', 'Solidity', 'Python', 'OpenSea', 'JavaScript', 'IPFS', 'Metamask', 'HTML', 'CSS', 'Node.js'].map(tech => (
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

export default ShariaLandlord;
