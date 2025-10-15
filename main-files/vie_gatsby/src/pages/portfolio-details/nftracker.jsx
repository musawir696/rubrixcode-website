import React from "react";
import Navbar from "components/Navbar/navbar";
import NFTracker from "components/RubrixPortfolio/PortfolioDetails/NFTracker";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";

const NFTrackerPage = () => {
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
        <NFTracker />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>NFTracker Fraud Detection Platform - RubrixCode Portfolio</title>
      <meta name="description" content="Innovative tool for real-time NFT fraud detection and blockchain transaction analysis with Auth0 integration and secure login functionality." />
    </>
  );
};

export default NFTrackerPage;

