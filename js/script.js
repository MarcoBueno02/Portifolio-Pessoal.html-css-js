function toggleMenu () {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("desktop-nav").style.top = "0";
    } else {
        document.getElementById("desktop-nav").style.top = "-70px"; // Altura da Navbar
    }

    prevScrollpos = currentScrollPos;
};

let prevScrollPos = window.pageYOffset;
let hamburgerNav = document.getElementById("hamburger-nav");

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Rolar para cima
        hamburgerNav.style.top = "0";
    } else {
        // Rolar para baixo
        hamburgerNav.style.top = `-${hamburgerNav.clientHeight}px`;
    }

    prevScrollPos = currentScrollPos;
};
