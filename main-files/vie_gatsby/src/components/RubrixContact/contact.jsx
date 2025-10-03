import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const RubrixContact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animate form elements
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: 'hello@rubrixcode.com',
      link: 'mailto:hello@rubrixcode.com'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      details: 'San Francisco, CA',
      link: '#'
    }
  ];

  return (
    <section className="section" ref={sectionRef} id="contact">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="fade-in">Get In Touch</h2>
          <p className="fade-in">
            Ready to start your next project? Let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
          {/* Contact Form */}
          <div className="fade-in" ref={formRef}>
            <div className="card" style={{ padding: '3rem' }}>
              <h3 style={{ marginBottom: '2rem', color: 'var(--accent-400)' }}>
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    className="form-control"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    className="form-control"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="fade-in">
            <div className="card" style={{ padding: '3rem' }}>
              <h3 style={{ marginBottom: '2rem', color: 'var(--accent-400)' }}>
                Contact Information
              </h3>
              
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  We're always excited to hear about new projects and opportunities. 
                  Whether you have a clear vision or just an idea, we'd love to discuss 
                  how we can help you achieve your goals.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {contactInfo.map((info, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                      fontSize: '1.5rem', 
                      width: '50px', 
                      height: '50px',
                      background: 'var(--bg-600)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 style={{ 
                        margin: '0 0 0.25rem 0', 
                        color: 'var(--text-primary)',
                        fontSize: '1rem'
                      }}>
                        {info.title}
                      </h4>
                      <a 
                        href={info.link}
                        style={{ 
                          color: 'var(--accent-400)', 
                          textDecoration: 'none',
                          fontSize: '0.9rem'
                        }}
                      >
                        {info.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ 
                marginTop: '2rem', 
                padding: '1.5rem',
                background: 'var(--bg-600)',
                borderRadius: '10px',
                border: '1px solid var(--bg-500)'
              }}>
                <h4 style={{ 
                  color: 'var(--accent-400)', 
                  marginBottom: '1rem',
                  fontSize: '1rem'
                }}>
                  Response Time
                </h4>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.9rem',
                  margin: '0'
                }}>
                  We typically respond to all inquiries within 24 hours. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RubrixContact;
