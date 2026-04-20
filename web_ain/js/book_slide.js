$(function(){

  let sliders = [];

  $(".box").each(function(i){

    let $box = $(this);
    let $ul = $box.find(".subbox");

    let win = $(window).width();
    let sizeID = win < 600 ? 2 : (win < 800 ? 3 : 4);

    let w = $box.innerWidth();
    let slideWidth = (w - 10) / 2;

    sliders[i] = $ul.bxSlider({
      pager: false,
      controls: false,
      minSlides: sizeID,
      maxSlides: sizeID,
      moveSlides: 1,
      slideWidth: slideWidth,
      slideMargin: 5,
      auto: true,
      pause: 3000,
      autoHover: true
    });

  });

  $(".box").each(function(i){

    $(this).find(".leftBtn").on("click", function(e){
      e.preventDefault();
      sliders[i].goToPrevSlide();
    });

    $(this).find(".rightBtn").on("click", function(e){
      e.preventDefault();
      sliders[i].goToNextSlide();
    });

  });

  $(window).on("resize", function(){
    location.reload();
  });

});