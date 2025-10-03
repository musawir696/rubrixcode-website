import React from "react";
import RubrixNavbar from "components/RubrixNavbar/navbar";
import RubrixHero from "components/RubrixHero/hero";
import RubrixAbout from "components/RubrixAbout/about";
import RubrixPortfolio from "components/RubrixPortfolio/portfolio";
import RubrixContact from "components/RubrixContact/contact";
import RubrixFooter from "components/RubrixFooter/footer";
import RubrixLayout from "layouts/RubrixLayout";

const HomePage = () => {
  return (
    <RubrixLayout>
      <RubrixNavbar />
      <RubrixHero />
      <RubrixAbout />
      <RubrixPortfolio />
      <RubrixContact />
      <RubrixFooter />
    </RubrixLayout>
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