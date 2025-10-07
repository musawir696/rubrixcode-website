import React from 'react'

const PagesHeader = ({ title, subtitle }) => {
  // Determine content based on current page
  const getPageContent = () => {
    if (typeof window === 'undefined') {
      return { title: 'RubrixCode', subtitle: '' };
    }
    
    const path = window.location.pathname;
    
    if (path.includes('about')) {
      return {
        title: 'About RubrixCode',
        subtitle: 'A passionate team of developers and designers dedicated to creating innovative digital solutions that transform ideas into reality.'
      };
    } else if (path.includes('portfolio')) {
      return {
        title: 'Our Portfolio',
        subtitle: 'Explore our recent projects and see how we\'ve helped businesses achieve their digital goals with innovative software solutions.'
      };
    } else if (path.includes('contact')) {
      return {
        title: 'Get In Touch',
        subtitle: 'Ready to start your next project? Let\'s discuss how we can help bring your ideas to life.'
      };
    }
    
    return { title: 'RubrixCode', subtitle: 'Crafting Digital Excellence' };
  };

  const content = getPageContent();
  const displayTitle = title || content.title;
  const displaySubtitle = subtitle || content.subtitle;

  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont mt-100 mb-50 text-center">
              <h1 className="color-font fw-700 hero-title" style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #e0f2fe 25%, var(--accent-400) 50%, var(--accent-300) 75%, #ffffff 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: displaySubtitle ? '1.5rem' : '0'
              }}>
                {displayTitle}
              </h1>
              {displaySubtitle && (
                <p style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}>
                  {displaySubtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="half sub-bg">
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;