import React from "react";
import { Script } from "gatsby";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Cursor from "components/cursor";
import ScrollToTop from "components/scrollToTop";
import LoadingScreen from "components/Loading-Screen";

import "styles/main.css";
import "styles/preloader.css";
import "styles/rubrixcode.css";  

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
}

const DarkTheme = ({ children, useSkin, mobileappstyle }) => {
  React.useEffect(() => {
    window.theme = "dark";
    
    // Add custom Inter font for RubrixCode
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    fontLink.rel = 'stylesheet';
    if (!document.querySelector(`link[href="${fontLink.href}"]`)) {
      document.head.appendChild(fontLink);
    }
    
    // Load dark theme CSS
    let lightStyles = document.querySelector('link[href="/css/light.css"]');
    let darkStyles = document.querySelector('link[href="/css/dark.css"]');
    if (lightStyles) {
      if (!darkStyles) {
        let darkStylesheet = document.createElement('link');
        darkStylesheet.rel = "stylesheet";
        darkStylesheet.href = "/css/dark.css";
        document.head.appendChild(darkStylesheet)
      }
      lightStyles.remove();
    }
    
    // Ensure rubrixcode.css takes precedence by setting high specificity
    document.body.classList.add('rubrix-theme');
    
    if (useSkin) {
      let skinCssLink = document.createElement('link');
      skinCssLink.rel = "stylesheet";
      skinCssLink.href = "/css/arch-skin-dark.css";
      document.head.appendChild(skinCssLink)
    }

    if (mobileappstyle) {
      let mobileAppCssLink = document.createElement('link');
      mobileAppCssLink.rel = "stylesheet";
      mobileAppCssLink.href = "/css/mobile-app-dark.css";
      document.head.appendChild(mobileAppCssLink)
    }

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

    // Refresh ScrollTrigger on window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

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
