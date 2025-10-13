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
    if (!navbar) return;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
          } else {
            navbar.classList.remove("nav-scroll");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="main-content" style={{ paddingTop: '100px' }}>
        <Perplexa />
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

