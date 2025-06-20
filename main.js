// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// scroll section active link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });

  //   sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// active about button
let about_buttons = document.querySelectorAll(".about_buttons p");
let about_skills_content = document.querySelectorAll(
  ".about_skills_content div"
);
console.log(about_buttons);

function openskill(ele, tar) {
  for (ab of about_buttons) {
    ab.classList.remove("active");
  }

  for (ask of about_skills_content) {
    ask.classList.remove("active");
  }
  document.getElementById(tar).classList.add("active");
  document.getElementsByClassName(ele)[0].classList.add("active");
}

// scroll reveal
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, h1, h2, h3, h4, h5, h6", {
  origin: "top",
});
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

// typed js
const typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "Web Designer",
    "Software Developer",
    "AI/ML Engineer",
  ],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
