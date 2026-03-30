$(function(){
    let count = 0;
    let step;

    const items = $("#box ul li");
    const total = items.length;

    items.hide();
    function setstep(){
        const wid = $(window).width();
        if(wid < 800) step = 2;
        else if(wid < 1000) step = 3;
        else step =4;
    }

    function init(){
        setstep();
        count = step;

        items.hide();
        items.slice(0,count).show();
    }

    $("#btn").on("click", function(e){
        e.preventDefault();
        count = Math.min(count+step,total);
        items.slice(0,count).fadeIn();

        if(count >= total){
            $("#btn").fadeOut();
        }
    });

    $(window).on("resize",function(){
        init();
        $("#btn").show();
    });
    init();
});