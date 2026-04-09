let lastScrollTop = 0;
const delta = 5;
const fixBox = document.querySelector("#bottom-nav");
const fixBoxHeight = fixBox.offsetHeight;
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
    }if(scrollTop > lastScrollTop && scrollTop > fixBoxHeight){
        fixBox.classList.remove("show");
    }else{
        if(scrollTop + window.innerHeight < document.body.offsetHeight){
            fixBox.classList.add("show");
        }
    }
    lastScrollTop = scrollTop;
}