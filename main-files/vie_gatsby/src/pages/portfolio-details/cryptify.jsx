import React from "react";
import Navbar from "components/Navbar/navbar";
import Cryptify from "components/RubrixPortfolio/PortfolioDetails/Cryptify";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";

const CryptifyPage = () => {
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
        <Cryptify />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Cryptify Crypto Landing Page - RubrixCode Portfolio</title>
      <meta name="description" content="High-converting lead-generation landing page for crypto industry with professional design, multi-step forms, and optimized data collection." />
    </>
  );
};

export default CryptifyPage;

