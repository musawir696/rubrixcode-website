const scrollToTop = () => {
  // Check if progress-wrap element exists before proceeding
  const progressWrap = document.querySelector(".progress-wrap");
  if (!progressWrap) {
    // If progress-wrap doesn't exist, just return without doing anything
    return;
  }

  let progressPath = document.querySelector(".progress-wrap path");
  if (!progressPath) {
    // If progress path doesn't exist, just return without doing anything
    return;
  }

  let pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  
  const updateProgress = function () {
    // Check if progressPath still exists before accessing its properties
    if (!progressPath) {
      return;
    }
    let scroll = window.pageYOffset;
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  
  updateProgress();
  window.addEventListener("scroll", updateProgress);
  
  let offset = 150;
  window.addEventListener("scroll", function () {
    // Check if progressWrap still exists before accessing its properties
    if (!progressWrap) {
      return;
    }
    if (window.pageYOffset > offset) {
      progressWrap.classList.add("active-progress");
    } else {
      progressWrap.classList.remove("active-progress");
    }
  });
  
  progressWrap.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  });
};

export default scrollToTop;
