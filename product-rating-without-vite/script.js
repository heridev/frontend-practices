// import { helloWorld } from "./utils.mjs";

// helloWorld();

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelectorAll('.star').forEach(element => {
    element.addEventListener("mouseenter", function (event) {
      event.currentTarget.textContent = '★';
    })
    element.addEventListener("mouseleave", function (event) {
      event.currentTarget.textContent = '☆';
    })
  })
})
