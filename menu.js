// Le bouton du menu hamburger
const menuHamburger = document.querySelector(".menu-hamburger");

// Le div de la barre de navigation
const navLinks = document.querySelector(".nav-links");

const hamburgerImg = document.getElementById('menu-hamburger-image');

const navbar = document.getElementById('navbar');
const navLinksId = document.getElementById('nav-links');

let isMenuOpened=false;
console.log(navbar);

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu');
    img=hamburgerImg.getAttribute('src');
    if (img=='./img/menu/menu-btn.png') {
        isMenuOpened=true;
        hamburgerImg.setAttribute('src','./img/menu/close.png');
        navbar.style.height = '100vh';
        navLinksId.style.height = '100vh';
    } else {
        isMenuOpened=false;
        hamburgerImg.setAttribute('src','./img/menu/menu-btn.png');  
        navLinks.ontransitionend= () => {
            if (!isMenuOpened) {
                navbar.style.height = '35px';
                navLinksId.style.height = '35px';
            }
        }
    }
});

function test() {
    return;
}