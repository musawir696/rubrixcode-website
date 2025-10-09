import React from 'react'
import Split from '../Split'
import { Link } from 'gatsby'

const CallToAction = ({img}) => {
    return (
      <section
        className="call-action section-padding"
        style={{ 
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 25%, #2d1b4e 50%, #1a0a2e 75%, #0a0a0a 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* 3D Background Effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(120, 110, 204, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(138, 43, 226, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(75, 0, 130, 0.1) 0%, transparent 40%)
          `,
          zIndex: 0
        }}></div>
        
        {/* 3D Geometric Shapes */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'linear-gradient(135deg, rgba(120, 110, 204, 0.1), rgba(138, 43, 226, 0.1))',
          borderRadius: '50%',
          filter: 'blur(60px)',
          transform: 'translate3d(0, 0, 0)',
          animation: 'float 6s ease-in-out infinite',
          zIndex: 0
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          width: '250px',
          height: '250px',
          background: 'linear-gradient(225deg, rgba(75, 0, 130, 0.15), rgba(138, 43, 226, 0.1))',
          borderRadius: '50%',
          filter: 'blur(50px)',
          transform: 'translate3d(0, 0, 0)',
          animation: 'float 8s ease-in-out infinite reverse',
          zIndex: 0
        }}></div>
        
        <style>
          {`
            @keyframes float {
              0%, 100% {
                transform: translate3d(0, 0, 0);
              }
              50% {
                transform: translate3d(20px, -20px, 0);
              }
            }
          `}
        </style>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="content sm-mb30">
                <h6 style={{ color: 'white', marginBottom: '1rem' }}>
                  Join Our Team
                </h6>
                <h2 style={{ color: 'white' }}>
                  Become a <br /> Digital Builder!
                </h2>
              </div>
              
              {/* Buttons Section - Below Text */}
              <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link
                  to={`/contact`}
                  className="cta-button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 24px',
                    border: '2px solid white',
                    borderRadius: '50px',
                    background: 'transparent',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    minWidth: '150px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = 'black';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  <span>Join Us</span>
                  <span style={{ marginLeft: '10px' }}>→</span>
                </Link>
                
                <Link
                  to={`/contact`}
                  className="cta-button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 24px',
                    border: '2px solid white',
                    borderRadius: '50px',
                    background: 'transparent',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    minWidth: '150px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = 'black';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  <span>Connect</span>
                  <span style={{ marginLeft: '10px' }}>→</span>
                </Link>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 valign">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src="/img/logo2.jpg" 
                  alt="RubrixCode Logo" 
                  style={{ 
                    maxWidth: '180px', 
                    width: '100%',
                    height: 'auto'
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default CallToAction