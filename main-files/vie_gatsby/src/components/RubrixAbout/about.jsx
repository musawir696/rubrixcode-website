import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const RubrixAbout = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animate heading with split effect
      const heading = sectionRef.current.querySelector('h2');
      const subtitle = sectionRef.current.querySelector('p');
      
      gsap.fromTo(heading,
        { 
          opacity: 0, 
          y: -30,
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
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

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
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animate mission and vision with parallax
      const missionVision = sectionRef.current.querySelectorAll('.slide-in-left, .slide-in-right');
      missionVision.forEach((elem, index) => {
        const direction = index === 0 ? -50 : 50;
        gsap.fromTo(elem,
          { 
            opacity: 0, 
            x: direction,
            rotationY: index === 0 ? -5 : 5
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // Enhanced stagger animation for service cards with 3D effect
      gsap.fromTo(cardsRef.current,
        { 
          opacity: 0, 
          y: 80,
          scale: 0.85,
          rotationX: 15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: {
            amount: 0.6,
            from: "start",
            ease: "power2.out"
          },
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: sectionRef.current.querySelector('.grid-4'),
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      // Add hover animations for cards
      cardsRef.current.forEach((card) => {
        if (!card) return;

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -12,
            scale: 1.03,
            duration: 0.4,
            ease: "power2.out"
          });

          // Animate icon
          const icon = card.querySelector('div[style*="fontSize"]');
          if (icon) {
            gsap.to(icon, {
              scale: 1.2,
              rotation: 360,
              duration: 0.5,
              ease: "back.out(1.7)"
            });
          }
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          });

          // Reset icon
          const icon = card.querySelector('div[style*="fontSize"]');
          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.5,
              ease: "power2.out"
            });
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Web3 & Blockchain",
      description: "NFT platforms, DeFi protocols, and smart contracts on Ethereum, Solana & Polygon. We've minted millions in NFT sales.",
      icon: "⛓️"
    },
    {
      title: "Full-Stack Development",
      description: "React, Next.js, Node.js, Laravel. From MVP to scale, we build fast and ship faster. Production-ready code, always.",
      icon: "⚡"
    },
    {
      title: "Premium UI/UX",
      description: "Figma to pixel-perfect code. We design interfaces that users love and competitors envy. Award-worthy aesthetics.",
      icon: "🎨"
    },
    {
      title: "AI Integration",
      description: "ChatGPT APIs, machine learning models, and intelligent automation. Make your product smarter than the competition.",
      icon: "🤖"
    }
  ];

  return (
    <section className="section" ref={sectionRef}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="fade-in">What We Actually Do</h2>
          <p className="fade-in" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8' }}>
            We don't just "build apps" — we architect <strong style={{ color: 'var(--accent-400)' }}>revenue-generating platforms</strong>, 
            launch <strong style={{ color: 'var(--accent-400)' }}>viral NFT collections</strong>, and create 
            <strong style={{ color: 'var(--accent-400)' }}> user experiences that convert</strong>. 
            21 shipped projects. Zero vaporware.
          </p>
        </div>

        <div className="grid grid-2" style={{ marginBottom: '4rem' }}>
          <div className="slide-in-left">
            <h3>Why Choose Us?</h3>
            <p>
              <strong style={{ color: 'var(--accent-400)' }}>Speed meets quality.</strong> We've built NFT platforms 
              that sold out in 48 hours, e-commerce sites processing $100K+ monthly, and Web3 apps 
              with 10K+ active users. <strong>Your deadline is our obsession.</strong>
            </p>
          </div>
          <div className="slide-in-right">
            <h3>Our Secret Sauce</h3>
            <p>
              We're <strong style={{ color: 'var(--accent-400)' }}>not another dev shop</strong>. We're product thinkers 
              who code. We challenge your assumptions, optimize your UX, and ship features 
              that actually move metrics. <strong>Results > activity.</strong>
            </p>
          </div>
        </div>

        <div className="grid grid-4">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card fade-in"
              ref={el => cardsRef.current[index] = el}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                {service.icon}
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RubrixAbout;
