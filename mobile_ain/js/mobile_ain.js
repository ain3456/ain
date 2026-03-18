document.addEventListener("DOMContentLoaded", function(){
const menu =document.querySelector(".menu");
const hm = document.querySelector(".hm img");
const main = document.querySelectorAll(".mm > li > a");

const bottom = document.querySelector(".bottom");
let menuopen = false;

   hm.addEventListener("click", function(){
    menu.style.transition = "margin-left 0.3s";
    if(!menuopen){
        menu.style.left="0";
        bottom.style.left="0";
        menuopen = true;
    }else{
        menu.style.left="-70%";
        bottom.style.left="-70%";
        menuopen = false;
    }
   });

     main.forEach(function(link){
        link.addEventListener("click", function(e){
            e.preventDefault();
            const subMenu = this.nextElementSibling;
            const isVisible = subMenu.style.display === "block";

            document.querySelectorAll(".sub").forEach(function(x){
                x.style.display = "none";
            });
            if(!isVisible){
                subMenu.style.display = "block";
                const img = this.querySelector("img");
            }
        });
    });
    
    const modalBack = document.querySelector(".modal_back");
    const toggle = document.querySelector(".hm img");
    toggle.addEventListener("click", function(e){
        e.preventDefault();
        modalBack.classList.toggle("back_on");
    });
});