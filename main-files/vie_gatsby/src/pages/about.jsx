import React from "react";
import Navbar from "components/Navbar/navbar";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";

export const AboutSections = () => (
	<>
		{/* 🔹 Inline About Hero Section  */}
		<section className="hero" style={{ minHeight: '50vh', paddingTop: '60px' }}>
			<div className="container">
				<div className="text-center">
					<h1 className="hero-title fade-in">About RubrixCode</h1>
					<p
						className="hero-subtitle fade-in"
						style={{ maxWidth: '700px', margin: '0 auto' }}
					>
						We are passionate developers and designers dedicated to creating exceptional
						digital experiences that drive business growth and innovation.
					</p>
				</div>
			</div>
		</section>

		{/* 🔹 What We Do */}
		<section className="section">
			<div className="container">
				<div className="text-center" style={{ marginBottom: '4rem' }}>
					<h2>We Build Products That Win</h2>
					<p style={{ fontSize: '1.15rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
						From <strong style={{ color: 'var(--accent-400)' }}>blockchain platforms</strong> handling millions in transactions 
						to <strong style={{ color: 'var(--accent-400)' }}>AI-powered SaaS</strong> used by thousands — 
						we don't do mediocre. Every line of code ships with purpose.
					</p>
				</div>

				<div className="grid grid-3">
					<div className="card fade-in">
						<div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
						<h3>Rapid Execution</h3>
						<p>
							MVP in 4 weeks. Full product in 12. We work in sprints, ship weekly, 
							and iterate based on real user data. Not endless meetings.
						</p>
					</div>
					<div className="card fade-in">
						<div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💎</div>
						<h3>Premium Craft</h3>
						<p>
							Every pixel matters. Every interaction delights. We don't ship "good enough" — 
							we ship experiences that make users say "wow, this is beautiful."
						</p>
					</div>
					<div className="card fade-in">
						<div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📈</div>
						<h3>Growth-Focused</h3>
						<p>
							We optimize for metrics that matter: conversions, retention, revenue. 
							Beautiful code is useless if it doesn't move the business forward.
						</p>
					</div>
				</div>
			</div>
		</section>

		{/* 🔹 Team/Company Short Story */}
		<section className="section">
			<div className="container">
				<div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
					<div className="slide-in-left">
						<h2>The RubrixCode Story</h2>
						<p>
							Born in 2020 during the pandemic, we started building Web3 projects when NFTs 
							were still "weird internet monkey pictures." <strong style={{ color: 'var(--accent-400)' }}>We saw the future early.</strong>
						</p>
						<p>
							Today, we've shipped everything from <strong style={{ color: 'var(--accent-400)' }}>AI landing pages</strong> to 
							<strong style={{ color: 'var(--accent-400)' }}> $5M NFT collections</strong>. Our clients range from solo founders 
							to international enterprises. What unites them? They all wanted something <strong>exceptional</strong>.
						</p>
					</div>
					<div className="slide-in-right">
						<div
							style={{
								height: '400px',
								borderRadius: '20px',
								overflow: 'hidden',
								position: 'relative'
							}}
						>
							<img
								src="/img/slid/about.jpg"
								alt="RubrixCode Team"
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover'
								}}
							/>
							<div
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									background:
										'linear-gradient(135deg, rgba(15, 182, 255, 0.3), rgba(13, 165, 230, 0.3))',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontSize: '4rem'
								}}
							>
								🚀
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		{/* 🔹 Mission & Vision */}
		<section className="section" style={{ background: 'var(--bg-800)' }}>
			<div className="container">
				<div className="text-center" style={{ marginBottom: '4rem' }}>
					<h2>What Drives Us</h2>
					<p style={{ fontSize: '1.1rem' }}>Beyond the code, beyond the pixels — this is what we're really building.</p>
				</div>

				<div className="grid grid-2">
					<div className="card fade-in">
						<div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔥</div>
						<h3>Our Mission</h3>
						<p>
							<strong style={{ color: 'var(--accent-400)' }}>Make cutting-edge tech accessible.</strong> No jargon, 
							no gatekeeping. Whether you're a solo founder with $10K or an enterprise with millions, 
							you deserve world-class digital products. We're here to build them.
						</p>
					</div>
					<div className="card fade-in">
						<div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
						<h3>Our Vision</h3>
						<p>
							<strong style={{ color: 'var(--accent-400)' }}>Every founder should have a technical co-founder.</strong> We act 
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
