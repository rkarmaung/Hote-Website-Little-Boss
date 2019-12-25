//index > gallery start-----------------------------------
let sliders = document.querySelectorAll(".slider"),
    arrowLeft = document.querySelector(".arrowLeft"),
    arrowRight = document.querySelector(".arrowRight"),
    current = 0;
    
//clear all imgs
function reset() {
  for(let i=0; i<sliders.length; i++) {
    sliders[i].style.display = "none";
  }
}

//init slider
function startSlider() {
  reset();
  sliders[0].style.display = "block";
}

// show previous
function slideLeft() {
  reset();
  sliders[current - 1].style.display = "block";
  current--;
}

// arrowLeft click
arrowLeft.addEventListener("click", function(){
  if(current===0){
    current = sliders.length;
  }
  slideLeft();
});

// show next
function slideRight() {
  reset();
  sliders[current + 1].style.display = "block";
  current++;
}

// arrowRight click
arrowRight.addEventListener("click", function(){
  if(current === sliders.length - 1){
    current = -1;
  }
  slideRight();
});

startSlider();
//index > gallery end--------------------------------

//parallax
var parallax = document.querySelectorAll(".parallax1");
var parallaxFooter = document.querySelector(".parallax2");

window.addEventListener("scroll", function(){
  parallax[0].style.backgroundPositionY = +window.pageYOffset/2+'px';
  parallaxFooter.style.backgroundPositionY = +window.pageYOffset/20+'px';
});