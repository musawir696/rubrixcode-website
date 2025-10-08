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
      // Enhanced hero entrance animation with split text effect
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      // Title animation with scale and rotation
      tl.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          y: 100, 
          scale: 0.8,
          rotationX: -15
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotationX: 0,
          duration: 1.4,
          ease: "power4.out"
        }
      )
      // Subtitle with blur effect
      .fromTo(subtitleRef.current,
        { 
          opacity: 0, 
          y: 50,
          filter: "blur(10px)"
        },
        { 
          opacity: 1, 
          y: 0,
          filter: "blur(0px)",
          duration: 1.2, 
          ease: "power3.out" 
        },
        "-=0.8"
      )
      // CTA buttons with bounce
      .fromTo(ctaRef.current,
        { 
          opacity: 0, 
          y: 40, 
          scale: 0.85 
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 1,
          ease: "back.out(2)" 
        },
        "-=0.6"
      );

      // Smooth parallax scroll effect
      gsap.to(heroRef.current.querySelector('.spline-container'), {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          invalidateOnRefresh: true
        }
      });

      // Floating animation for CTA buttons with slight rotation
      gsap.to(ctaRef.current, {
        y: -15,
        rotation: 1,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

      // Add magnetic effect to buttons
      const buttons = ctaRef.current.querySelectorAll('.btn-primary, .btn-secondary');
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        // Magnetic follow effect
        button.addEventListener('mousemove', (e) => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(button, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
          });
        });
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={heroRef} id="hero" className="slider-st valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 valign">
            <div className="cont md-mb50 text-center" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 15px' }}>
              
              <h1 className="mb-10 hero-title" ref={titleRef} style={{ padding: '0', margin: '0 0 20px 0' }}>
                We Turn <span style={{ color: 'rgb(120, 110, 204)' }}>Bold Ideas</span> Into <br/>Powerful Digital Products
              </h1>
              <p ref={subtitleRef}>
                From Web3 platforms to AI-powered apps, we've shipped 50+ high-impact projects 
                for startups and enterprises worldwide. Your vision deserves world-class execution.
              </p>
              <div ref={ctaRef} style={{ marginTop: '30px', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="#portfolio" className="butn bord curve">
                  <span>See Our Work</span>
                </a>
                <a href="#contact" className="butn bord curve">
                  <span>Start Your Project</span>
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
