var opacity = 0;
var intervalID = 0;

export const fadeIn = (el, time) => {
  if (typeof window === "undefined" || !el) return;
  
  intervalID = setInterval(() => {
    opacity = Number(window.getComputedStyle(el).getPropertyValue("opacity"));
    if (opacity < 1) {
      opacity = opacity + 0.1;
      el.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, time);
};

export const fadeOut = (el, time) => {
  if (typeof window === "undefined" || !el) return;
  
  intervalID = setInterval(() => {
    opacity = Number(window.getComputedStyle(el).getPropertyValue("opacity"));
    if (opacity > 0) {
      opacity = opacity - 0.1;
      el.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, time);
};
