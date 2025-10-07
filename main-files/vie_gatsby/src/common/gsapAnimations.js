// GSAP Animation Utilities for RubrixCode
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Initialize smooth scroll behavior for the entire site
 */
export const initSmoothScroll = () => {
  if (typeof window === "undefined") return;

  // Smooth scroll for anchor links
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

  // Add ScrollTrigger refresh on window resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
};

/**
 * Fade in animation with optional direction
 * @param {Element} element - The element to animate
 * @param {Object} options - Animation options
 */
export const fadeIn = (element, options = {}) => {
  const {
    direction = 'up', // 'up', 'down', 'left', 'right', 'none'
    distance = 50,
    duration = 0.8,
    delay = 0,
    ease = "power2.out",
    stagger = 0,
    scrollTrigger = null
  } = options;

  const getInitialState = () => {
    const state = { opacity: 0 };
    switch (direction) {
      case 'up':
        state.y = distance;
        break;
      case 'down':
        state.y = -distance;
        break;
      case 'left':
        state.x = distance;
        break;
      case 'right':
        state.x = -distance;
        break;
      default:
        break;
    }
    return state;
  };

  const finalState = {
    opacity: 1,
    x: 0,
    y: 0,
    duration,
    delay,
    ease,
    stagger
  };

  if (scrollTrigger) {
    finalState.scrollTrigger = {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none",
      ...scrollTrigger
    };
  }

  gsap.fromTo(element, getInitialState(), finalState);
};

/**
 * Scale in animation
 * @param {Element} element - The element to animate
 * @param {Object} options - Animation options
 */
export const scaleIn = (element, options = {}) => {
  const {
    scale = 0.8,
    duration = 0.8,
    delay = 0,
    ease = "back.out(1.7)",
    scrollTrigger = null
  } = options;

  const finalState = {
    opacity: 1,
    scale: 1,
    duration,
    delay,
    ease
  };

  if (scrollTrigger) {
    finalState.scrollTrigger = {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none",
      ...scrollTrigger
    };
  }

  gsap.fromTo(element, { opacity: 0, scale }, finalState);
};

/**
 * Stagger animation for multiple elements
 * @param {NodeList|Array} elements - The elements to animate
 * @param {Object} options - Animation options
 */
export const staggerAnimation = (elements, options = {}) => {
  const {
    direction = 'up',
    distance = 60,
    duration = 0.6,
    stagger = 0.1,
    ease = "power2.out",
    scrollTrigger = null
  } = options;

  const getInitialState = () => {
    const state = { opacity: 0 };
    switch (direction) {
      case 'up':
        state.y = distance;
        break;
      case 'down':
        state.y = -distance;
        break;
      case 'left':
        state.x = distance;
        break;
      case 'right':
        state.x = -distance;
        break;
      default:
        break;
    }
    return state;
  };

  const finalState = {
    opacity: 1,
    x: 0,
    y: 0,
    duration,
    stagger,
    ease
  };

  if (scrollTrigger) {
    finalState.scrollTrigger = {
      trigger: elements[0],
      start: "top 75%",
      toggleActions: "play none none none",
      ...scrollTrigger
    };
  }

  gsap.fromTo(elements, getInitialState(), finalState);
};

/**
 * Parallax scroll effect
 * @param {Element} element - The element to animate
 * @param {Object} options - Animation options
 */
export const parallaxScroll = (element, options = {}) => {
  const {
    speed = 0.5, // 0 to 1
    direction = 'vertical', // 'vertical' or 'horizontal'
    trigger = element
  } = options;

  const movement = direction === 'vertical' ? { yPercent: speed * 50 } : { xPercent: speed * 50 };

  gsap.to(element, {
    ...movement,
    ease: "none",
    scrollTrigger: {
      trigger,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5,
      invalidateOnRefresh: true
    }
  });
};

/**
 * Magnetic hover effect
 * @param {Element} element - The element to add magnetic effect
 * @param {Object} options - Effect options
 */
export const magneticHover = (element, options = {}) => {
  const {
    strength = 0.3,
    duration = 0.3,
    ease = "power2.out"
  } = options;

  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration,
      ease
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  });
};

/**
 * 3D tilt effect on hover
 * @param {Element} element - The element to add tilt effect
 * @param {Object} options - Effect options
 */
export const tiltEffect = (element, options = {}) => {
  const {
    maxTilt = 15,
    duration = 0.5,
    ease = "power2.out",
    scale = 1.05
  } = options;

  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const rotationY = (x / rect.width) * maxTilt;
    const rotationX = -(y / rect.height) * maxTilt;
    
    gsap.to(element, {
      rotationY,
      rotationX,
      transformPerspective: 1000,
      scale,
      duration,
      ease
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)"
    });
  });
};

/**
 * Text reveal animation (split text effect)
 * @param {Element} element - The element containing text
 * @param {Object} options - Animation options
 */
