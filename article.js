const boxes = document.querySelectorAll('.tailleicon');

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    boxes.forEach((box) => {
      box.classList.remove('selected');
    });
    box.classList.add('selected');
  });
});

  
function changeimg(imgurl) {
    document.getElementById("displayimg").innerHTML = '<img src="img/' + imgurl + '" class="illustration">';
}

