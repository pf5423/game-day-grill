let menubtn = document.querySelector("#hamburger");
let navbar = document.querySelector(".nav");
let header = document.querySelector(".header");

menubtn.addEventListener("click", () => {
  menubtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  menubtn.classList.remove("fa-times");
  navbar.classList.remove("active");
});

window.addEventListener("load", () => {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
