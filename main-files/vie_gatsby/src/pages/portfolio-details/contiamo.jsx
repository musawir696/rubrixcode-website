import React from "react";
import Navbar from "components/Navbar/navbar";
import Contiamo from "components/RubrixPortfolio/PortfolioDetails/Contiamo";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";

const ContiamoPage = () => {
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
        <Contiamo />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Contiamo Data Analytics & AI Website - RubrixCode Portfolio</title>
      <meta name="description" content="Enhanced key sections of Contiamo's website to improve user experience and performance, focusing on data analytics and AI solutions." />
    </>
  );
};

export default ContiamoPage;

