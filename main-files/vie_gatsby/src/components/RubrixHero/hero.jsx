import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Spline from '@splinetool/react-spline';

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const RubrixHero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline();
      
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 100, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.4"
      );

      // Parallax effect for hero background
      gsap.to(heroRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Floating animation for CTA button
      gsap.to(ctaRef.current, {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
        <div className="spline-container">
          {/* Fallback gradient background - always visible */}
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(15, 182, 255, 0.1) 0%, rgba(7, 24, 34, 0.8) 100%)',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }} />
          
          {/* Spline 3D scene - temporarily disabled due to invalid URL */}
          {/* 
          {!splineError && (
            <Spline
              scene="https://prod.spline.design/6Wc1X7yf-6Wc1X7yf-6Wc1X7yf/scene.splinecode"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: splineLoaded ? 0.7 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
              onLoad={() => {
                console.log('Spline scene loaded successfully');
                setSplineLoaded(true);
              }}
              onError={(error) => {
                console.error('Spline scene failed to load:', error);
                setSplineError(true);
              }}
            />
          )}
          */}
        </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title fade-in" ref={titleRef}>
            Crafting Digital Excellence
          </h1>
          <p className="hero-subtitle fade-in" ref={subtitleRef}>
            We build innovative software solutions that transform ideas into reality. 
            From web applications to mobile apps, we deliver exceptional digital experiences.
          </p>
          <div className="fade-in" ref={ctaRef}>
            <a href="#portfolio" className="btn-primary">
              View Our Work
            </a>
            <a href="#contact" className="btn-secondary" style={{ marginLeft: '1rem' }}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RubrixHero;
