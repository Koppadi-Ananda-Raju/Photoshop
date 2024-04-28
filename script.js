//herosections slider
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".buttons-prev-next-icon .prev");
  const nextButton = document.querySelector(".buttons-prev-next-icon .next");
  const slides = document.querySelector(".hero-carousel-slide");
  let currentSlide = 0;

  function showSlide(index) {
    currentSlide = index;
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}vw)`;
  }

  prevButton.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + 4) % 4;
    showSlide(currentSlide);
  });

  nextButton.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % 4;
    showSlide(currentSlide);
  });
});

//Testimonials slider

let currentIndex = 0;
const slides = document.querySelectorAll(".testimonials-slider > *");

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

function updateSlider() {
  const offset = -currentIndex * 50;
  document.querySelector(
    ".testimonials-slider"
  ).style.transform = `translateX(${offset}%)`;
}
