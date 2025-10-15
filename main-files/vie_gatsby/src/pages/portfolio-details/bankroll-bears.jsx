import React from "react";
import Navbar from "components/Navbar/navbar";
import BankRollBears from "components/RubrixPortfolio/PortfolioDetails/BankRollBears";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";

const BankRollBearsPage = () => {
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
        <BankRollBears />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>The Bankroll Bear Society - RubrixCode Portfolio</title>
      <meta name="description" content="NFT collection of 5,000 unique bears with real-world utilities, staking, giveaways, token usage, and environmental impact goals." />
    </>
  );
};

export default BankRollBearsPage;

