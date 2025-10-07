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
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      icon: "🌐"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with user experience at the forefront.",
      icon: "🎨"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
      icon: "☁️"
    }
  ];

  return (
    <section className="section" ref={sectionRef}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="fade-in">What We Do</h2>
          <p className="fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
            We are a team of passionate developers and designers dedicated to creating 
            exceptional digital experiences that drive business growth.
          </p>
        </div>

        <div className="grid grid-2" style={{ marginBottom: '4rem' }}>
          <div className="slide-in-left">
            <h3>Our Mission</h3>
            <p>
              To empower businesses with innovative software solutions that not only meet 
              their current needs but also scale with their future growth. We believe in 
              the power of technology to transform ideas into reality.
            </p>
          </div>
          <div className="slide-in-right">
            <h3>Our Vision</h3>
            <p>
              To be the leading software development company that bridges the gap between 
              cutting-edge technology and practical business solutions, creating a world 
              where every great idea can become a digital reality.
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
