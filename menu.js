// Le bouton du menu hamburger
const menuHamburger = document.querySelector(".menu-hamburger");

// Le div de la barre de navigation
const navLinks = document.querySelector(".nav-links");

const hamburgerImg = document.getElementById('menu-hamburger-image');

menuHamburger.addEventListener('click',()=>{
    img=hamburgerImg.getAttribute('src');
    if (img=='./img/menu/menu-btn.png') hamburgerImg.setAttribute('src','./img/menu/close.png');
    else hamburgerImg.setAttribute('src','./img/menu/menu-btn.png');  

    navLinks.classList.toggle('mobile-menu');
});