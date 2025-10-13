const mouseEffect = () => {
  // Only enable custom cursor on desktop devices
  const isDesktop = window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;
  
  if (!isDesktop) {
    return; // Skip custom cursor on mobile/tablet
  }

  function mousecursor() {
    const cursorInner = document.querySelector(".cursor-inner");
    const cursorOuter = document.querySelector(".cursor-outer");
    
    if (!cursorInner || !cursorOuter) return;

    let mouseX = 0;
    let mouseY = 0;
    let isAnimating = false;

    // Optimized mouse move with requestAnimationFrame
    const updateCursorPosition = () => {
      cursorOuter.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      cursorInner.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      isAnimating = false;
    };

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!isAnimating) {
        isAnimating = true;
        requestAnimationFrame(updateCursorPosition);
      }
    }, { passive: true });

    // Use event delegation for better performance
    document.addEventListener('mouseover', (e) => {
      if (e.target.matches('a, button, .cursor-pointer')) {
        cursorInner.classList.add("cursor-hover");
        cursorOuter.classList.add("cursor-hover");
      }
    }, { passive: true });

    document.addEventListener('mouseout', (e) => {
      if (e.target.matches('a, button, .cursor-pointer')) {
        cursorInner.classList.remove("cursor-hover");
        cursorOuter.classList.remove("cursor-hover");
      }
    }, { passive: true });

    cursorInner.style.visibility = "visible";
    cursorOuter.style.visibility = "visible";
  }
  
  mousecursor();
};

export default mouseEffect;
