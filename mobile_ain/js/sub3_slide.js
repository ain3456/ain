$(function(){
  let boxslider;
  if($(".box3").length > 0){
    boxslider = $(".recommend").bxSlider();
  }

  function bxInit(){
    let sizeID = 3;

    if(boxslider){
    boxslider.reloadSlider({
      minSlides: sizeID,
      maxSlides: sizeID,
      moveSlides: sizeID,
      auto: true,
      slideMargin: 5,
      slideWidth: 257,
      pause: 3000,
      nextText:'',
      prevText: '',
      autoHover: true,
      autoStart: true,
      autoDelay: 750,
      pager: false
    });
  }
  } bxInit();

  $(window).on("resize",function(){
    if(boxslider){
      boxslider.stopAuto(true);
      bxInit();
      boxslider.onSliderLoad(function(){
        this.autoDelay(750).autoStart(true);
      });
    }
  });

  $(".left2").on("click",function(){
    if(boxslider){
      boxslider.goToPrevSlide();
    }
    return false;
  });
  $(".right2").on("click", function(){
    if(boxslider){
      boxslider.goToNextSlide();
    }
    return false;
  });
});