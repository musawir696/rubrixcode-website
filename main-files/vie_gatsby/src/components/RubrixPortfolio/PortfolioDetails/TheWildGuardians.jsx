import React from "react";

const TheWildGuardians = () => {
  return (
    <div className="portfolio-detail">
      <div className="container">
        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
          {/* Project Image */}
          <div className="project-image">
            <img 
              src="/img/portfolio/WildGuardians.jpg" 
              alt="The Wild Guardians NFT Collection"
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
              The Wild Guardians NFT Collection
            </h2>
            
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              The Wild Guardians is a captivating NFT art collection on the Ethereum blockchain, featuring 30 mesmerizing 
              characters crafted by world-class artists. This project offers unique, high-quality, non-derivative artwork based 
              on apex predators, along with exclusive perks and revenue-sharing opportunities for guardian holders.
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
                <li>Developed the comprehensive Wild Guardians website using Webflow, incorporating key features such as minting, a roadmap, member rewards, and contact sections to enhance user engagement.</li>
                <li>Integrated wallet connect and minting functionalities, allowing users to purchase NFTs directly from the website, as well as platforms like Minstarter and OpenSea Pro, with cross-platform payment options like Crossmint and MoonPay.</li>
                <li>Designed sections for FAQs and community education, offering clear guidance on minting and token standards, to create a more transparent and user-friendly experience.</li>
                <li>Collaborated with media outlets like Hudson Weekly, NFT Unicorn, and Coindesk to feature the Wild Guardians project, and highlighted them prominently on the site to build credibility.</li>
              </ul>
            </div>

            <div className="project-links" style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                Links:
              </h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="https://thewildguardians.netlify.app/" 
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
                {['Webflow', 'Webflow APIs', 'Ethereum', 'Solidity', 'Wallet Connect', 'Metamask', 'Metaplex SDK'].map(tech => (
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

export default TheWildGuardians;
