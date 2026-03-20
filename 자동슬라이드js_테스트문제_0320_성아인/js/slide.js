document.addEventListener("DOMContentLoaded", initSlider);
function initSlider() {
const mainImage = document.querySelector("#slide");
const ul = mainImage.querySelector("ul");
const imgs = ul.querySelectorAll("li");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const bookRollImgs = document.querySelectorAll("#roll a");

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
    updateIndicators();
  }

  function updateIndicators() {
    for (let i = 0; i < bookRollImgs.length; i++){
        if(i === currentIndex){
            bookRollImgs[i].classList.add("active");
        }else{
            bookRollImgs[i].classList.remove("active");
        }
    }
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
const bookRollLinks = document.querySelectorAll("#roll");
for (let i = 0; i < bookRollLinks.length; i++) {
bookRollLinks[i].addEventListener("click", 
                   createBookRollClickHandler(i));
	}
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

   function createBookRollClickHandler(index) {
				return function (e) {
				  e.preventDefault();
				  stopAutoSlide();
				  slideTo(index);
				  startAutoSlide();
				};
			 }


  function onResize() {
				slideTo(currentIndex);
			  }
		  

			  slideTo(0);
			  startAutoSlide();
			  setEventListeners();             
}