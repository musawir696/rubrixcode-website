import React from "react";
import Navbar from "components/Navbar/navbar";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";

export const AboutSections = () => (
	<>
		{/* 🔹 Inline About Hero Section  */}
		<section className="hero slider-st valign position-re" style={{ minHeight: '60vh', paddingTop: '120px', paddingBottom: '80px' }}>
			<div className="container">
				<div className="text-center" style={{ maxWidth: '1000px', margin: '0 auto' }}>
					<h1 
						className="hero-title fade-in" 
						style={{ 
							fontSize: 'clamp(48px, 6vw, 72px)', 
							fontWeight: '700', 
							marginBottom: '30px',
							lineHeight: '1.2'
						}}
					>
						We Build <span style={{ color: 'rgb(120, 110, 204)' }}>Exceptional</span> Digital Products
					</h1>
					<p
						className="fade-in"
						style={{ 
							maxWidth: '850px', 
							margin: '0 auto',
							fontSize: 'clamp(16px, 2vw, 20px)',
							lineHeight: '1.8',
							fontWeight: '500',
							color: '#ffffff'
						}}
					>
						From blockchain platforms handling millions in transactions to AI-powered SaaS used by thousands — 
						we're passionate developers and designers who don't do mediocre. Every line of code ships with purpose. 
						Every pixel drives growth.
					</p>
				</div>
			</div>
		</section>

		{/* 🔹 What We Do */}
		<section className="section" style={{ paddingTop: '60px' }}>
			<div className="container">
				<div className="text-center" style={{ marginBottom: '4rem' }}>
					<h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '700', marginBottom: '20px' }}>
						Why <span style={{ color: 'rgb(120, 110, 204)' }}>Choose Us</span>
					</h2>
					<p style={{ fontSize: '18px', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
						We deliver world-class execution that moves your business forward.
					</p>
				</div>

				<div className="grid grid-3">
					<div className="card fade-in" style={{ padding: '2.5rem', textAlign: 'center' }}>
						<div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>⚡</div>
						<h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>Rapid Execution</h3>
						<p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
							MVP in 4 weeks. Full product in 12. We work in sprints, ship weekly, 
							and iterate based on real user data. Not endless meetings.
						</p>
					</div>
					<div className="card fade-in" style={{ padding: '2.5rem', textAlign: 'center' }}>
						<div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>💎</div>
						<h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>Premium Craft</h3>
						<p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
							Every pixel matters. Every interaction delights. We don't ship "good enough" — 
							we ship experiences that make users say "wow, this is beautiful."
						</p>
					</div>
					<div className="card fade-in" style={{ padding: '2.5rem', textAlign: 'center' }}>
						<div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>📈</div>
						<h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>Growth-Focused</h3>
						<p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
							We optimize for metrics that matter: conversions, retention, revenue. 
							Beautiful code is useless if it doesn't move the business forward.
						</p>
					</div>
				</div>
			</div>
		</section>

		{/* 🔹 Team/Company Short Story */}
		<section className="section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
			<div className="container">
				<div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
					<div className="slide-in-left">
						<h2 style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: '700', marginBottom: '25px', lineHeight: '1.2' }}>
							The <span style={{ color: 'rgb(120, 110, 204)' }}>RubrixCode</span> Story
						</h2>
						<p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: '#ffffff', fontWeight: '400' }}>
							Born in 2020 during the pandemic, we started building Web3 projects when NFTs 
							were still "weird internet monkey pictures." <strong style={{ color: 'rgb(120, 110, 204)' }}>We saw the future early.</strong>
						</p>
						<p style={{ fontSize: '18px', lineHeight: '1.8', color: '#ffffff', fontWeight: '400' }}>
							Today, we've shipped everything from <strong style={{ color: 'rgb(120, 110, 204)' }}>AI landing pages</strong> to 
							<strong style={{ color: 'rgb(120, 110, 204)' }}> $5M NFT collections</strong>. Our clients range from solo founders 
							to international enterprises. What unites them? They all wanted something <strong style={{ color: 'rgb(120, 110, 204)' }}>exceptional</strong>.
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
										'linear-gradient(135deg, rgba(120, 110, 204, 0.3), rgba(100, 90, 180, 0.3))',
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
		<section className="section" style={{ background: 'var(--bg-800)', paddingTop: '80px', paddingBottom: '80px' }}>
			<div className="container">
				<div className="text-center" style={{ marginBottom: '4rem' }}>
					<h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '700', marginBottom: '20px' }}>
						What <span style={{ color: 'rgb(120, 110, 204)' }}>Drives</span> Us
					</h2>
					<p style={{ fontSize: '18px', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
						Beyond the code, beyond the pixels — this is what we're really building.
					</p>
				</div>

				<div className="grid grid-2" style={{ gap: '3rem' }}>
					<div className="card fade-in" style={{ padding: '3rem' }}>
						<div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🔥</div>
						<h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '15px' }}>Our Mission</h3>
						<p style={{ fontSize: '17px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
							<strong style={{ color: 'rgb(120, 110, 204)', fontWeight: '600' }}>Make cutting-edge tech accessible.</strong> No jargon, 
							no gatekeeping. Whether you're a solo founder with $10K or an enterprise with millions, 
							you deserve world-class digital products. We're here to build them.
						</p>
					</div>
					<div className="card fade-in" style={{ padding: '3rem' }}>
						<div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🚀</div>
						<h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '15px' }}>Our Vision</h3>
						<p style={{ fontSize: '17px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
							<strong style={{ color: 'rgb(120, 110, 204)', fontWeight: '600' }}>Every founder should have a technical co-founder.</strong> We act 
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
