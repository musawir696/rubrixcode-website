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
      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Stagger animation for cards
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%"
          }
        }
      );

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
