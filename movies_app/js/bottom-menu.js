let lastScrollTop = 0;
const delta = 5;
const menu = document.querySelector("#nav");
const menuHeight = menu.offsetHeight;
const btn = document.querySelector("#btn");
const baseBtn = 1;
let didScroll;

window.onscroll = function(){
    didScroll = true;
};

setInterval(function(){
    if(didScroll){
        hasScrolled();
        didScroll = false;
    }
},250);

function hasScrolled(){
    const scrollTop = window.scrollY;

    if(Math.abs(lastScrollTop - scrollTop) <= delta){
        return;
    }if(scrollTop > lastScrollTop && scrollTop > menuHeight){
        menu.classList.remove("show");
        btn.style.bottom = `${baseBtn}%`;
    }else{
        if(scrollTop + window.innerHeight < document.body.offsetHeight){
            menu.classList.add("show");
            btn.style.bottom = `calc(${baseBtn}% + ${menuHeight}px)`;
        }
    }
    lastScrollTop = scrollTop;
}