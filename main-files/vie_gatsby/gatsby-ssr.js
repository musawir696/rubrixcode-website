import React from "react";

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  // Meta Tags
  <meta key="httpEquiv" httpEquiv="X-UA-Compatible" content="IE=edge" />,
  <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />,
  <meta key="keywords" name="keywords" content="software development, web development, mobile apps, UI/UX design, cloud solutions" />,
  <meta key="description" name="description" content="RubrixCode - Crafting Digital Excellence. We build innovative software solutions." />,
  <meta key="author" name="author" content="RubrixCode" />,
  
  // DNS Prefetch and Preconnect for faster font loading
  <link key="dns-prefetch-google" rel="dns-prefetch" href="https://fonts.googleapis.com" />,
  <link key="dns-prefetch-gstatic" rel="dns-prefetch" href="https://fonts.gstatic.com" />,
  <link key="preconnect-google" rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />,
  <link key="preconnect-gstatic" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
  
  // Google Fonts with font-display: swap for better performance
  <link 
    key="Poppins" 
    rel="stylesheet" 
    href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap" 
    media="print" 
    onLoad="this.media='all'"
  />,
  <link 
    key="Montserrat" 
    rel="stylesheet" 
    href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700&display=swap" 
    media="print" 
    onLoad="this.media='all'"
  />,
  <link 
    key="Inter" 
    rel="stylesheet" 
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
    media="print" 
    onLoad="this.media='all'"
  />,
  
  // Preload critical CSS
  <link key="preload-dark" rel="preload" href="/css/dark.css" as="style" />,
  <link key="preload-ionicons" rel="preload" href="/css/ionicons.min.css" as="style" />,
  
  // Styles - critical CSS loaded immediately
  <link key="ionicons" rel="stylesheet" href="/css/ionicons.min.css" />,
  <link key="styles-dark" rel="stylesheet" href="/css/dark.css" />,
  
  // Icon
  <link key="icon" rel="shortcut icon" href="/img/favicon.ico" title="Favicon" sizes="16x16" />,
]

const BodyComponents = [
  // Defer non-critical scripts for better performance
  <script key="isotope" src="/js/isotope.pkgd.min.js" defer />,
  <script key="splitting" src="/js/splitting.min.js" defer />,
  <script key="simpleParallax" src="/js/simpleParallax.min.js" defer />,
  <script key="wow" src="/js/wow.min.js" defer />,
]

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes, setPostBodyComponents }) => {
  setHtmlAttributes(HtmlAttributes);
  setHeadComponents(HeadComponents);
  setPostBodyComponents(BodyComponents);
}
