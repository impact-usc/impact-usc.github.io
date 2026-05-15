const header = document.querySelector("[data-header]");
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".nav-links a");

toggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const carousel = document.querySelector("[data-hero-carousel]");
const slides = carousel ? Array.from(carousel.querySelectorAll("img")) : [];
const dots = Array.from(document.querySelectorAll(".hero-carousel-dots button"));
let activeSlide = -1;
let carouselTimer;

const setActiveSlide = (nextSlide) => {
  slides[activeSlide]?.classList.remove("is-active");
  slides[activeSlide]?.setAttribute("aria-hidden", "true");
  dots[activeSlide]?.classList.remove("is-active");
  dots[activeSlide]?.removeAttribute("aria-current");

  activeSlide = nextSlide;

  slides[activeSlide]?.classList.add("is-active");
  slides[activeSlide]?.setAttribute("aria-hidden", "false");
  dots[activeSlide]?.classList.add("is-active");
  dots[activeSlide]?.setAttribute("aria-current", "true");
};

const randomSlide = () => {
  if (slides.length <= 1) {
    return 0;
  }

  let nextSlide = activeSlide;
  while (nextSlide === activeSlide) {
    nextSlide = Math.floor(Math.random() * slides.length);
  }
  return nextSlide;
};

const startCarousel = () => {
  carouselTimer = window.setInterval(() => {
    setActiveSlide(randomSlide());
  }, 4500);
};

if (slides.length > 1) {
  slides.forEach((slide, index) => {
    slide.setAttribute("aria-hidden", "true");
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      window.clearInterval(carouselTimer);
      setActiveSlide(index);

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        startCarousel();
      }
    });
  });

  setActiveSlide(randomSlide());

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    startCarousel();
  }
} else if (slides.length === 1) {
  setActiveSlide(0);
}
