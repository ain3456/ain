$(function(){  		
    $(".search,.pcsearch").on("click",function(e){
        e.preventDefault();
        $("#search-modal").stop().fadeIn(400);
    });

    $(".xi-close").on("click",function(e){
        e.preventDefault();
        $("#search-modal").stop().fadeOut(400,function(){
            $("#search-form").val('');
        });
    });
});
