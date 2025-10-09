import React from "react";
import Navbar from "components/Navbar/navbar";
import HoyaKerry from "components/RubrixPortfolio/PortfolioDetails/HoyaKerry";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";
import { navigate } from "gatsby";

const HoyaKerryPage = () => {
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
        <HoyaKerry />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Hoya Kerry Activewear Website - RubrixCode Portfolio</title>
      <meta name="description" content="Environmentally-conscious fitness and wellbeing lifestyle brand with e-commerce platform, NFT collection, and sustainable activewear products." />
    </>
  );
};

export default HoyaKerryPage;

