import React from "react";
import Navbar from "components/Navbar/navbar";
import Growphics from "components/RubrixPortfolio/PortfolioDetails/Growphics";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";
import { navigate } from "gatsby";

const GrowphicsPage = () => {
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
          <Growphics />
        </div>
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Growphics Professional Graphics Website - RubrixCode Portfolio</title>
      <meta name="description" content="High-quality professional graphics website specializing in logos, social media content, and complete brand overhauls with enhanced artistic styling." />
    </>
  );
};

export default GrowphicsPage;

