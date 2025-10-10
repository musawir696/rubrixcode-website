import React from "react";
import Navbar from "components/Navbar/navbar";
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";
import "./about.css";

export const AboutSections = () => (
	<>
		{/* 🔹 About Hero Section  */}
		<section className="hero slider-st valign position-re about-hero-section">
			<div className="container">
				<div className="about-hero-container">
					<h1 className="hero-title fade-in about-hero-title">
						We Build <span className="about-hero-highlight">Exceptional</span> Digital Products
					</h1>
					<p className="fade-in about-hero-subtitle">
						From blockchain platforms handling millions in transactions to AI-powered SaaS used by thousands — 
						we're passionate developers and designers who don't do mediocre. Every line of code ships with purpose. 
						Every pixel drives growth.
					</p>
				</div>
			</div>
		</section>

		{/* 🔹 What We Do */}
		<section className="section about-features-section">
			<div className="container">
				<div className="about-features-heading">
					<h2 className="about-features-title">
						Why <span className="about-hero-highlight">Choose Us</span>
					</h2>
					<p className="about-features-subtitle">
						We deliver world-class execution that moves your business forward.
					</p>
				</div>

				<div className="grid grid-3">
					<div className="card fade-in about-feature-card">
						<div className="about-feature-icon">⚡</div>
						<h3 className="about-feature-title">Rapid Execution</h3>
						<p className="about-feature-description">
							MVP in 4 weeks. Full product in 12. We work in sprints, ship weekly, 
							and iterate based on real user data. Not endless meetings.
						</p>
					</div>
					<div className="card fade-in about-feature-card">
						<div className="about-feature-icon">💎</div>
						<h3 className="about-feature-title">Premium Craft</h3>
						<p className="about-feature-description">
							Every pixel matters. Every interaction delights. We don't ship "good enough" — 
							we ship experiences that make users say "wow, this is beautiful."
						</p>
					</div>
					<div className="card fade-in about-feature-card">
						<div className="about-feature-icon">📈</div>
						<h3 className="about-feature-title">Growth-Focused</h3>
						<p className="about-feature-description">
							We optimize for metrics that matter: conversions, retention, revenue. 
							Beautiful code is useless if it doesn't move the business forward.
						</p>
					</div>
				</div>
			</div>
		</section>

		{/* 🔹 Team/Company Short Story */}
		<section className="section about-story-section">
			<div className="container">
				<div className="grid grid-2 about-story-grid">
					<div className="slide-in-left">
						<h2 className="about-story-title">
							The <span className="about-hero-highlight">RubrixCode</span> Story
						</h2>
						<p className="about-story-paragraph">
							Born in 2020 during the pandemic, we started building Web3 projects when NFTs 
							were still "weird internet monkey pictures." <strong className="about-story-strong">We saw the future early.</strong>
						</p>
						<p className="about-story-paragraph">
							Today, we've shipped everything from <strong className="about-story-strong">AI landing pages</strong> to 
							<strong className="about-story-strong"> $5M NFT collections</strong>. Our clients range from solo founders 
							to international enterprises. What unites them? They all wanted something <strong className="about-story-strong">exceptional</strong>.
						</p>
					</div>
					<div className="slide-in-right">
						<div className="about-story-image-container">
							<img
								src="/img/slid/about.jpg"
								alt="RubrixCode Team"
								className="about-story-image"
							/>
							<div className="about-story-image-overlay">
								🚀
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		{/* 🔹 Mission & Vision */}
		<section className="section about-mission-section">
			<div className="container">
				<div className="about-mission-heading">
					<h2 className="about-mission-title">
						What <span className="about-hero-highlight">Drives</span> Us
					</h2>
					<p className="about-mission-subtitle">
						Beyond the code, beyond the pixels — this is what we're really building.
					</p>
				</div>

				<div className="grid grid-2 about-mission-grid">
					<div className="card fade-in about-mission-card">
						<div className="about-mission-icon">🔥</div>
						<h3 className="about-mission-card-title">Our Mission</h3>
						<p className="about-mission-description">
							<strong className="about-mission-strong">Make cutting-edge tech accessible.</strong> No jargon, 
							no gatekeeping. Whether you're a solo founder with $10K or an enterprise with millions, 
							you deserve world-class digital products. We're here to build them.
						</p>
					</div>
					<div className="card fade-in about-mission-card">
						<div className="about-mission-icon">🚀</div>
						<h3 className="about-mission-card-title">Our Vision</h3>
						<p className="about-mission-description">
							<strong className="about-mission-strong">Every founder should have a technical co-founder.</strong> We act 
							as yours — bringing Silicon Valley-level expertise without the equity dilution. 
							Your success is our reputation.
						</p>
					</div>
				</div>
			</div>
		</section>
	</>
);

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
