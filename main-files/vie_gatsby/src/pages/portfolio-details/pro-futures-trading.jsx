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
        <ProFuturesTrading />
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

