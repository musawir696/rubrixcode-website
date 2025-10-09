import React from "react";
import Navbar from "components/Navbar/navbar";
import SwedenRelocators from "components/RubrixPortfolio/PortfolioDetails/SwedenRelocators";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";
import { navigate } from "gatsby";

const SwedenRelocatorsPage = () => {
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
        <SwedenRelocators />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Sweden Relocators AB Portal - RubrixCode Portfolio</title>
      <meta name="description" content="A comprehensive relocation and mobility solutions portal for Nordic countries with real-time tracking and multi-language support." />
    </>
  );
};

export default SwedenRelocatorsPage;

