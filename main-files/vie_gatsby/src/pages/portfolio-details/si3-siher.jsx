import React from "react";
import Navbar from "components/Navbar/navbar";
import Si3SiHer from "components/RubrixPortfolio/PortfolioDetails/Si3SiHer";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";
import { navigate } from "gatsby";

const Si3SiHerPage = () => {
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
        <Si3SiHer />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Si3 & Si Her Web3 Platform - RubrixCode Portfolio</title>
      <meta name="description" content="A comprehensive Web3 platform creating accessible pathways for diverse voices in the new economy with decentralized infrastructure." />
    </>
  );
};

export default Si3SiHerPage;

