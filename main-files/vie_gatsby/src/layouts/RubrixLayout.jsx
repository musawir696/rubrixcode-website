import React from "react";
import { Script } from "gatsby";

import Cursor from "components/cursor";
import LoadingScreen from "components/Loading-Screen";

import "styles/main.css";
import "styles/rubrixcode.css";

const RubrixLayout = ({ children }) => {
  React.useEffect(() => {
    // Defer-load preloader CSS to avoid CSS chunk order warnings in dev
    const preloaderLink = document.createElement('link');
    preloaderLink.rel = 'stylesheet';
    preloaderLink.href = '/styles/preloader.css';
    requestAnimationFrame(() => document.head.appendChild(preloaderLink));

    // Set RubrixCode theme
    window.theme = "rubrix";
    
    // Remove any existing theme styles
    const existingStyles = document.querySelectorAll('link[href*="light.css"], link[href*="dark.css"]');
    existingStyles.forEach(style => style.remove());
    
    // Add custom fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
    
    // Initialize GSAP scroll animations
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
    
    return () => {
      observer.disconnect();
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
