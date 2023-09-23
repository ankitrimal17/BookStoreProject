// JavaScript to dynamically calculate animation duration based on text length
const marqueeTextElements = document.querySelectorAll('.marquee-text');
marqueeTextElements.forEach((element) => {
    const text = element.textContent.trim();
    const textLength = text.length;
    const animationDuration = textLength * 0.5 + 's'; // Adjust the factor as needed
    element.style.setProperty('--animation-duration', animationDuration);
});