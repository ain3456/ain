$(function(){
    $(".threemenu ul li a").first().addClass("selected");
	$("#tab>ul>li").hide();
    const first = $(".threemenu ul li a").first().attr("href");
    $(first).show();

	$(".threemenu ul li a").click(function(){
		$(".threemenu ul li a").removeClass("selected");
		$(this).addClass("selected");
		$("#tab>ul>li").hide();
		$($(this).attr("href")).show();
		return false;
	});
});	