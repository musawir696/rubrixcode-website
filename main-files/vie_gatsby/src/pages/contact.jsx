import React from "react";
import RubrixNavbar from "components/RubrixNavbar/navbar";
import RubrixContact from "components/RubrixContact/contact";
import RubrixFooter from "components/RubrixFooter/footer";
import RubrixLayout from "layouts/RubrixLayout";

const ContactPage = () => {
  return (
    <RubrixLayout>
      <RubrixNavbar />
      
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '60vh', paddingTop: '100px' }}>
        <div className="container">
          <div className="text-center">
            <h1 className="hero-title fade-in">Get In Touch</h1>
            <p className="hero-subtitle fade-in" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Ready to start your next project? Let's discuss how we can help bring your ideas to life 
              with innovative software solutions.
            </p>
          </div>
        </div>
      </section>

      <RubrixContact />

      {/* FAQ Section */}
      <section className="section" style={{ background: 'var(--bg-800)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2>Frequently Asked Questions</h2>
            <p>Got questions? We've got answers. Here are some common questions we receive.</p>
          </div>

          <div className="grid grid-2">
            <div className="card fade-in">
              <h4 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                What services do you offer?
              </h4>
              <p style={{ fontSize: '0.9rem' }}>
                We offer comprehensive software development services including web applications, 
                mobile apps, UI/UX design, cloud solutions, and digital transformation consulting.
              </p>
            </div>
            <div className="card fade-in">
              <h4 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                How long does a typical project take?
              </h4>
              <p style={{ fontSize: '0.9rem' }}>
                Project timelines vary depending on complexity and scope. Simple websites can take 
                2-4 weeks, while complex applications may take 3-6 months. We provide detailed 
                timelines during our initial consultation.
              </p>
            </div>
            <div className="card fade-in">
              <h4 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                Do you work with startups?
              </h4>
              <p style={{ fontSize: '0.9rem' }}>
                Absolutely! We love working with startups and have experience helping them build 
                MVPs, scale their applications, and navigate the challenges of rapid growth.
              </p>
            </div>
            <div className="card fade-in">
              <h4 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                What technologies do you use?
              </h4>
              <p style={{ fontSize: '0.9rem' }}>
                We use modern technologies including React, Node.js, Python, AWS, Docker, and more. 
                We choose the best technology stack for each project based on requirements and goals.
              </p>
            </div>
            <div className="card fade-in">
              <h4 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                Do you provide ongoing support?
              </h4>
              <p style={{ fontSize: '0.9rem' }}>
                Yes, we offer comprehensive support and maintenance services to ensure your 
                applications continue to perform optimally after launch.
              </p>
            </div>
            <div className="card fade-in">
              <h4 style={{ color: 'var(--accent-400)', marginBottom: '1rem' }}>
                How do you handle project communication?
              </h4>
              <p style={{ fontSize: '0.9rem' }}>
                We maintain regular communication through scheduled meetings, progress reports, 
                and collaborative tools. You'll always know what's happening with your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <div className="card" style={{ 
              background: 'linear-gradient(135deg, var(--bg-800) 0%, var(--bg-700) 100%)',
              border: '1px solid var(--accent-400)',
              padding: '3rem'
            }}>
              <h2 style={{ marginBottom: '1rem' }}>Ready to Get Started?</h2>
              <p style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                Let's discuss your project and see how we can help you achieve your goals. 
                We're here to answer any questions you might have.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#contact" className="btn-primary">
                  Start Your Project
                </a>
                <a href="mailto:hello@rubrixcode.com" className="btn-secondary">
                  Email Us Directly
                </a>
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
      <title>Contact Us - RubrixCode</title>
      <meta name="description" content="Get in touch with RubrixCode for your software development needs. We're ready to discuss your project and help bring your ideas to life." />
      <meta name="keywords" content="contact rubrixcode, software development consultation, project inquiry, get quote" />
    </>
  );
};

export default ContactPage;
