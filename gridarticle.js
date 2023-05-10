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

  //dans l'ordre ("titre de l'article", 'img de l'article', "prix", "lienhtml","tag1", "tag2", "tag3") (tag non obligatoire)
  gridarticle += gridaddtxt("Costume 3 pièces Maria", 'gridarticle.jpg', "À partir de 350", "article1", "Laine", "Prêt-à-porter", "Sur mesure");
  gridarticle += gridaddtxt("Veste à revets Yukiko", 'gridarticle2.jpg', "150", "article1", "Feutre", "Prêt-à-porter", "Noir");
  gridarticle += gridaddtxt("Costume Julia", 'gridarticle3.jpg', "À partir de 280", "article1", "Coton", "Prêt-à-porter", "Sur mesure");
  gridarticle += gridaddtxt("Pantalon Morgana", 'gridarticle4.jpg', "90", "Coton", "Disponible en différents coloris", "Prêt-à-porter", "");
  gridarticle += gridaddtxt("Smoking Lucie", 'gridarticle5.jpg', "À partir de 500", "Laine", "Soie", "Sur mesure uniquement", "");
  gridarticle += gridaddtxt("Veste Aika", 'gridarticle6.jpg', "120", "article1", "Coton", "Prêt-à-porter", "Disponible en différents coloris");
  gridarticle += gridaddtxt("Chemise Chiaki", 'gridarticle7.jpg', "60", "article1", "Coton", "Prêt-à-porter", "");
  gridarticle += gridaddtxt("Chemisette Zoé", 'gridarticle8.jpg', "50", "article1", "Coton", "Prêt-à-porter", "");
  gridarticle += gridaddtxt("Borsalino Kana", 'gridarticle9.jpg', "50", "article1", "Feutre", "Prêt-à-porter", "");
  gridarticle += gridaddtxt("Cravate Denise", 'gridarticle10.jpg', "60", "article1", "Coton", "Disponible en différents motifs et coloris", "");
  gridarticle += gridaddtxt("Boutons de manchette Megumi", 'gridarticle11.jpg', "150", "article1", "Argent", "", "");
  
  document.getElementById("grid").innerHTML = gridarticle;
  