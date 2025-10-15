// Client-side optimizations

// Import CSS files in consistent order to avoid mini-css-extract-plugin warnings
// Order matters: global styles first, then third-party libraries, then component styles
import "./src/styles/critical.css";
import "./src/styles/main.css";
import "./src/styles/preloader.css";
import "./src/styles/rubrixcode.css";

// Third-party library styles - Order is critical!
// Swiper must come BEFORE Slick to avoid conflicts
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/mousewheel";

// Slick Carousel after Swiper
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Other third-party libraries
import "react-modal-video/css/modal-video.css";

// Component styles
import "./src/components/Call-to-action/call-to-action.css";
import "./src/components/Contact-form/contact-form.css";
import "./src/components/RubrixPortfolio/portfolio.css";

export const onRouteUpdate = ({ location }) => {
  // Scroll to top on route change unless using anchor links
  if (!location.hash) {
    window.scrollTo(0, 0);
  }
};

