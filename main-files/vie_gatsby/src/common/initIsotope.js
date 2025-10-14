const initIsotope = () => {
  if (typeof window === "undefined") return;
  
  // Check if Isotope is available (it's loaded via external script)
  if (typeof window.Isotope === "undefined") {
    console.warn("Isotope is not loaded");
    return;
  }
  
  const Isotope = window.Isotope;
  const matchesSelector = window.matchesSelector || window.Element.prototype.matches || window.Element.prototype.matchesSelector;
  
  var grid = document.querySelectorAll(".gallery");
  var iso;
  if (grid.length >= 1) {
    grid.forEach((item) => {
      iso = new Isotope(item, {
        itemSelector: ".items",
      });
    });
  }

  var gridMons = document.querySelectorAll(".gallery-mons");
  if (gridMons.length >= 1) {
    gridMons.forEach((item) => {
      iso = new Isotope(item, {
        itemSelector: ".items",
        masonry: {
          columnWidth: ".width2",
        },
      });
    });
  }

  var filtersElem = document.querySelector(".filtering");
  if (filtersElem) {
    filtersElem.addEventListener("click", function (event) {
      if (!event.target.matches || !event.target.matches("span")) {
        return;
      }
      var filterValue = event.target.getAttribute("data-filter");
      if (iso) iso.arrange({ filter: filterValue });
    });
    var buttonGroups = document.querySelectorAll(".filtering");
    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }
    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener("click", function (event) {
        if (!event.target.matches || !event.target.matches("span")) {
          return;
        }
        buttonGroup.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
      });
    }
  }
};

export default initIsotope