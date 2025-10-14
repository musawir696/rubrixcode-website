// SSR-safe wrapper for thumparallax
// This prevents the module from loading during server-side rendering

export const thumparallax = () => {
  if (typeof window === "undefined") return;
  
  // Only require the actual implementation in the browser
  const { thumparallax: thumparallaxImpl } = require("./thumparallax-impl");
  thumparallaxImpl();
};

export const thumparallaxDown = () => {
  if (typeof window === "undefined") return;
  
  // Only require the actual implementation in the browser
  const { thumparallaxDown: thumparallaxDownImpl } = require("./thumparallax-impl");
  thumparallaxDownImpl();
};

