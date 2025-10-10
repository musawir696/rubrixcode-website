import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "components/Navbar/navbar";
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";
import "./about.css";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const AboutSections = () => {
  const heroRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const essenceRef = useRef(null);
  const storyRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Hero section 3D animation
      if (heroRef.current) {
        gsap.fromTo(heroRef.current,
          { 
            opacity: 0, 
            y: 100, 
            rotationX: -15,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 80%"
            }
          }
        );
      }

      // Vision section with 3D flip
      if (visionRef.current) {
        gsap.fromTo(visionRef.current,
          { 
            opacity: 0, 
            rotationY: -90,
            transformOrigin: "center center"
          },
          {
            opacity: 1,
            rotationY: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: visionRef.current,
              start: "top 75%"
            }
          }
        );
      }

      // Mission section with 3D flip (opposite direction)
      if (missionRef.current) {
        gsap.fromTo(missionRef.current,
          { 
            opacity: 0, 
            rotationY: 90,
            transformOrigin: "center center"
          },
          {
            opacity: 1,
            rotationY: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: missionRef.current,
              start: "top 75%"
            }
          }
        );
      }

      // Essence section with 3D zoom
      if (essenceRef.current) {
        gsap.fromTo(essenceRef.current,
          { 
            opacity: 0, 
            scale: 0.5,
            rotationZ: 5
          },
          {
            opacity: 1,
            scale: 1,
            rotationZ: 0,
            duration: 1.4,
            ease: "elastic.out(1, 0.3)",
            scrollTrigger: {
              trigger: essenceRef.current,
              start: "top 75%"
            }
          }
        );
      }

      // Story section with timeline
      if (storyRef.current) {
        gsap.fromTo(storyRef.current,
          { 
            opacity: 0, 
            x: -100,
            rotationY: -15
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: storyRef.current,
              start: "top 70%"
            }
          }
        );
      }

      // Services cards animation
      const serviceCards = cardsRef.current.slice(3, 9); // Services cards (index 3-8)
      const validServiceCards = serviceCards.filter(card => card !== null);
      if (validServiceCards.length > 0) {
        gsap.fromTo(validServiceCards,
          { 
            opacity: 0, 
            y: 50,
            rotationX: -30,
            transformOrigin: "bottom center"
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: validServiceCards[0],
              start: "top 80%"
            }
          }
        );
      }

      // Values cards animation
      const valueCards = cardsRef.current.slice(0, 3); // Values cards (index 0-2)
      const validValueCards = valueCards.filter(card => card !== null);
      if (validValueCards.length > 0) {
        gsap.fromTo(validValueCards,
          { 
            opacity: 0, 
            y: 50,
            rotationX: -30,
            transformOrigin: "bottom center"
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: validValueCards[0],
              start: "top 80%"
            }
          }
        );
      }

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* 🔹 Hero Section with 3D Effects */}
      <section className="about-hero-3d">
        <div className="container">
          <div className="about-hero-content" ref={heroRef}>
            <div className="hero-3d-container">
              <h1 className="hero-title-3d">
                Crafting the Future of
                <span className="gradient-text-3d"> Digital Innovation</span>
              </h1>
              <p className="hero-subtitle-3d">
                We transform bold ideas into extraordinary digital experiences that captivate, 
                convert, and create lasting impact.
              </p>
              <div className="hero-stats-3d">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bg-3d">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </section>

      {/* 🔹 Vision, Mission, Essence Combined Section */}
      <section className="about-vision-mission-essence-3d">
        <div className="container">
          <div className="vision-mission-essence-grid">
            
            {/* Vision */}
            <div className="vision-mission-essence-item" ref={visionRef}>
              <div className="item-background vision-bg">
                <div className="bg-3d-shape vision-shape"></div>
                <div className="bg-overlay"></div>
              </div>
              <div className="item-content">
                <h2 className="item-title">Our Vision</h2>
                <p className="item-description">
                  To create tools and innovative solutions that empower people to express themselves 
                  uniquely. An opportunity to discover their hidden potential and bring their 
                  boldest ideas to life.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="vision-mission-essence-item" ref={missionRef}>
              <div className="item-background mission-bg">
                <div className="bg-3d-shape mission-shape"></div>
                <div className="bg-overlay"></div>
              </div>
              <div className="item-content">
                <h2 className="item-title">Our Mission</h2>
                <p className="item-description">
                  Our success depends on our team. Together we strive to work hard, creating 
                  top-notch products and making a real difference in the digital landscape.
                </p>
              </div>
            </div>

            {/* Essence */}
            <div className="vision-mission-essence-item" ref={essenceRef}>
              <div className="item-background essence-bg">
                <div className="bg-3d-shape essence-shape"></div>
                <div className="bg-overlay"></div>
              </div>
              <div className="item-content">
                <h2 className="item-title">Our Essence</h2>
                <p className="item-description">
                  With the right tools and expertise, individuals can unlock extraordinary potential. 
                  We provide the technology and creativity to make it happen.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔹 What We Do Section */}
      <section className="about-services-3d">
        <div className="container">
          <h2 className="section-title-3d text-center">What We Do</h2>
          <div className="services-grid">
            <div className="service-card-3d" ref={el => cardsRef.current[3] = el}>
              <div className="service-icon">💻</div>
              <h3>Web Development</h3>
              <p>Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.</p>
            </div>
            <div className="service-card-3d" ref={el => cardsRef.current[4] = el}>
              <div className="service-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Beautiful, intuitive interfaces that engage users and drive conversions through thoughtful design and user research.</p>
            </div>
            <div className="service-card-3d" ref={el => cardsRef.current[5] = el}>
              <div className="service-icon">🔗</div>
              <h3>Web3 Solutions</h3>
              <p>Blockchain applications, smart contracts, and NFT platforms that leverage the power of decentralized technology.</p>
            </div>
            <div className="service-card-3d" ref={el => cardsRef.current[6] = el}>
              <div className="service-icon">🤖</div>
              <h3>AI Integration</h3>
              <p>Intelligent applications powered by artificial intelligence to automate processes and enhance user experiences.</p>
            </div>
            <div className="service-card-3d" ref={el => cardsRef.current[7] = el}>
              <div className="service-icon">📱</div>
              <h3>Mobile Apps</h3>
              <p>Native and cross-platform mobile applications that deliver exceptional performance across all devices.</p>
            </div>
            <div className="service-card-3d" ref={el => cardsRef.current[8] = el}>
              <div className="service-icon">⚡</div>
              <h3>Consulting</h3>
              <p>Strategic technical consulting to help businesses make informed decisions about their digital transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Story Section */}
      <section className="about-story-3d">
        <div className="container">
          <div className="story-content-3d" ref={storyRef}>
            <h2 className="section-title-3d">Our Story</h2>
            <div className="story-text-3d">
              <p className="story-paragraph-3d">
                Born during the pandemic, we started building Web3 projects when NFTs 
                were still "weird internet monkey pictures." <strong className="story-strong-3d">We saw the future early.</strong>
              </p>
              <p className="story-paragraph-3d">
                Today, we've shipped everything from <strong className="story-strong-3d">AI landing pages</strong> to 
                <strong className="story-strong-3d"> $5M NFT collections</strong>. Our clients range from solo founders 
                to international enterprises. What unites them? They all wanted something <strong className="story-strong-3d">exceptional</strong>.
              </p>
              <p className="story-paragraph-3d">
                Founded with a deep understanding of the power of creativity and technology, 
                we recognized the need for innovative solutions that help businesses thrive 
                in a rapidly evolving digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Values Cards */}
      <section className="about-values-3d">
        <div className="container">
          <h2 className="section-title-3d text-center">What Drives Us</h2>
          <div className="values-grid">
            <div className="value-card-3d" ref={el => cardsRef.current[0] = el}>
              <div className="value-icon">🎯</div>
              <h3>Precision</h3>
              <p>Every detail matters. We craft with intention and purpose.</p>
            </div>
            <div className="value-card-3d" ref={el => cardsRef.current[1] = el}>
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>Pushing boundaries and exploring new possibilities daily.</p>
            </div>
            <div className="value-card-3d" ref={el => cardsRef.current[2] = el}>
              <div className="value-icon">🤝</div>
              <h3>Partnership</h3>
              <p>Your success is our success. We're in this together.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Export a placeholder to satisfy any imports
export const AboutTeam = () => null;

const AboutPage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      
      <div className="main-content">
        <AboutSections />
        <CallToAction />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => (
  <>
    <title>About Us - RubrixCode</title>
    <meta
      name="description"
      content="Discover what we do, our short story, and our mission & vision at RubrixCode — a team of designers and engineers crafting exceptional digital products."
    />
    <meta
      name="keywords"
      content="rubrixcode about, what we do, company story, mission, vision, product development, design and engineering"
    />
  </>
);

export default AboutPage;
