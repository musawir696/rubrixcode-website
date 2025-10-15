import React from "react";
import Navbar from "components/Navbar/navbar";
import Brainwave from "components/RubrixPortfolio/PortfolioDetails/Brainwave";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";

const BrainwavePage = () => {
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
        <Brainwave />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Brainwave AI Company Website - RubrixCode Portfolio</title>
      <meta name="description" content="AI-based company website offering cutting-edge tools and solutions with dynamic animations, hover effects, and parallax features using GSAP." />
    </>
  );
};

export default BrainwavePage;

