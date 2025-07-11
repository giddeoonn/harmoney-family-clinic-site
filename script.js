const offScreenMenu = document.querySelector(".off-screen-menu");
const openMenu = document.querySelector(".open-sidebar");
const closeMenu = document.querySelector("#close");

openMenu.addEventListener("click", () => {
  offScreenMenu.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  offScreenMenu.classList.remove("active");
});

offScreenMenu.addEventListener("click", () => {
  offScreenMenu.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.05, // Triggers when 10% is visible
    }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});
