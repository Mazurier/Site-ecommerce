// Le bouton du menu hamburger
const menuHamburger = document.querySelector(".menu-hamburger");

// Le div de la barre de navigation
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu');
});