function gridaddtxt(title, img, prix, lien, tag1, tag2, tag3) {
    let tags = '';
    if (tag1 !== '') {
      tags += `<div class="gridtag">${tag1}</div>`;
    }
    if (tag2 !== '') {
      tags += `<div class="gridtag">${tag2}</div>`;
    }
    if (tag3 !== '') {
      tags += `<div class="gridtag">${tag3}</div>`;
    }
    if (tags === '') {
      return '';
    }
    return `
      <div class="gridarticle">
        <div class="gridprix">${prix}€</div>
        <a href="${lien}.html" class="gridhref">
          <img src="img/${img}" class="gridimage">
          <div class="gridtitle">${title}</div>
        </a>
        <div class="gridtagplace">
          ${tags}
        </div>
      </div>
    `;
  }
  

  let gridarticle = '';

  //dans l'ordre ("titre de l'article", 'png de l'article', "prix", "lienhtml","tag1", "tag2", tag3) (tag non obligatoire)
  gridarticle += gridaddtxt("Le tshirt tropbien", 'gridarticle.png', "30", "article1", "test", "truc muchouette", "blabla");
  gridarticle += gridaddtxt("Le tshirt superbeau", 'gridarticle2.png', "2,99", "article1", "pascher", "plastique", "");
  gridarticle += gridaddtxt("Ma chemise d'hier", 'gridarticle3.png', "A partir de 399,64", "article1", "sale", "pas repasser", "sent l'ognion");
  gridarticle += gridaddtxt("Le tshirt superbeau", 'gridarticle2.png', "2,99", "article1", "pascher", "plastique", "");
  gridarticle += gridaddtxt("Le tshirt superbeau", 'gridarticle2.png', "2,99", "article1", "pascher", "plastique", "");
  gridarticle += gridaddtxt("Le tshirt superbeau", 'gridarticle2.png', "2,99", "article1", "pascher", "plastique", "");
  gridarticle += gridaddtxt("Le tshirt superbeau", 'gridarticle2.png', "2,99", "article1", "pascher", "plastique", "");
  gridarticle += gridaddtxt("Le tshirt superbeau", 'gridarticle2.png', "2,99", "article1", "pascher", "plastique", "");
  gridarticle += gridaddtxt("Le tshirt superbeau", 'gridarticle2.png', "2,99", "article1", "pascher", "plastique", "");
  gridarticle += gridaddtxt("Le tshirt superbeau", 'gridarticle2.png', "2,99", "article1", "pascher", "plastique", "");
  gridarticle += gridaddtxt("Le tshirt superbeau", 'gridarticle2.png', "2,99", "article1", "pascher", "plastique", "");
  
  document.getElementById("grid").innerHTML = gridarticle;
  