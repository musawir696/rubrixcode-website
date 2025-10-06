import React from "react";
import { Link } from "gatsby";

const HoyaKerry = () => {
  return (
    <div className="portfolio-detail">
      <div className="container">
        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
          {/* Project Image */}
          <div className="project-image">
            <img 
              src="/img/portfolio/curs/5.jpg" 
              alt="Hoya Kerry Activewear Website"
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
              Hoya Kerry Activewear Website
            </h2>
            
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Hoya Kerry is an environmentally-conscious fitness and wellbeing lifestyle brand inspired by the heart-shaped 
              Hoya Kerrii plant, symbolizing love. The project emphasized eco-friendly, mindful, and fashionable living.
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
                <li>Developed the full website, showcasing a variety of fitness and activewear products, including sports bras, tops, bottoms, accessories, and reusable masks, all integrated with a seamless e-commerce shopping experience.</li>
                <li>Set up product categories and filtering options, enabling users to easily browse through new arrivals, sport bras, tops, bottoms, and accessories.</li>
                <li>Implemented a merchandise store featuring activewear with detailed product information, pricing, and "Add to Cart" functionality, improving the overall user experience.</li>
                <li>Designed an informative blog section covering topics related to fitness, sustainability, and breast cancer screening, providing additional value to the website visitors.</li>
                <li>Built a specialized section to display and facilitate transactions for the "Hoya Kerry Girls" NFT collection, integrating with OpenSea for easy interaction with the Ethereum blockchain.</li>
              </ul>
            </div>

            <div className="project-links" style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                Links:
              </h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://www.hoyakerry.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
                >
                  Website
                </a>
                <a 
                  href="https://opensea.io/hoyakerry" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
                >
                  Collection
                </a>
                <a 
                  href="https://www.instagram.com/hoyakerry_nft/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
                >
                  Instagram
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
                {['Solidity', 'ERC-1155', 'Ethereum', 'IPFS', 'Python', 'JavaScript', 'HTML', 'CSS', 'OpenSea API'].map(tech => (
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

export default HoyaKerry;