export const textReveal = (element, options = {}) => {
  const {
    duration = 0.8,
    stagger = 0.03,
    ease = "power3.out",
    scrollTrigger = null
  } = options;

  // Split text into characters
  const text = element.textContent;
  element.innerHTML = text
    .split('')
    .map(char => `<span style="display:inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  const chars = element.querySelectorAll('span');

  const finalState = {
    opacity: 1,
    y: 0,
    duration,
    stagger,
    ease
  };

  if (scrollTrigger) {
    finalState.scrollTrigger = {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none",
      ...scrollTrigger
    };
  }

  gsap.fromTo(chars, { opacity: 0, y: 50 }, finalState);
};

/**
 * Counter animation
 * @param {Element} element - The element to animate
 * @param {Object} options - Animation options
 */
export const counterAnimation = (element, options = {}) => {
  const {
    start = 0,
    end = parseFloat(element.textContent),
    duration = 2,
    ease = "power2.out",
    decimals = 0,
    scrollTrigger = null
  } = options;

  const counter = { value: start };

  const animation = {
    value: end,
    duration,
    ease,
    onUpdate: function() {
      element.textContent = counter.value.toFixed(decimals);
    }
  };

  if (scrollTrigger) {
    animation.scrollTrigger = {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none",
      ...scrollTrigger
    };
  }

  gsap.to(counter, animation);
};

/**
 * Wave animation for elements
 * @param {NodeList|Array} elements - The elements to animate
 * @param {Object} options - Animation options
 */
export const waveAnimation = (elements, options = {}) => {
  const {
    amplitude = 20,
    duration = 1.5,
    stagger = 0.1,
    ease = "sine.inOut",
    scrollTrigger = null
  } = options;

  const animation = {
    y: -amplitude,
    duration,
    stagger,
    ease,
    yoyo: true,
    repeat: -1
  };

  if (scrollTrigger) {
    animation.scrollTrigger = {
      trigger: elements[0],
      start: "top 80%",
      toggleActions: "play pause resume pause",
      ...scrollTrigger
    };
  }

  gsap.to(elements, animation);
};

/**
 * Rotate animation on scroll
 * @param {Element} element - The element to rotate
 * @param {Object} options - Animation options
 */
export const rotateOnScroll = (element, options = {}) => {
  const {
    rotation = 360,
    trigger = element
  } = options;

  gsap.to(element, {
    rotation,
    ease: "none",
    scrollTrigger: {
      trigger,
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });
};

/**
 * Blur to focus animation
 * @param {Element} element - The element to animate
 * @param {Object} options - Animation options
 */
export const blurToFocus = (element, options = {}) => {
  const {
    blurAmount = 10,
    duration = 1,
    ease = "power2.out",
    scrollTrigger = null
  } = options;

  const finalState = {
    filter: "blur(0px)",
    opacity: 1,
    duration,
    ease
  };

  if (scrollTrigger) {
    finalState.scrollTrigger = {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none",
      ...scrollTrigger
    };
  }

  gsap.fromTo(element, 
    { filter: `blur(${blurAmount}px)`, opacity: 0 }, 
    finalState
  );
};

/**
 * Initialize all animations for a section
 * @param {Element} section - The section element
 */
export const initSectionAnimations = (section) => {
  if (!section) return;

  // Animate headings
  const headings = section.querySelectorAll('h1, h2, h3');
  headings.forEach((heading, index) => {
    fadeIn(heading, {
      direction: 'down',
      distance: 40,
      delay: index * 0.1,
      scrollTrigger: { trigger: heading, start: "top 85%" }
    });
  });

  // Animate paragraphs
  const paragraphs = section.querySelectorAll('p');
  staggerAnimation(paragraphs, {
    direction: 'up',
    distance: 30,
    stagger: 0.05,
    scrollTrigger: { trigger: paragraphs[0], start: "top 85%" }
  });

  // Animate cards
  const cards = section.querySelectorAll('.card');
  if (cards.length > 0) {
    staggerAnimation(cards, {
      direction: 'up',
      distance: 60,
      stagger: 0.15,
      scrollTrigger: { trigger: cards[0], start: "top 75%" }
    });

    // Add tilt effect to cards
    cards.forEach(card => {
      tiltEffect(card, { maxTilt: 10, scale: 1.02 });
    });
  }

  // Animate buttons
  const buttons = section.querySelectorAll('.btn-primary, .btn-secondary');
  buttons.forEach(button => {
    magneticHover(button, { strength: 0.3 });
  });
};

export default {
  initSmoothScroll,
  fadeIn,
  scaleIn,
  staggerAnimation,
  parallaxScroll,
  magneticHover,
  tiltEffect,
  textReveal,
  counterAnimation,
  waveAnimation,
  rotateOnScroll,
  blurToFocus,
  initSectionAnimations
};

