$(function(){
   slider = $('.newbook-box>ul').slick({  
       dots:true,
       autoplay: true,
       infinite: true,
       autoplaySpeed: 2000,
       slidesToShow: 2,
       slidesToScroll: 1,
       responsive: [
             {
                breakpoint: 3000,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
       ]
    });

});