import React from "react";
import Navbar from "components/Navbar/navbar";
import CrossroadsAdventure from "components/RubrixPortfolio/PortfolioDetails/CrossroadsAdventure";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";
import { navigate } from "gatsby";

const CrossroadsAdventurePage = () => {
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
          <CrossroadsAdventure />
        </div>
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Crossroads Adventure Website - RubrixCode Portfolio</title>
      <meta name="description" content="A premier luxury expedition specialist website for Pakistan's adventure travel, featuring trip management and booking system." />
    </>
  );
};

export default CrossroadsAdventurePage;

