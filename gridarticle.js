var gridarticle='';

function gridaddtxt(){

return `
<div class="gridarticle">
    <div class="gridprix">
        30€
    </div>
    <img src="img/gridarticle.png" class="gridimage">
    <div class="gridtitle">
        Le tshirt topbien
    </div>
    <div class="gridtagplace">
        <div class="gridtag">
            test
        </div>
        <div class="gridtag">
            trucmuchechouette
        </div>
        <div class="gridtag">
            blabla
        </div>
    </div>
</div>

`
}


//Copié collé une ligne pour ajouter un article
//Nom de l'article, prix, tag1, tag2, tag3, (si vide "")
gridarticle = gridarticle + gridaddtxt("Le tshirt tropbien", 'gridarticle.png', "test","trucmuchouette","blabla");
gridarticle = gridarticle + gridaddtxt("Le tshirt tropbien", 'gridarticle.png', "test","trucmuchouette","blabla");

document.getElementById("grid").innerHTML=gridarticle;
