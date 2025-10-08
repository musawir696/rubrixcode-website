import React from "react";
import Navbar from "components/Navbar/navbar";
import ContactForm from "components/Contact-form/contact-form";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";

const ContactPage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");

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

    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="main-content">
        <ContactForm />
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
