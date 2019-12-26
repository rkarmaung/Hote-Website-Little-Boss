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
  parallaxFooter.style.backgroundPositionY = +window.pageYOffset/2+'px';
});

//burger menu
var btnLogo = document.querySelector(".btnLogo");
var nav = document.querySelector(".nav")
var burgerLogoCounter = 0;
btnLogo.addEventListener("click", function(){
  if(burgerLogoCounter==0){
    nav.style.marginLeft = "0px";
    btnLogo.style.opacity = "1";
    btnLogo.style.top = "0";
    btnLogo.style.left = "250px";
    btnLogo.style.transform = "scale(1)";
    btnLogo.style.marginLeft = "-495px";
    burgerLogoCounter++;
  } else {
    nav.style.marginLeft = "-300px";
    btnLogo.style.opacity = "0.5";
    btnLogo.style.top = "-80px";
    btnLogo.style.left = "210px";
    btnLogo.style.transform = "scale(0.5)";
    btnLogo.style.marginLeft = "0px";
    burgerLogoCounter--;
  }
});

//u want your nav bar at marginLeft=0 when mediaQuery is more than 1310
//at the same time, when u get back to mediaQuery less than 1310, u want your btnLogo in-place.
function myFunction(lessThan1310){
  if(lessThan1310.matches){
    nav.style.marginLeft = "-300px";
    btnLogo.style.opacity = "0.5";
    btnLogo.style.top = "-80px";
    btnLogo.style.left = "210px";
    btnLogo.style.transform = "scale(0.5)";
    btnLogo.style.marginLeft = "0px";
    burgerLogoCounter=0;
  } else {
    nav.style.marginLeft = "0px";
  }
}
var lessThan1310 = window.matchMedia("(max-width: 1310px)");
myFunction(lessThan1310);
lessThan1310.addListener(myFunction)