import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import portfolio detail components
import SwedenRelocators from "./PortfolioDetails/SwedenRelocators";
import ArliElectrical from "./PortfolioDetails/ArliElectrical";
import CrossroadsAdventure from "./PortfolioDetails/CrossroadsAdventure";
import Si3SiHer from "./PortfolioDetails/Si3SiHer";
import DecimalsRebuilt from "./PortfolioDetails/DecimalsRebuilt";
import Contiamo from "./PortfolioDetails/Contiamo";
import AegeanTaxi from "./PortfolioDetails/AegeanTaxi";
import Growphics from "./PortfolioDetails/Growphics";
import TheWildGuardians from "./PortfolioDetails/TheWildGuardians";
import Perplexa from "./PortfolioDetails/Perplexa";
import Brainwave from "./PortfolioDetails/Brainwave";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const RubrixPortfolio = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animate portfolio cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 60, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Sweden Relocators AB Portal",
      description: "A comprehensive relocation and mobility solutions portal for Nordic countries with real-time tracking and multi-language support.",
      image: "/img/portfolio/2.jpg",
      category: "web",
      tech: ["Figma", "React", "Tailwind CSS", "Material UI", "Node.js", "Laravel", "Vite JS"],
      component: SwedenRelocators
    },
    {
      id: 2,
      title: "Arli Electrical Website",
      description: "A professional website for electrical services with mobile responsiveness and customer engagement features.",
      image: "/img/portfolio/3.jpg",
      category: "web",
      tech: ["HTML", "CSS", "JavaScript", "GoDaddy Hosting"],
      component: ArliElectrical
    },
    {
      id: 3,
      title: "Crossroads Adventure Website",
      description: "A premier luxury expedition specialist website for Pakistan's adventure travel, featuring trip management and booking system.",
      image: "/img/portfolio/4.jpg",
      category: "web",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "GoDaddy Hosting"],
      component: CrossroadsAdventure
    },
    {
      id: 4,
      title: "Si3 & Si Her Web3 Platform",
      description: "A comprehensive Web3 platform creating accessible pathways for diverse voices in the new economy with decentralized infrastructure.",
      image: "/img/portfolio/5.jpg",
      category: "web3",
      tech: ["Figma", "HTML", "CSS", "JavaScript", "Wallet Connect", "IPNS", "IPFS", "ENS", "Firebase"],
      component: Si3SiHer
    },
    {
      id: 5,
      title: "Decimals Rebuilt NFT Platform",
      description: "A sophisticated NFT platform with seamless user experience, combining advanced blockchain features with intuitive web interface for minting and managing NFTs.",
      image: "/img/portfolio/1.jpg",
      category: "nft",
      tech: ["Solidity", "ERC-721A", "OpenZeppelin", "Hardhat", "JavaScript", "Polygon", "Ethers.js", "Web3", "React.js"],
      component: DecimalsRebuilt
    },
    {
      id: 6,
      title: "Contiamo Data Analytics & AI Website",
      description: "Enhanced key sections of Contiamo's website to improve user experience and performance, focusing on data analytics and AI solutions.",
      image: "/img/portfolio/6.jpg",
      category: "web",
      tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Next.js", "Canva", "GitHub", "Git", "Webpack", "Node.js"],
      component: Contiamo
    },
    {
      id: 7,
      title: "Aegean Taxi Transportation Website",
      description: "Premium transportation service website offering seamless travel solutions across Greece with responsive design and mobile-first approach.",
      image: "/img/portfolio/7.jpg",
      category: "web",
      tech: ["Figma", "HTML", "Vanilla CSS", "JavaScript", "Tailwind CSS", "Next.js", "React"],
      component: AegeanTaxi
    },
    {
      id: 8,
      title: "Growphics Professional Graphics Website",
      description: "High-quality professional graphics website specializing in logos, social media content, and complete brand overhauls with enhanced artistic styling.",
      image: "/img/portfolio/cr/1.jpg",
      category: "web",
      tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Next.js", "Node.js", "Git", "GitHub", "Netlify", "FromSpree"],
      component: Growphics
    },
    {
      id: 9,
      title: "The Wild Guardians NFT Collection",
      description: "Captivating NFT art collection on Ethereum blockchain featuring 30 mesmerizing characters with exclusive perks and revenue-sharing opportunities.",
      image: "/img/portfolio/curs/1.jpg",
      category: "nft",
      tech: ["Webflow", "Webflow APIs", "Ethereum", "Solidity", "Wallet Connect", "Metamask", "Metaplex SDK"],
      component: TheWildGuardians
    },
    {
      id: 10,
      title: "Perplexa Digital Agency Website",
      description: "Leading digital marketing agency website offering business growth, marketing advice, and finance consulting services with comprehensive React development.",
      image: "/img/portfolio/curs/2.jpg",
      category: "web",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Figma", "Adobe XD", "Adobe Photoshop", "Illustrator", "Firebase", "Google APIs"],
      component: Perplexa
    },
    {
      id: 11,
      title: "Brainwave AI Company Website",
      description: "AI-based company website offering cutting-edge tools and solutions with dynamic animations, hover effects, and parallax features using GSAP.",
      image: "/img/portfolio/curs/3.jpg",
      category: "web",
      tech: ["HTML", "Tailwind CSS", "React", "GSAP"],
      component: Brainwave
    }
   
  ];


  // If a project is selected, show the detail component
  if (selectedProject) {
    const ProjectComponent = selectedProject.component;
    return (
      <section className="section" ref={sectionRef} id="portfolio">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <button 
              onClick={() => setSelectedProject(null)}
              className="btn-secondary"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                marginBottom: '2rem'
              }}
            >
              ← Back to Portfolio
            </button>
          </div>
          <ProjectComponent />
        </div>
      </section>
    );
  }

  return (
    <section className="section" ref={sectionRef} id="portfolio">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="fade-in">Our Portfolio</h2>
          <p className="fade-in">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>


        {/* Portfolio Grid */}
        <div className="grid grid-3">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="card fade-in"
              ref={el => cardsRef.current[index] = el}
              style={{ 
                background: 'linear-gradient(135deg, var(--bg-800) 0%, var(--bg-700) 100%)',
                border: '1px solid var(--bg-600)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                gsap.to(e.target, { scale: 1.05, duration: 0.3 });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, { scale: 1, duration: 0.3 });
              }}
            >
              <div style={{ 
                height: '200px', 
                borderRadius: '10px',
                marginBottom: '1.5rem',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={`/img/portfolio/${project.id}.jpg`}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(15, 182, 255, 0.8), rgba(13, 165, 230, 0.8))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  color: 'var(--bg-900)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '0';
                }}
                >
                  🌐
                </div>
              </div>
              
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
                {project.title}
              </h4>
              
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.9rem',
                marginBottom: '1.5rem' 
              }}>
                {project.description}
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.5rem' 
                }}>
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      style={{
                        background: 'var(--bg-600)',
                        color: 'var(--accent-400)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedProject(project)}
                className="btn-primary"
                style={{ 
                  width: '100%', 
                  textAlign: 'center',
                  fontSize: '0.9rem',
                  padding: '0.75rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RubrixPortfolio;
