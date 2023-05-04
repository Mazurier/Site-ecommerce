var gridarticle='';

function gridaddtxt(title,img,prix,tag1,tag2,tag3){

return `
<div class="gridarticle">
    <div class="gridprix">
        ${prix}€
    </div>
    <a href="article/article1.html" class="gridhref">
        <img src="img/${img}" class="gridimage">
        <div class="gridtitle">
            ${title}
        </div>
    </a>
    <div class="gridtagplace">
        <div class="gridtag">
            ${tag1}
        </div>
        <div class="gridtag">
            ${tag2}
        </div>
        <div class="gridtag">
            ${tag3}
        </div>
    </div>
</div>

`
}


//Copié collé une ligne pour ajouter un article
//Nom de l'article, image de l'article, prix, tag1, tag2, tag3, (si vide "")
gridarticle = gridarticle + gridaddtxt("Le tshirt tropbien", 'gridarticle.png', "30", "test","trucmuchouette","blabla");
gridarticle = gridarticle + gridaddtxt("Le tshirt superbeau", 'gridarticle2.png',"2,99","pascher","plastique","");
gridarticle = gridarticle + gridaddtxt("Ma chemise d'hier", 'gridarticle3.png',"399.64","sale","pas repasser","sent l'ognion");
gridarticle = gridarticle + gridaddtxt("Le tshirt superbeau", 'gridarticle2.png',"2,99","pascher","plastique","");

document.getElementById("grid").innerHTML=gridarticle;
