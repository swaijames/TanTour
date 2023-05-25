function toggleCollapse(collapseNum) {
    var content = document.getElementById('collapse-content-' + collapseNum);
    content.classList.toggle('show');
  }
var slides = document.getElementsByClassName('slide');
var currentSlideIndex = 0;

// Show the first slide
slides[currentSlideIndex].classList.add('active');

// Function to switch to the next slide
function nextSlide() {
  slides[currentSlideIndex].classList.remove('active');
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  slides[currentSlideIndex].classList.add('active');
}

// Automatically switch to the next slide every 3 seconds
setInterval(nextSlide, 3000);