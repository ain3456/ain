$(function(){
    $(".qv").on("click", function(e){
        e.preventDefault();
        $("#popup").stop().fadeIn(500);
        $("#modal").addClass("modal_on");
        
    });
    $("#cross, #modal").on("click", function(e){
        e.preventDefault();
        $("#popup").stop().fadeOut(500);
        $("#modal").removeClass("modal_on");
    });

    $(".qv2").on("click", function(e){
        e.preventDefault();
        $("#popup2").stop().fadeIn(500);
        $("#modal2").addClass("modal_on");
        
    });
    $("#cross2, #modal2").on("click", function(e){
        e.preventDefault();
        $("#popup2").stop().fadeOut(500);
        $("#modal2").removeClass("modal_on");
    });
});