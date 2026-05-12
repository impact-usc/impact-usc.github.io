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
