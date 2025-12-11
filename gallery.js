let slideIndex = 1;
let slidesLeft;
let slidesRight;
let slideTimer;

// Function to initialize the slideshows
function initSlideshows() {
    slidesLeft = document.querySelectorAll('#slideshow-left .slide');
    slidesRight = document.querySelectorAll('#slideshow-right .slide');
    if (slidesLeft.length > 0 && slidesRight.length > 0) {
        showSlides(slideIndex);
        startAutoSlide();
    }
}

// Function to move slides forward/backward
function plusSlides(n) {
    // Clear the timer, move the slide, and restart the timer
    clearTimeout(slideTimer); 
    showSlides(slideIndex += n);
    startAutoSlide();
}

// Function to display the correct slide
function showSlides(n) {
    let i;
    
    // Check for bounds (looping)
    if (n > slidesLeft.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slidesLeft.length}
    
    // Hide all slides
    for (i = 0; i < slidesLeft.length; i++) {
        slidesLeft[i].style.opacity = 0;
        slidesRight[i].style.opacity = 0;
    }
    
    // Show the current slide
    slidesLeft[slideIndex-1].style.opacity = 1;
    slidesRight[slideIndex-1].style.opacity = 1;
}

// Function to start the automatic slide
function startAutoSlide() {
    // Clear any existing timer to prevent doubling
    clearTimeout(slideTimer);
    
    // Set a new timer to move to the next slide every 10 seconds (10000ms)
    slideTimer = setTimeout(function() {
        plusSlides(1);
    }, 10000); 
}

// Initialize the slideshow when the page loads
window.onload = initSlideshows;