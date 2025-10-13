import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hero.css";
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
      // Optimized hero entrance animation - simpler, faster
      const tl = gsap.timeline({ 
        defaults: { ease: "power2.out" },
        delay: 0.1
      });
      
      // Title animation - simplified
      tl.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          y: 60,
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
        }
      )
      // Subtitle - simplified
      .fromTo(subtitleRef.current,
        { 
          opacity: 0, 
          y: 30,
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.6, 
        },
        "-=0.4"
      )
      // CTA buttons
      .fromTo(ctaRef.current,
        { 
          opacity: 0, 
          y: 30,
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.6,
        },
        "-=0.3"
      );

      // Only add interactive effects on desktop (better mobile performance)
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
      
      if (isDesktop) {
        // Add hover effects to buttons with passive event listeners
        const buttons = ctaRef.current.querySelectorAll('.butn');
        buttons.forEach(button => {
          button.addEventListener('mouseenter', () => {
            gsap.to(button, {
              scale: 1.05,
              duration: 0.25,
              ease: "power1.out"
            });
          }, { passive: true });
          
          button.addEventListener('mouseleave', () => {
            gsap.to(button, {
              scale: 1,
              x: 0,
              y: 0,
              duration: 0.25,
              ease: "power1.out"
            });
          }, { passive: true });
        });
      }

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={heroRef} id="hero" className="slider-st valign position-re rubrix-hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 valign">
            <div className="cont md-mb50 text-center rubrix-hero-container">
              
              <h1 className="mb-10 hero-title rubrix-hero-title" ref={titleRef}>
                We Turn <span className="rubrix-hero-title-highlight">Bold Ideas</span> Into <br className="d-none d-sm-inline" />Powerful Digital Products
              </h1>
              <p ref={subtitleRef} className="rubrix-hero-subtitle">
                From Web3 platforms to AI-powered apps, we've shipped 50+ high-impact projects 
                for startups and enterprises worldwide. Your vision deserves world-class execution.
              </p>
              <div ref={ctaRef} className="rubrix-hero-cta-container">
                <a href="#portfolio" className="butn bord curve rubrix-hero-cta-link">
                  <span className="rubrix-hero-cta-span">See Our Work</span>
                </a>
                <a href="#contact" className="butn bord curve rubrix-hero-cta-link">
                  <span className="rubrix-hero-cta-span">Start Your Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default RubrixHero;
