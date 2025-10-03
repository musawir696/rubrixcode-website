import React from "react";
import RubrixNavbar from "components/RubrixNavbar/navbar";
import RubrixPortfolio from "components/RubrixPortfolio/portfolio";
import RubrixFooter from "components/RubrixFooter/footer";
import RubrixLayout from "layouts/RubrixLayout";

const PortfolioPage = () => {
  return (
    <RubrixLayout>
      <RubrixNavbar />
      
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '60vh', paddingTop: '100px' }}>
        <div className="container">
          <div className="text-center">
            <h1 className="hero-title fade-in">Our Portfolio</h1>
            <p className="hero-subtitle fade-in" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Explore our recent projects and see how we've helped businesses achieve their digital goals 
              with innovative software solutions.
            </p>
          </div>
        </div>
      </section>

      <RubrixPortfolio />

      {/* Stats Section */}
      <section className="section" style={{ background: 'var(--bg-800)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2>Our Impact</h2>
            <p>Numbers that speak to our commitment to excellence and client success.</p>
          </div>

          <div className="grid grid-4">
            <div className="text-center fade-in">
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                color: 'var(--accent-400)',
                marginBottom: '0.5rem'
              }}>
                50+
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Projects Completed</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Successful projects delivered across various industries
              </p>
            </div>
            <div className="text-center fade-in">
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                color: 'var(--accent-400)',
                marginBottom: '0.5rem'
              }}>
                98%
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Client Satisfaction</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Happy clients who trust us with their projects
              </p>
            </div>
            <div className="text-center fade-in">
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                color: 'var(--accent-400)',
                marginBottom: '0.5rem'
              }}>
                24/7
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Support Available</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Round-the-clock support for all our clients
              </p>
            </div>
            <div className="text-center fade-in">
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                color: 'var(--accent-400)',
                marginBottom: '0.5rem'
              }}>
                5+
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Years Experience</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Years of expertise in software development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2>What Our Clients Say</h2>
            <p>Don't just take our word for it - hear from our satisfied clients.</p>
          </div>

          <div className="grid grid-3">
            <div className="card fade-in">
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ 
                  color: 'var(--accent-400)', 
                  fontSize: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  ★★★★★
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "RubrixCode transformed our business with their innovative approach to software development. 
                  The team delivered exactly what we needed and more."
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--accent-400)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--bg-900)',
                  fontWeight: '600'
                }}>
                  JD
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>John Davis</h4>
                  <p style={{ margin: '0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    CEO, TechStart Inc.
                  </p>
                </div>
              </div>
            </div>
            <div className="card fade-in">
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ 
                  color: 'var(--accent-400)', 
                  fontSize: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  ★★★★★
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "Exceptional work! The team's attention to detail and commitment to quality is unmatched. 
                  We couldn't be happier with the results."
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--accent-400)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--bg-900)',
                  fontWeight: '600'
                }}>
                  ML
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>Maria Lopez</h4>
                  <p style={{ margin: '0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    CTO, InnovateCorp
                  </p>
                </div>
              </div>
            </div>
            <div className="card fade-in">
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ 
                  color: 'var(--accent-400)', 
                  fontSize: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  ★★★★★
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "Professional, reliable, and innovative. RubrixCode exceeded our expectations and delivered 
                  a solution that has transformed our operations."
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--accent-400)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--bg-900)',
                  fontWeight: '600'
                }}>
                  RK
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>Robert Kim</h4>
                  <p style={{ margin: '0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Founder, DigitalFlow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RubrixFooter />
    </RubrixLayout>
  );
};

export const Head = () => {
  return (
    <>
      <title>Portfolio - RubrixCode</title>
      <meta name="description" content="Explore RubrixCode's portfolio of successful projects. See how we've helped businesses achieve their digital goals with innovative software solutions." />
      <meta name="keywords" content="rubrixcode portfolio, software projects, web development, mobile apps, case studies" />
    </>
  );
};

export default PortfolioPage;
