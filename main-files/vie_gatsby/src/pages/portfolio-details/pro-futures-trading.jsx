import React from "react";
import Navbar from "components/Navbar/navbar";
import ProFuturesTrading from "components/RubrixPortfolio/PortfolioDetails/ProFuturesTrading";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";
import { navigate } from "gatsby";

const ProFuturesTradingPage = () => {
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
        <div className="container" style={{ paddingTop: '100px' }}>
          <button 
            onClick={() => navigate(-1)}
            type="button"
            className="btn-secondary"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              marginBottom: '2rem'
            }}
          >
            ← Back
          </button>
          <ProFuturesTrading />
        </div>
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Pro Futures Trading Platform - RubrixCode Portfolio</title>
      <meta name="description" content="Comprehensive platform providing top-tier tools and resources for futures traders with responsive design and SEO optimization." />
    </>
  );
};

export default ProFuturesTradingPage;

