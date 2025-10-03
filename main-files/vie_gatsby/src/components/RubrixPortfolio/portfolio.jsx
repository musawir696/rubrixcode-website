import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const RubrixPortfolio = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [filter, setFilter] = useState('all');

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
  }, [filter]);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory management and seamless payment integration.",
      image: "/img/portfolio/1.jpg",
      category: "web",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
      image: "/img/portfolio/2.jpg",
      category: "mobile",
      tech: ["React Native", "Firebase", "AWS"],
      link: "#"
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      description: "Comprehensive analytics dashboard for SaaS businesses with real-time data visualization.",
      image: "/img/portfolio/3.jpg",
      category: "web",
      tech: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      link: "#"
    },
    {
      id: 4,
      title: "AI Chatbot Platform",
      description: "Intelligent chatbot platform powered by machine learning for customer service automation.",
      image: "/img/portfolio/4.jpg",
      category: "ai",
      tech: ["Python", "TensorFlow", "React", "Docker"],
      link: "#"
    },
    {
      id: 5,
      title: "IoT Monitoring System",
      description: "Real-time IoT device monitoring system with predictive analytics and alert management.",
      image: "/img/portfolio/5.jpg",
      category: "iot",
      tech: ["Node.js", "MQTT", "InfluxDB", "Grafana"],
      link: "#"
    },
    {
      id: 6,
      title: "Blockchain Wallet",
      description: "Secure multi-currency blockchain wallet with DeFi integration and staking capabilities.",
      image: "/img/portfolio/6.jpg",
      category: "blockchain",
      tech: ["Web3.js", "Solidity", "React", "Ethereum"],
      link: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'iot', name: 'IoT' },
    { id: 'blockchain', name: 'Blockchain' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="section" ref={sectionRef} id="portfolio">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="fade-in">Our Portfolio</h2>
          <p className="fade-in">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`btn-secondary ${filter === category.id ? 'active' : ''}`}
                style={{
                  background: filter === category.id ? 'var(--accent-400)' : 'transparent',
                  color: filter === category.id ? 'var(--bg-900)' : 'var(--accent-400)',
                  border: `2px solid var(--accent-400)`,
                  padding: '0.5rem 1.5rem',
                  fontSize: '0.9rem'
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-3">
          {filteredProjects.map((project, index) => (
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
                background: `linear-gradient(45deg, var(--accent-400), var(--accent-500))`,
                borderRadius: '10px',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'var(--bg-900)'
              }}>
                {project.category === 'web' && '🌐'}
                {project.category === 'mobile' && '📱'}
                {project.category === 'ai' && '🤖'}
                {project.category === 'iot' && '🔗'}
                {project.category === 'blockchain' && '⛓️'}
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
              
              <a 
                href={project.link}
                className="btn-primary"
                style={{ 
                  width: '100%', 
                  textAlign: 'center',
                  fontSize: '0.9rem',
                  padding: '0.75rem'
                }}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RubrixPortfolio;
