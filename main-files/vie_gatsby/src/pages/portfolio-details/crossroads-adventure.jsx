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
        <CrossroadsAdventure />
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

