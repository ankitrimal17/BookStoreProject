// JavaScript to dynamically calculate animation duration based on text length
const marqueeTextElements = document.querySelectorAll(".marquee-text");
marqueeTextElements.forEach((element) => {
  const text = element.textContent.trim();
  const textLength = text.length;
  const animationDuration = textLength * 0.5 + "s"; // Adjust the factor as needed
  element.style.setProperty("--animation-duration", animationDuration);
});

let toTop = document.getElementById("goToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    toTop.style.display = "grid";
  } else {
    toTop.style.display = "none";
  }
}
//Goes to top of the page when button is clicked
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
