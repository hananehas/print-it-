const arrowLeft = document.querySelector(" arrow_left");
const arrowRight = document.querySelector("arrow_right");

arrowLeft.addEventListener('click', function(event) {
  if (event.button === 0) {
    console.log('Clic gauche sur la flèche gauche !');
  }else if (event.button === 2) {
    console.log('Clic droit sur la flèche gauche !');
  }
});

arrowRight.addEventListener('click', function(event) {
  if (event.button === 0) {
    console.log('Clic gauche sur la flèche droite !');
  } else if (event.button === 2) {
    console.log('Clic droit sur la flèche droite !');
  }
});