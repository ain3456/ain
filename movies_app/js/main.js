//메인 슬라이드
document.addEventListener("DOMContentLoaded",initSlider);

function initSlider(){
    const slide = document.querySelector("#main-img");

    let currentIndex = 0;
    let autoSlideInterval;
    
    //ul 가져오기
    function getUl(){
        const uls = slide.querySelectorAll("ul");
        for(let el of uls){
            if(window.getComputedStyle(el).display != "none"){
                return el;
            }
        }
    }

    //슬라이드 이동
    function slideTo(index){
        const ul = getUl();
        const imgs = ul.querySelectorAll("li");
        const totalslides = imgs.length;
        if(index < 0) index = 0;
        if(index >= totalslides) index = totalslides - 1;

        const slideWidth = slide.clientWidth;
        ul.style.transition = `transform 0.5s`;
        ul.style.transform = `translateX(-${slideWidth * index}px)`;
        currentIndex = index;
    }

    //자동 슬라이드
    function startSlide(){
        autoSlideInterval = setInterval(function(){
            const ul = getUl();
            const totalslides = ul.querySelectorAll("li").length;
            let nextIndex = currentIndex + 1;
            if(nextIndex >= totalslides) nextIndex = 0;
            slideTo(nextIndex);
        },3000)
    }

    window.addEventListener("resize", function(){
        slideTo(currentIndex);
    });

    slideTo(0);
    startSlide();
}