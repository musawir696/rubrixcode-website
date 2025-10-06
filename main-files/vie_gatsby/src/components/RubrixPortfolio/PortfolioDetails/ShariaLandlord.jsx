import React from "react";

const ShariaLandlord = () => {
  return (
    <div className="portfolio-detail">
      <div className="container">
        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
          {/* Project Image */}
          <div className="project-image">
            <img 
              src="/img/portfolio/full/2.jpg" 
              alt="Sharia Landlord NFT Collection"
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
              Sharia Landlord NFT Collection
            </h2>
            
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Sharia Landlord NFTs are a unique utility-based NFT collection that offers both high profits from capital gains and regular dividends from managed real estate and sharing house businesses. These NFT memberships ensure stable investment value despite market fluctuations.
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
                <li>Developed and optimized the Sharia Landlord website with key sections: Project Overview, Investment Benefits, How to Buy, FAQs, and Contact Information.</li>
                <li>Implemented a user-friendly buying interface, streamlining the purchasing process and ensuring clear communication of investment benefits.</li>
                <li>Created a comprehensive FAQs section addressing key investor questions about dividends, price stability, and project management.</li>
                <li>Integrated a detailed roadmap outlining the project's development phases and future goals for potential investors.</li>
                <li>Established a contact form for inquiries, facilitating direct communication with the project team.</li>
                <li>Developed a secure metadata management system for digital assets, ensuring high-quality investment representations.</li>
                <li>Launched the site on OpenSea, utilizing the Polygon blockchain for secure and efficient transactions.</li>
              </ul>
            </div>

            <div className="project-links" style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                Links:
              </h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://landlord.analis.co.id/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
                >
                  Website
                </a>
                <a 
                  href="https://opensea.io/collection/sharia-landlord/overview" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
                >
                  OpenSea
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
                {['Polygon', 'Solidity', 'Python', 'OpenSea', 'JavaScript', 'IPFS', 'Metamask', 'HTML', 'CSS', 'Node.js'].map(tech => (
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

export default ShariaLandlord;
