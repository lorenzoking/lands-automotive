let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.hero-images');
    const totalSlides = slides.children.length;
    if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else {
        currentSlideIndex = index;
    }
    const offset = -currentSlideIndex * 100; // Move by 100% per slide
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function previousSlide() {
    showSlide(currentSlideIndex - 1);
}

// Initialize the carousel by showing the first slide
showSlide(currentSlideIndex);
