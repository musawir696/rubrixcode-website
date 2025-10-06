import React from "react";
import RubrixNavbar from "components/RubrixNavbar/navbar";
import RubrixFooter from "components/RubrixFooter/footer";
import RubrixLayout from "layouts/RubrixLayout";

export const AboutSections = () => (
	<>
		{/* 🔹 Inline About Hero Section  */}
		<section className="hero" style={{ minHeight: '60vh', paddingTop: '100px' }}>
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
					<h2>What We Do</h2>
					<p>
						We design, build, and scale modern digital products end-to-end — from discovery
						and UX to production-grade engineering and ongoing growth.
					</p>
				</div>

				<div className="grid grid-3">
					<div className="card fade-in">
						<div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧩</div>
						<h3>Product Strategy</h3>
						<p>
							Discovery workshops, roadmaps, and validation to align business goals with
							user needs and technical feasibility.
						</p>
					</div>
					<div className="card fade-in">
						<div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛠️</div>
						<h3>Design & Engineering</h3>
						<p>
							UX/UI design, web and mobile development, CMS/e-commerce, and platform
							integrations delivered with quality.
						</p>
					</div>
					<div className="card fade-in">
						<div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
						<h3>Scale & Growth</h3>
						<p>
							Cloud architecture, performance, DevOps, analytics, and continuous improvement
							to keep shipping value.
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
						<h2>Team/Company Short Story</h2>
						<p>
							Started in 2020, RubrixCode grew from a small group of builders into a
							multidisciplinary team delivering delightful, business-ready software.
						</p>
						<p>
							We partner with startups and enterprises to turn ideas into products, modernize
							platforms, and create experiences that people love to use every day.
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
					<h2>Mission & Vision</h2>
					<p>Why we exist today — and where we’re heading next.</p>
				</div>

				<div className="grid grid-2">
					<div className="card fade-in">
						<div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
						<h3>Our Mission</h3>
						<p>
							Empower teams to ship impactful digital products faster — with craftsmanship,
							clarity, and measurable outcomes.
						</p>
					</div>
					<div className="card fade-in">
						<div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌍</div>
						<h3>Our Vision</h3>
						<p>
							A world where exceptional software is accessible to every organization and
							loved by every user.
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
  return (
    <RubrixLayout>
      <RubrixNavbar />
      <AboutSections />
      <RubrixFooter />
    </RubrixLayout>
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
