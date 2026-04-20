//mobile메뉴
document.addEventListener("DOMContentLoaded", function(){
const hm = document.querySelector(".hm");
const main = document.querySelectorAll(".menu a");
const cross = document.querySelector(".cross");

   hm.addEventListener("click", function(){
    document.getElementById("nav").style.display = "block";
   });

   cross.addEventListener("click", function(){
	document.getElementById("nav").style.display = "none";
   })

     main.forEach(function(link){
        link.addEventListener("click", function(e){
            e.preventDefault();
            const subMenu = this.nextElementSibling;
            const isVisible = subMenu.style.display === "block";

            document.querySelectorAll(".sub1, .sub2").forEach(function(x){
                x.style.display = "none";
            });
            if(!isVisible){
                subMenu.style.display = "block";
                const img = this.querySelector("img");
            }
        });
    });
});

//PC메뉴
$(function(){
	$(".menubox li").mouseenter(function(){
		$(".sub").stop().slideDown();
	});
    
	$("#pcmenu").mouseleave(function(){
		$(this).find(".sub").stop().slideUp(500)
	});
});