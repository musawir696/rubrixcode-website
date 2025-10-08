import React from "react";
import Navbar from "components/Navbar/navbar";
import RubrixHero from "components/RubrixHero/hero";
import { AboutSections } from "./about";
import { RubrixPortfolioSection } from "./portfolio";
import { RubrixContactSection } from "./contact";
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";

const HomePage = () => {
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
      <RubrixHero />
      <div className="main-content" id="main-content">
        {/* About Page Content */}
        <AboutSections />
        {/* Portfolio Page Content */}
        <RubrixPortfolioSection />
        {/* Contact Page Content */}
        <RubrixContactSection />
        <CallToAction />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>RubrixCode - Crafting Digital Excellence</title>
      <meta name="description" content="RubrixCode is a software development company specializing in web applications, mobile apps, and digital solutions. We transform ideas into reality with cutting-edge technology." />
      <meta name="keywords" content="software development, web development, mobile apps, UI/UX design, cloud solutions, digital transformation" />
      <meta property="og:title" content="RubrixCode - Crafting Digital Excellence" />
      <meta property="og:description" content="We build innovative software solutions that transform ideas into reality. From web applications to mobile apps, we deliver exceptional digital experiences." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="RubrixCode - Crafting Digital Excellence" />
      <meta name="twitter:description" content="We build innovative software solutions that transform ideas into reality." />
      <link rel="canonical" href="https://rubrixcode.com" />
    </>
  );
};

export default HomePage;