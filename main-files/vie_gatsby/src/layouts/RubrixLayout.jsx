import React from "react";
import { Script } from "gatsby";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Cursor from "components/cursor";
import LoadingScreen from "components/Loading-Screen";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
}

const RubrixLayout = ({ children }) => {
  React.useEffect(() => {
    // Set RubrixCode theme
    window.theme = "rubrix";
    
    // Remove any existing theme styles
    const existingStyles = document.querySelectorAll('link[href*="light.css"], link[href*="dark.css"]');
    existingStyles.forEach(style => style.remove());
    
    // Add custom fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
    
    // Initialize smooth scroll for anchor links with GSAP
    const initSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const href = this.getAttribute('href');
          
          // Skip if it's just "#" or "#0"
          if (href === '#' || href === '#0') {
            e.preventDefault();
            return;
          }

          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            
            gsap.to(window, {
              duration: 1.2,
              scrollTo: {
                y: target,
                offsetY: 80, // Account for fixed navbar
                autoKill: true
              },
              ease: "power3.inOut"
            });
          }
        });
      });
    };

    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize GSAP scroll animations with IntersectionObserver fallback
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    // Observe all animation elements
    const animationElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animationElements.forEach(el => observer.observe(el));

    // Add parallax effect to page sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      // Subtle parallax on alternating sections
      if (index % 2 === 0 && section.querySelector('.container')) {
        gsap.to(section, {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }
    });

    // Refresh ScrollTrigger on window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    
    // Add smooth scroll behavior to window
    if ('scrollBehavior' in document.documentElement.style) {
      document.documentElement.style.scrollBehavior = 'auto'; // Let GSAP handle it
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Cursor />
      <LoadingScreen />
      {children}
      
      <Script src="/js/wowInit.js"></Script>
    </>
  );
};

export default RubrixLayout;
