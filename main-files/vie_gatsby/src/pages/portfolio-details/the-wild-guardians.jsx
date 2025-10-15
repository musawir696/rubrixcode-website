import React from "react";
import Navbar from "components/Navbar/navbar";
import TheWildGuardians from "components/RubrixPortfolio/PortfolioDetails/TheWildGuardians";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";

const TheWildGuardiansPage = () => {
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
        <TheWildGuardians />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>The Wild Guardians NFT Collection - RubrixCode Portfolio</title>
      <meta name="description" content="Captivating NFT art collection on Ethereum blockchain featuring 30 mesmerizing characters with exclusive perks and revenue-sharing opportunities." />
    </>
  );
};

export default TheWildGuardiansPage;

