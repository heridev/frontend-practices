export function addRateStarListeners() {
  const allStarElements = document.querySelectorAll('.star');

  function persistSelection(activeIndex) {
    allStarElements.forEach((element, index) => {
      if (index <= activeIndex) {
        element.dataset.rate = true;
        element.textContent = '★';
      } else {
        element.dataset.rate = false;
        element.textContent = '☆';
      }
    })
  }

  function highlightStars(activeIndex) {
    allStarElements.forEach((element, index) => {
      if (index <= activeIndex) {
        element.textContent = '★';
      }
    });
  }

  function resetHighlights() {
    allStarElements.forEach((element) => {
      if (element.dataset.rate) return;

      element.textContent = '☆';
    });
  }

  allStarElements.forEach((element, index) => {
    element.addEventListener("mouseenter", function (event) {
      highlightStars(index);
    });
    element.addEventListener("mouseleave", function (event) {
      resetHighlights();
    });
    element.addEventListener("click", function (event) {
      persistSelection(index);
    });
  })
}
