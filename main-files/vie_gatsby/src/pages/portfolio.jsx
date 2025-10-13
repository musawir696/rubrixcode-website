import React from "react";
import Navbar from "components/Navbar/navbar";
import RubrixPortfolio from "components/RubrixPortfolio/portfolio";
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";

// Component version for use in main page (without navbar and footer)
export const RubrixPortfolioSection = () => {
  return <RubrixPortfolio />;
};

const PortfolioPage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (!navbar) return;

    // Check initial scroll position
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    
    // Throttled scroll handler for better performance
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="main-content">
      <RubrixPortfolio />
        <CallToAction />
        <Footer />
          </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Portfolio - RubrixCode</title>
      <meta name="description" content="Explore RubrixCode's portfolio of successful projects. See how we've helped businesses achieve their digital goals with innovative software solutions." />
      <meta name="keywords" content="rubrixcode portfolio, software projects, web development, mobile apps, case studies" />
    </>
  );
};

export default PortfolioPage;
