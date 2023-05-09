// Le bouton du menu hamburger
const menuHamburger = document.querySelector(".menu-hamburger");

// Le div de la barre de navigation
const navLinks = document.querySelector(".nav-links");

const hamburgerImg = document.getElementById('menu-hamburger-image');

const navbar = document.getElementById('navbar');
const navLinksId = document.getElementById('nav-links');

console.log(navbar);

menuHamburger.addEventListener('click',()=>{
    img=hamburgerImg.getAttribute('src');
    if (img=='./img/menu/menu-btn.png') {
        hamburgerImg.setAttribute('src','./img/menu/close.png');
        navbar.style.height = '100vh';
        navLinksId.style.height = '100vh';
    } else {
        hamburgerImg.setAttribute('src','./img/menu/menu-btn.png');  
        navbar.style.height = '35px';
        navLinksId.style.height = '35px';
    }
    navLinks.classList.toggle('mobile-menu');
});