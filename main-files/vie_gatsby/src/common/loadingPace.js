const loadingPace = () => {
  // Check if Pace is available
  if (typeof window === 'undefined' || typeof Pace === 'undefined') {
    // Fallback: Hide preloader after a short delay
    setTimeout(() => {
      const preloader = document.querySelector("#preloader");
      const loading = document.querySelector(".loading");
      if (preloader) preloader.classList.add("isdone");
      if (loading) loading.classList.add("isdone");
    }, 1000);
    return;
  }
 
  Pace.on("start", function () {
    const preloader = document.querySelector("#preloader");
    const loading = document.querySelector(".loading");
    if (preloader) preloader.classList.remove("isdone");
    if (loading) loading.classList.remove("isdone");
  });
  
  Pace.on("done", function () {
    const preloader = document.querySelector("#preloader");
    const loading = document.querySelector(".loading");
    if (preloader) preloader.classList.add("isdone");
    if (loading) loading.classList.add("isdone");
  });

  const body = document.querySelector("body");
  if (body && body.classList.contains("pace-done")) {
    const preloader = document.querySelector("#preloader");
    const loading = document.querySelector(".loading");
    if (preloader) preloader.classList.add("isdone");
    if (loading) loading.classList.add("isdone");
  }

  // Use load event with passive listener
  window.addEventListener("load", () => {
    const preloader = document.querySelector("#preloader");
    const loading = document.querySelector(".loading");
    const paceRunning = document.querySelector('.pace-running');
    
    if (preloader) preloader.classList.add("isdone");
    if (loading) loading.classList.add("isdone");
    if (paceRunning) paceRunning.classList.remove('pace-running');
  }, { passive: true, once: true });
};

export default loadingPace;
