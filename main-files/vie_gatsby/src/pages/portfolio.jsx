import React from "react";
import Navbar from "components/Navbar/navbar";
import RubrixPortfolio from "components/RubrixPortfolio/portfolio";
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

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="main-content">
      <RubrixPortfolio />
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
