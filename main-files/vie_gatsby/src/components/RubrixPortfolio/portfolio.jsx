import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navigate } from "gatsby";
import "./portfolio.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const RubrixPortfolio = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animate section heading
      const heading = sectionRef.current.querySelector('h2');
      const subtitle = sectionRef.current.querySelector('p');
      
      if (heading) {
        gsap.fromTo(heading,
          { 
            opacity: 0, 
            y: -40,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%"
            }
          }
        );
      }

      if (subtitle) {
        gsap.fromTo(subtitle,
          { 
            opacity: 0, 
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: subtitle,
              start: "top 85%"
            }
          }
        );
      }

      // Enhanced stagger animation for portfolio cards with 3D effect
      const validCards = cardsRef.current.filter(Boolean);
      
      gsap.fromTo(validCards,
        { 
          opacity: 0, 
          y: 100,
          scale: 0.85,
          rotationX: 20,
          z: -100
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          z: 0,
          duration: 1,
          stagger: {
            amount: 0.8,
            from: "start",
            ease: "power2.out"
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current.querySelector('.grid'),
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );

      // Add parallax effect to portfolio images
      validCards.forEach((card) => {
        const img = card.querySelector('img');
        if (img) {
          gsap.to(img, {
            yPercent: -15,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5
            }
          });
        }
      });

      // Add advanced hover animations
      validCards.forEach((card, index) => {
        // Magnetic effect
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(card, {
            rotationY: x / 40,
            rotationX: -y / 40,
            transformPerspective: 1000,
            duration: 0.5,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
          });
        });

        // Hover effect on image
        const img = card.querySelector('img');
        if (img) {
          card.addEventListener('mouseenter', () => {
            gsap.to(img, {
              scale: 1.1,
              duration: 0.6,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(img, {
              scale: 1,
              duration: 0.6,
              ease: "power2.out"
            });
          });
        }

        // Animate tech tags on hover
        const techTags = card.querySelectorAll('span[style*="background: var(--bg-600)"]');
        card.addEventListener('mouseenter', () => {
          gsap.to(techTags, {
            y: -5,
            stagger: 0.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(techTags, {
            y: 0,
            stagger: 0.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);


  const projects = [
    {
      id: 1,
      title: "Sweden Relocators AB Portal",
      description: "A comprehensive relocation and mobility solutions portal for Nordic countries with real-time tracking and multi-language support.",
      image: "/img/portfolio/SR.jpg",
      category: "web",
      tech: ["Figma", "React", "Tailwind CSS", "Material UI", "Node.js", "Laravel", "Vite JS"],
      slug: "/portfolio-details/sweden-relocators"
    },
    {
      id: 2,
      title: "Arli Electrical Website",
      description: "A professional website for electrical services with mobile responsiveness and customer engagement features.",
      image: "/img/portfolio/Arli.jpg",
      category: "web",
      tech: ["HTML", "CSS", "JavaScript", "GoDaddy Hosting"],
      slug: "/portfolio-details/arli-electrical"
    },
    {
      id: 3,
      title: "Crossroads Adventure Website",
      description: "A premier luxury expedition specialist website for Pakistan's adventure travel, featuring trip management and booking system.",
      image: "/img/portfolio/crossroad.jpg",
      category: "web",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "GoDaddy Hosting"],
      slug: "/portfolio-details/crossroads-adventure"
    },
    {
      id: 4,
      title: "Si3 & Si Her Web3 Platform",
      description: "A comprehensive Web3 platform creating accessible pathways for diverse voices in the new economy with decentralized infrastructure.",
      image: "/img/portfolio/sis.jpg",
      category: "web3",
      tech: ["Figma", "HTML", "CSS", "JavaScript", "Wallet Connect", "IPNS", "IPFS", "ENS", "Firebase"],
      slug: "/portfolio-details/si3-siher"
    },
    {
      id: 5,
      title: "Decimals Rebuilt NFT Platform",
      description: "A sophisticated NFT platform with seamless user experience, combining advanced blockchain features with intuitive web interface for minting and managing NFTs.",
      image: "/img/portfolio/Decimal.jpg",
      category: "nft",
      tech: ["Solidity", "ERC-721A", "OpenZeppelin", "Hardhat", "JavaScript", "Polygon", "Ethers.js", "Web3", "React.js"],
      slug: "/portfolio-details/decimals-rebuilt"
    },
    {
      id: 6,
      title: "Contiamo Data Analytics & AI Website",
      description: "Enhanced key sections of Contiamo's website to improve user experience and performance, focusing on data analytics and AI solutions.",
      image: "/img/portfolio/Contiamo.jpg",
      category: "web",
      tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Next.js", "Canva", "GitHub", "Git", "Webpack", "Node.js"],
      slug: "/portfolio-details/contiamo"
    },
    {
      id: 7,
      title: "Aegean Taxi Transportation Website",
      description: "Premium transportation service website offering seamless travel solutions across Greece with responsive design and mobile-first approach.",
      image: "/img/portfolio/Aegean.jpg",
      category: "web",
      tech: ["Figma", "HTML", "Vanilla CSS", "JavaScript", "Tailwind CSS", "Next.js", "React"],
      slug: "/portfolio-details/aegean-taxi"
    },
    {
      id: 8,
      title: "Growphics Professional Graphics Website",
      description: "High-quality professional graphics website specializing in logos, social media content, and complete brand overhauls with enhanced artistic styling.",
      image: "/img/portfolio/Growphics.jpg",
      category: "web",
      tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Next.js", "Node.js", "Git", "GitHub", "Netlify", "FromSpree"],
      slug: "/portfolio-details/growphics"
    },
    {
      id: 9,
      title: "The Wild Guardians NFT Collection",
      description: "Captivating NFT art collection on Ethereum blockchain featuring 30 mesmerizing characters with exclusive perks and revenue-sharing opportunities.",
      image: "/img/portfolio/WildGuardians.jpg",
      category: "nft",
      tech: ["Webflow", "Webflow APIs", "Ethereum", "Solidity", "Wallet Connect", "Metamask", "Metaplex SDK"],
      slug: "/portfolio-details/the-wild-guardians"
    },
    {
      id: 10,
      title: "Perplexa Digital Agency Website",
      description: "Leading digital marketing agency website offering business growth, marketing advice, and finance consulting services with comprehensive React development.",
      image: "/img/portfolio/Perplexa.jpg",
      category: "web",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Figma", "Adobe XD", "Adobe Photoshop", "Illustrator", "Firebase", "Google APIs"],
      slug: "/portfolio-details/perplexa"
    },
    {
      id: 11,
      title: "Brainwave AI Company Website",
      description: "AI-based company website offering cutting-edge tools and solutions with dynamic animations, hover effects, and parallax features using GSAP.",
      image: "/img/portfolio/Brainwave.jpg",
      category: "web",
      tech: ["HTML", "Tailwind CSS", "React", "GSAP"],
      slug: "/portfolio-details/brainwave"
    },
    {
      id: 12,
      title: "Z.L.U.F. — Double Hearts NFT Project",
      description: "AI and human emotion exploration using Double Hearts NFTs, with e‑commerce merchandise and Polygon ERC‑721 smart contracts.",
      image: "/img/portfolio/Zulf.jpg",
      category: "nft",
      tech: ["Solidity", "Smart Contracts", "Web3.js", "HTML", "CSS", "JavaScript", "IPFS", "Metamask", "Polygon", "ERC-721", "WalletConnect", "Firebase"],
      slug: "/portfolio-details/zluf"
    },
    {
      id: 13,
      title: "Hoya Kerry Activewear Website",
      description: "Environmentally-conscious fitness and wellbeing lifestyle brand with e-commerce platform, NFT collection, and sustainable activewear products.",
      image: "/img/portfolio/Hoyakerry.jpg",
      category: "web",
      tech: ["Solidity", "ERC-1155", "Ethereum", "IPFS", "Python", "JavaScript", "HTML", "CSS", "OpenSea API"],
      slug: "/portfolio-details/hoya-kerry"
    },
    {
      id: 14,
      title: "Miura Protocol DeFi Platform",
      description: "Decentralized non-custodial liquidity market protocol for borrowing assets using NFTs as collateral with Solana blockchain integration.",
      image: "/img/portfolio/Miura.jpg",
      category: "defi",
      tech: ["Figma", "HTML", "CSS", "JavaScript", "Solana", "Solflare", "Wallet Connect", "Blender", "Canva", "Adobe Photoshop", "Next.js", "React", "Firebase", "Metaplex SDK"],
      slug: "/portfolio-details/miura-protocol"
    },
    {
      id: 15,
      title: "SustainChain Token Platform",
      description: "Pioneering membership benefits platform leveraging blockchain technology to support real-world construction projects with exclusive perks and no sales tax.",
      image: "/img/portfolio/SustainChain.jpg",
      category: "blockchain",
      tech: ["HTML", "CSS", "JavaScript", "Web3", "Ethereum", "Wallet Connect", "Git", "GitHub", "Firebase", "Metaplex SDK"],
      slug: "/portfolio-details/sustainchain"
    },
    {
      id: 16,
      title: "The Bankroll Bear Society",
      description: "NFT collection of 5,000 unique bears with real-world utilities, staking, giveaways, token usage, and environmental impact goals.",
      image: "/img/portfolio/BankRoll.jpg",
      category: "nft",
      tech: ["HTML", "CSS", "JavaScript", "Solidity", "Ethereum", "Web3", "Ebisus Bay", "Firebase", "Metaplex SDK"],
      slug: "/portfolio-details/bankroll-bears"
    },
    {
      id: 17,
      title: "Lumino Digital Agency Website",
      description: "Digital agency site delivering creative, tech-savvy brand experiences with interactive content and full responsiveness.",
      image: "/img/portfolio/Lumino.jpg",
      category: "web",
      tech: ["React", "JavaScript", "HTML", "CSS", "Node.js", "Figma", "Canva", "Firebase", "MongoDB", "Google API"],
      slug: "/portfolio-details/lumino"
    },
    {
      id: 18,
      title: "Sharia Landlord NFT Collection",
      description: "Utility-based NFT collection offering capital gains and regular dividends from managed real estate and sharing house businesses with stable investment value.",
      image: "/img/portfolio/Sharia.jpg",
      category: "nft",
      tech: ["Polygon", "Solidity", "Python", "OpenSea", "JavaScript", "IPFS", "Metamask", "HTML", "CSS", "Node.js"],
      slug: "/portfolio-details/sharia-landlord"
    },
    {
      id: 19,
      title: "Cryptify Crypto Landing Page",
      description: "High-converting lead-generation landing page for crypto industry with professional design, multi-step forms, and optimized data collection.",
      image: "/img/portfolio/Cryptify.jpg",
      category: "web",
      tech: ["Next.js", "Tailwind CSS", "React Hook Form", "Node.js", "ExcelJS", "React Context API", "Vercel"],
      slug: "/portfolio-details/cryptify"
    },
    {
      id: 20,
      title: "Pro Futures Trading Platform",
      description: "Comprehensive platform providing top-tier tools and resources for futures traders with responsive design and SEO optimization.",
      image: "/img/portfolio/ProFutures.jpg",
      category: "web",
      tech: ["Hostinger Website Builder"],
      slug: "/portfolio-details/pro-futures-trading"
    },
    {
      id: 21,
      title: "NFTracker Fraud Detection Platform",
      description: "Innovative tool for real-time NFT fraud detection and blockchain transaction analysis with Auth0 integration and secure login functionality.",
      image: "/img/portfolio/NFTracker.jpg",
      category: "web",
      tech: ["React.js", "Auth0 (Google Login Integration)", "CSS", "VS Code", "Hostinger"],
      slug: "/portfolio-details/nftracker"
    }
   
  ];

  // Reset refs before rendering grid so new elements are tracked
  cardsRef.current = [];

  return (
    <section className="section portfolio-section" ref={sectionRef} id="portfolio">
      <div className="container">
        <div className="portfolio-heading-container">
          <h2 className="fade-in">Real Projects. Real Results.</h2>
          <p className="fade-in portfolio-subtitle">
            <strong className="portfolio-subtitle-highlight">21 live products.</strong> From Sweden to Greece, 
            NFT platforms to SaaS apps, blockchain to AI. Each one solving real problems 
            for real businesses. <strong>Click any project to see the full story.</strong>
          </p>
        </div>


        {/* Portfolio Grid */}
        <div className="grid grid-3">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="card fade-in portfolio-card"
              ref={el => { cardsRef.current[index] = el; }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
              }}
              onClick={() => navigate(project.slug)}
            >
              <div className="portfolio-image-container">
                <img 
                  src={project.image ? project.image : `/img/portfolio/${project.id}.jpg`}
                  alt={project.title}
                  className="portfolio-image"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                <div className="portfolio-overlay"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                >
                  🌐
                </div>
              </div>
              
              <h4 className="portfolio-card-title">
                {project.title}
              </h4>
              
              <p className="portfolio-card-description">
                {project.description}
              </p>
              
              <div>
                <div className="portfolio-tech-tags">
                  {project.tech.map(tech => (
                    <span key={tech} className="portfolio-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RubrixPortfolio;
