import React from "react";
import Navbar from "components/Navbar/navbar";
import MiuraProtocol from "components/RubrixPortfolio/PortfolioDetails/MiuraProtocol";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";
import { navigate } from "gatsby";

const MiuraProtocolPage = () => {
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
        <MiuraProtocol />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Miura Protocol DeFi Platform - RubrixCode Portfolio</title>
      <meta name="description" content="Decentralized non-custodial liquidity market protocol for borrowing assets using NFTs as collateral with Solana blockchain integration." />
    </>
  );
};

export default MiuraProtocolPage;

