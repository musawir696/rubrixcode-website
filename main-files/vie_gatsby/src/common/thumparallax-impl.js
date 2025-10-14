// Actual implementation - only loaded in browser
import simpleParallax from "simple-parallax-js";

export const thumparallax = () => {
  const imageUp = document.getElementsByClassName("thumparallax");
  if (imageUp && imageUp.length > 0) {
    new simpleParallax(imageUp, {
      delay: 1,
      scale: 1.1,
    });
  }
};

export const thumparallaxDown = () => {
  const imageDown = document.getElementsByClassName("thumparallax-down");
  if (imageDown && imageDown.length > 0) {
    new simpleParallax(imageDown, {
      orientation: "down",
      delay: 1,
      scale: 1.1,
    });
  }
};

