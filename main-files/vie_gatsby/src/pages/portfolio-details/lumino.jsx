import React from "react";
import Navbar from "components/Navbar/navbar";
import Lumino from "components/RubrixPortfolio/PortfolioDetails/Lumino";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";

const LuminoPage = () => {
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
        <Lumino />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Lumino Digital Agency Website - RubrixCode Portfolio</title>
      <meta name="description" content="Digital agency site delivering creative, tech-savvy brand experiences with interactive content and full responsiveness." />
    </>
  );
};

export default LuminoPage;

