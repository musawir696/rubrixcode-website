import React from "react";
import Navbar from "components/Navbar/navbar";
import PagesHeader from "components/Pages-header";
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
      <PagesHeader />
      <div className="main-content">
        <ContactForm />
        <div className="map" id="ieatmaps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6010.126439563913!2d-100.75478744312291!3d41.13314584948978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2z2KfZhNmI2YTYp9mK2KfYqiDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1644259110384!5m2!1sar!2seg"
            loading="lazy"
          ></iframe>
        </div>
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
