$(document).ready(function(){

$(".open").click(function(){
    $(".close").slideToggle();

    if($(this).hasClass("active")){
        $(this).text("펼쳐보기").removeClass("active");
    }else{
        $(this).text("접기").addClass("active");
    }
});

$(".open2").click(function(){
    $(".close2").slideToggle();

    if($(this).hasClass("active")){
        $(this).text("펼쳐보기").removeClass("active");
    }else{
        $(this).text("접기").addClass("active");
    }
});

$(".open3").click(function(){
    $(".opentxt").slideToggle();

    if($(this).hasClass("active")){
        $(this).text("펼쳐 보기").removeClass("active");
    }else{
        $(this).text("접기").addClass("active");
    }
});

$(".open4").click(function(){
    $(".close4").slideToggle();

    if($(this).hasClass("active")){
        $(this).text("펼쳐 보기").removeClass("active");
    }else{
        $(this).text("접기").addClass("active");
    }

});

});






