import React from "react";
import Navbar from "components/Navbar/navbar";
import Perplexa from "components/RubrixPortfolio/PortfolioDetails/Perplexa";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";
import { navigate } from "gatsby";

const PerplexaPage = () => {
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
          <Perplexa />
        </div>
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Perplexa Digital Agency Website - RubrixCode Portfolio</title>
      <meta name="description" content="Leading digital marketing agency website offering business growth, marketing advice, and finance consulting services with comprehensive React development." />
    </>
  );
};

export default PerplexaPage;

