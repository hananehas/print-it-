const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
	},
];


const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
let index=0;
let currentSlide = 0;
let slideIndex = 0;
let  currentIndex=0;
const bannerImg = document.querySelector('.banner-img');
const tagline = document.querySelector('#banner-p');

arrowLeft.addEventListener('click', function(event) {
  if (event.button === 0) {
    console.log('Clic gauche sur la flèche gauche !');
   currentIndex--;
    if (currentIndex <= 0) {
      currentIndex = slides.length;
    }
   showPrevSlide();
  }else if (event.button === 2) {
    console.log('Clic droit sur la flèche gauche !');
  }
});

arrowRight.addEventListener('click', function(event) {
  if (event.button === 0) {
    console.log('Clic gauche sur la flèche droite !');
    currentIndex++;
    if (currentIndex >=slides.length) {
      currentIndex = 0;
    }
    showNextSlide();
  } else if (event.button === 2) {
    console.log('Clic droit sur la flèche droite !');
  }
});


/**creation des dots */
const dots = document.querySelector('.dots');
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
 
  if(i==0){
    dot.classList.add('dot_selected');
  }
  dots.appendChild(dot);
}

dots.childNodes.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

/*visionage en cours*/
showSlide(slideIndex);
function showSlide(index) {
  bannerImg.src = "./assets/images/slideshow/"+slides[index].image;
  tagline.innerHTML = slides[index].tagLine;
  var selectedDot = document.getElementsByClassName('dot_selected');
  for(let j=0; j<selectedDot.length; j++){
    selectedDot[j].classList.remove('dot_selected')
  }
  
  var Alldots = document.getElementsByClassName('dot');
  for(let i=0; i<Alldots.length; i++){
    if(i==index){
      Alldots[i].classList.add('dot_selected')
    }
  }

}


/* sliede suivant*/
function showNextSlide() {
  let nextIndex = currentIndex ;
  if (nextIndex >= slides.length ) {
    nextIndex = 0;
  }
  showSlide(nextIndex);
}

/*slide precedent*/
function showPrevSlide() {
  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    prevIndex = slides.length - 1;
  }
  showSlide(prevIndex);
}