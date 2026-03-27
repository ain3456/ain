document.addEventListener("DOMContentLoaded", initSlider);
function initSlider() {
const mainImage = document.querySelector(".box3");
const ul = mainImage.querySelector("ul");
const imgs = ul.querySelectorAll("li");
const prevBtn = document.querySelector(".left2");
const nextBtn = document.querySelector(".right2");

let currentIndex = 0;
const totalSlides = imgs.length;
let autoSlideInterval;


  function slideTo(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;


    const slideWidth = mainImage.clientWidth;
    ul.style.transition = "left 0.5s";
	ul.style.position = "relative";
	ul.style.left = -(slideWidth * index) + "px";
    currentIndex = index;
  }



  function startAutoSlide() {
     autoSlideInterval = setInterval(function () {
				    let nextIndex = currentIndex + 1;
				    if (nextIndex >= totalSlides) {
					nextIndex = 0;
				  }
				  slideTo(nextIndex);
				}, 3000);
    }

			  function stopAutoSlide() {
				clearInterval(autoSlideInterval);
			  }  

function setEventListeners() {
prevBtn.addEventListener("click", onPrevClick);
nextBtn.addEventListener("click", onNextClick);

    window.addEventListener("resize", onResize);
  }
 

 function onPrevClick(e) {
		e.preventDefault();
		stopAutoSlide();
		slideTo(currentIndex - 1);
		startAutoSlide();
		 }

  function onNextClick(e) {
		e.preventDefault();
		stopAutoSlide();
		slideTo(currentIndex + 1);
		startAutoSlide();
		}          

  function onResize() {
				slideTo(currentIndex);
			  }
		  

			  slideTo(0);
			  startAutoSlide();
			  setEventListeners();             
}