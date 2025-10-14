import React from "react";
import Navbar from "components/Navbar/navbar";
import IntroWithSlider from "components/Intro-with-slider/intro-with-slider";
import Numbers from "components/Numbers/numbers";
import Blogs2 from "components/blogs/Blogs2/blogs2";
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";
import Services4 from "components/Services4/services4";
import AboutUs4 from "components/About-us4/about-us4";  
import WorksStyle3 from "components/Works-style3/works-style3";
import FullTestimonials from "components/Full-testimonials/full-testimonials";
import DarkTheme from "layouts/Dark";

const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    setTimeout(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);

    var navbar = navbarRef.current;
    if (!navbar) return;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <Services4 serviceMB50 />
        <AboutUs4 />
        <Numbers />
        <WorksStyle3 />
        <FullTestimonials />
        <Blogs2 />
        <CallToAction img="/img/patrn1.png" />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Vie - Home 6 Dark</title>
    </>
  )
}

export default Homepage1;
