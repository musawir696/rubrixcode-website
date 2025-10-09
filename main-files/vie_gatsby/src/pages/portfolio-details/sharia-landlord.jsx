import React from "react";
import Navbar from "components/Navbar/navbar";
import ShariaLandlord from "components/RubrixPortfolio/PortfolioDetails/ShariaLandlord";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";
import { navigate } from "gatsby";

const ShariaLandlordPage = () => {
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
        <ShariaLandlord />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Sharia Landlord NFT Collection - RubrixCode Portfolio</title>
      <meta name="description" content="Utility-based NFT collection offering capital gains and regular dividends from managed real estate and sharing house businesses with stable investment value." />
    </>
  );
};

export default ShariaLandlordPage;

