let body = document.querySelector("body");
let menuLinks = document.querySelector(".navbar_menu");
let navLogo = document.querySelector(".navbar_logo");

// Display Mobile Menu

// let mobileMenu = () => {
//   body.classList.toggle("active");
//   menuLinks.classList.toggle("active");
// };

let menu = document.querySelector("#mobile_menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuLinks.classList.toggle("active");
});
