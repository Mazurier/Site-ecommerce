// ../path/to/file pour que ca marche aussi avec les page d'articles

var headervar='';

function header(){

return `
<img src="./img/banner.jpeg" class="headerimg">
<a href="https://eelslap.com/"><img src="./img/menu/cart.png" class="iconcart"></a>
<a href="#header"><img src="./img/menu/arrow.png" class="iconretourtop"></a>
`

}


document.getElementById("header").innerHTML=header();

function navbarjs(){

return `
<nav class="navbar" id="navbar">
        <a href="#" class="logo"><img src="./img/logo-ducsman-200-95.png"></a>
        <div class="nav-links" id="nav-links">
            <img src="./img/menu/menu-btn.png" alt="bouton menu hamburger" class="menu-hamburger" id="menu-hamburger-image">
            <a href="#" class="logo-mobile"><img src="./img/logo-ducsman-200-95.png"></a>
            <ul>
                <li class="active"><a href="./index.html">Boutique</a></li>
                <li><a href="./apropos.html">à propos</a></li>
                <li><a href="./contact.html">Contact</a></li>
                <li><a href="./rgpd.html">RGPD</a></li>
                <li><a href="./cgu.html">CGU</a></li>
                <li><a href="./sav.html">SAV</a></li>
            </ul>
            <iframe id="small-google-map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10498.368656278535!2d2.3234495763383443!3d48.86598692289923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stailleur%20paris!5e0!3m2!1sfr!2sfr!4v1683188216931!5m2!1sfr!2sfr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div id="social-network">
                <a href="https://www.instagram.com"><img class="social-network-logo" src="./img/menu/logo-instagram.png"></a>
                <a href="https://www.facebook.com"><img class="social-network-logo" src="./img/menu/logo-facebook.png"></a>
                <a href="https://www.twitter.com"><img class="social-network-logo" src="./img/menu/logo-twitter.png"></a>    
            </div>
        </div>
    </nav>
`

}

document.getElementById("navbarjs").innerHTML=navbarjs();


