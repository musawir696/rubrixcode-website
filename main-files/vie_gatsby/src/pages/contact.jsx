import React from "react";
import Navbar from "components/Navbar/navbar";
import ContactForm from "components/Contact-form/contact-form";
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";

// Component version for use in main page (without navbar and footer)
export const RubrixContactSection = () => {
  return <ContactForm />;
};

const ContactPage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");

    var navbar = navbarRef.current;
    if (!navbar) return;

    // Check initial scroll position
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    // Throttled scroll handler for better performance
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="main-content">
        <ContactForm />
        <CallToAction />
        <Footer hideBGCOLOR />
            </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Contact Us - RubrixCode</title>
      <meta name="description" content="Get in touch with RubrixCode for your software development needs. We're ready to discuss your project and help bring your ideas to life." />
      <meta name="keywords" content="contact rubrixcode, software development consultation, project inquiry, get quote" />
    </>
  );
};

export default ContactPage;
