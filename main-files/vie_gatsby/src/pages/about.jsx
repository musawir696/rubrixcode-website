import React from "react";
import RubrixNavbar from "components/RubrixNavbar/navbar";
import RubrixFooter from "components/RubrixFooter/footer";
import RubrixLayout from "layouts/RubrixLayout";

const AboutPage = () => {
  return (
    <RubrixLayout>
      <RubrixNavbar />
      
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '60vh', paddingTop: '100px' }}>
        <div className="container">
          <div className="text-center">
            <h1 className="hero-title fade-in">About RubrixCode</h1>
            <p className="hero-subtitle fade-in" style={{ maxWidth: '700px', margin: '0 auto' }}>
              We are passionate developers and designers dedicated to creating exceptional 
              digital experiences that drive business growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="slide-in-left">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, RubrixCode emerged from a simple belief: that great software 
                should not only solve problems but also inspire and delight users. What started 
                as a small team of passionate developers has grown into a full-service software 
                development company.
              </p>
              <p>
                We've had the privilege of working with startups, enterprises, and everything 
                in between, helping them navigate the complex world of digital transformation. 
                Our approach combines technical expertise with creative thinking to deliver 
                solutions that exceed expectations.
              </p>
            </div>
            <div className="slide-in-right">
              <div style={{
                height: '400px',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src="/img/slid/about.jpg"
                  alt="RubrixCode Team"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(15, 182, 255, 0.3), rgba(13, 165, 230, 0.3))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem'
                }}>
                  🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--bg-800)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2>Our Values</h2>
            <p>These principles guide everything we do and shape how we work with our clients.</p>
          </div>

          <div className="grid grid-3">
            <div className="card fade-in">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
              <h3>Excellence</h3>
              <p>
                We strive for excellence in every project, paying attention to detail and 
                ensuring the highest quality standards in our deliverables.
              </p>
            </div>
            <div className="card fade-in">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
              <h3>Collaboration</h3>
              <p>
                We believe in the power of collaboration, working closely with our clients 
                to understand their vision and bring it to life.
              </p>
            </div>
            <div className="card fade-in">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💡</div>
              <h3>Innovation</h3>
              <p>
                We embrace new technologies and innovative approaches to solve complex 
                problems and create cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2>Meet Our Team</h2>
            <p>Talented individuals working together to deliver exceptional results.</p>
          </div>

          <div className="grid grid-4">
            <div className="card fade-in" style={{ textAlign: 'center' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                overflow: 'hidden',
                border: '3px solid var(--accent-400)'
              }}>
                <img 
                  src="/img/team/1.jpg"
                  alt="Alex Johnson"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h4>Alex Johnson</h4>
              <p style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>CEO & Founder</p>
              <p style={{ fontSize: '0.9rem' }}>
                Full-stack developer with 10+ years of experience in building scalable applications.
              </p>
            </div>
            <div className="card fade-in" style={{ textAlign: 'center' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                overflow: 'hidden',
                border: '3px solid var(--accent-400)'
              }}>
                <img 
                  src="/img/team/2.jpg"
                  alt="Sarah Chen"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h4>Sarah Chen</h4>
              <p style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>Lead Designer</p>
              <p style={{ fontSize: '0.9rem' }}>
                UI/UX designer passionate about creating intuitive and beautiful user experiences.
              </p>
            </div>
            <div className="card fade-in" style={{ textAlign: 'center' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                overflow: 'hidden',
                border: '3px solid var(--accent-400)'
              }}>
                <img 
                  src="/img/team/3.jpg"
                  alt="Mike Rodriguez"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h4>Mike Rodriguez</h4>
              <p style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>Tech Lead</p>
              <p style={{ fontSize: '0.9rem' }}>
                Backend specialist with expertise in cloud architecture and DevOps practices.
              </p>
            </div>
            <div className="card fade-in" style={{ textAlign: 'center' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                overflow: 'hidden',
                border: '3px solid var(--accent-400)'
              }}>
                <img 
                  src="/img/team/4.jpg"
                  alt="Emma Wilson"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h4>Emma Wilson</h4>
              <p style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>Project Manager</p>
              <p style={{ fontSize: '0.9rem' }}>
                Agile expert ensuring projects are delivered on time and within budget.
              </p>
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
      <title>About Us - RubrixCode</title>
      <meta name="description" content="Learn about RubrixCode's story, values, and team. We are passionate developers and designers dedicated to creating exceptional digital experiences." />
      <meta name="keywords" content="about rubrixcode, software development team, company story, digital transformation" />
    </>
  );
};

export default AboutPage;
