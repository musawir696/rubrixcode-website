import React from "react";
import { Script } from "gatsby";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Cursor from "components/cursor";
import ScrollToTop from "components/scrollToTop";
import LoadingScreen from "components/Loading-Screen";  

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
}

const DarkTheme = ({ children, useSkin, mobileappstyle }) => {
  React.useEffect(() => {
    window.theme = "dark";
    
    // Ensure rubrixcode.css takes precedence by setting high specificity
    document.body.classList.add('rubrix-theme');
    
    // Only load additional CSS if needed (lazy load non-critical styles)
    if (useSkin) {
      const skinCssLink = document.createElement('link');
      skinCssLink.rel = "stylesheet";
      skinCssLink.href = "/css/arch-skin-dark.css";
      skinCssLink.media = "print";
      skinCssLink.onload = function() { this.media = 'all'; };
      document.head.appendChild(skinCssLink);
    }

    if (mobileappstyle) {
      const mobileAppCssLink = document.createElement('link');
      mobileAppCssLink.rel = "stylesheet";
      mobileAppCssLink.href = "/css/mobile-app-dark.css";
      mobileAppCssLink.media = "print";
      mobileAppCssLink.onload = function() { this.media = 'all'; };
      document.head.appendChild(mobileAppCssLink);
    }

    // Initialize smooth scroll for anchor links with GSAP - debounced
    const initSmoothScroll = () => {
      const anchors = document.querySelectorAll('a[href^="#"]');
      anchors.forEach(anchor => {
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
              duration: 0.8,
              scrollTo: {
                y: target,
                offsetY: 80,
                autoKill: true
              },
              ease: "power2.inOut"
            });
          }
        });
      });
    };

    // Delay smooth scroll initialization until page is interactive
    if (document.readyState === 'complete') {
      initSmoothScroll();
    } else {
      window.addEventListener('load', initSmoothScroll, { once: true });
    }
    
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

    // Debounced resize handler for better performance
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [useSkin, mobileappstyle]);

  return (
    <>
      <Cursor />
      <LoadingScreen />
      { children }
      <ScrollToTop />

      <Script src="/js/wowInit.js"></Script>
    </>
  );
};

export default DarkTheme;
