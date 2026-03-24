$(document).ready(function(){
    initSlider();
});

function initSlider() {
  const $slide = $("#slide");
  const $left = $(".left");
  const $right = $(".right");
  const $idc = $("#idc a");

   let currentIndex = 0;
   let autoSlideInterval;


    function getonUl() {
       const $uls = $slide.find("ul"); 
       let $onUl;

    $uls.each(function () {
      if ($(this).css("display") !== "none") {
        $onUl = $(this);
        return false;
      }
    });
       return $onUl;
    }

function slideTo(index) {
    const $ul = getonUl();
    const $imgs = $ul.find("li");
    const totalSlides = $imgs.length;
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    const slideWidth = $slide.width();

    $ul.css({
      transition: "transform 0.5s",
      transform: `translateX(-${slideWidth * index}px)`
    });
    currentIndex = index;
    updateIndicators();
}

function updateIndicators() {
    $idc.each(function (i) {
      $(this).toggleClass("on", i === currentIndex);
    });
}


function startAutoSlide() {
autoSlideInterval = setInterval(function(){
    const $ul = getonUl();
    const totalSlides = $ul.find("li").length;
    let nextIndex = currentIndex + 1;
    if (nextIndex >= totalSlides) nextIndex = 0;

    slideTo(nextIndex);
    },3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}


function setEventListeners(){
    $left.on("click", function(e){
        e.preventDefault();
        stopAutoSlide();
        slideTo(currentIndex - 1);
        startAutoSlide();
     });
    
     $right.on("click", function(e){
      e.preventDefault();
      stopAutoSlide();
      slideTo(currentIndex + 1);
      startAutoSlide();
     });  

    $idc.each(function (index) {
    $(this).on("click", function(e){
       e.preventDefault();
       stopAutoSlide();
       slideTo(index);
       startAutoSlide();
   });
 });

$(window).on("resize", function () {
      slideTo(currentIndex);
    });
  }

  slideTo(0);
  startAutoSlide();
  setEventListeners();
}