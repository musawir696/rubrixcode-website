import React from "react";
import Navbar from "components/Navbar/navbar";
import Brainwave from "components/RubrixPortfolio/PortfolioDetails/Brainwave";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";
import { navigate } from "gatsby";

const BrainwavePage = () => {
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

