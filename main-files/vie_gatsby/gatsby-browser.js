// Client-side optimizations

export const onRouteUpdate = ({ location }) => {
  // Scroll to top on route change unless using anchor links
  if (!location.hash) {
    window.scrollTo(0, 0);
  }
};

