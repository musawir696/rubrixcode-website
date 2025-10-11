import React from 'react'

import { Link } from 'gatsby'
import './call-to-action.css'

const CallToAction = ({img}) => {
    return (
      <section className="call-action section-padding call-action-section">
        {/* 3D Background Effect */}
        <div className="cta-background-effect"></div>
        
        {/* 3D Geometric Shapes */}
        <div className="cta-shape-1"></div>
        <div className="cta-shape-2"></div>
        
        <div className="container cta-container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="content sm-mb30">
                <h6 className="cta-heading">
                  Join Our Team
                </h6>
                <h2 className="cta-title">
                  Become a <br /> Digital Builder!
                </h2>
              </div>
              
              {/* Buttons Section - Below Text */}
              <div className="cta-buttons-container">
                <Link to={`/contact`} className="cta-button">
                  <span>Join Us</span>
                  <span className="cta-button-arrow">→</span>
                </Link>
                
                <Link to={`/contact`} className="cta-button">
                  <span>Connect</span>
                  <span className="cta-button-arrow">→</span>
                </Link>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 valign">
              <div className="cta-logo-container">
                <img 
                  src="/img/logo2.jpg" 
                  alt="RubrixCode Logo" 
                  className="cta-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default CallToAction