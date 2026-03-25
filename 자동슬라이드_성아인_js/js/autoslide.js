document.addEventListener("DOMContentLoaded",initSlider);

function initSlider(){
const slide = document.querySelector("#slide");
const prev = document.querySelector(".left");
const next = document.querySelector(".right");
const idc = document.querySelectorAll("#idc a");

let currentIndex = 0;
let autoSlideInterval;

//ul가져오기
function getul(){
  const uls = slide.querySelectorAll("ul");
  for (let el of uls){
    if(window.getComputedStyle(el).display !== "none"){
      return el;
    }
  }
}

//슬라이드이동
function slideto(index){
  const ul = getul();
  const imgs = ul.querySelectorAll("li");
  const totalslides = imgs.length;
  if (index < 0 ) index = 0;
  if (index >= totalslides) index = totalslides - 1;
  
  const slidewidth = slide.clientWidth;

  ul.style.transition = "transform 0.5s";
  ul.style.transform = `translateX(-${slidewidth * index}px)`;
  currentIndex = index;
  updateIndicators();
}

//인디케이터
function updateIndicators(){
  idc.forEach((el, i) => {
    el.classList.toggle("on", i === currentIndex);
  });
}

//자동슬라이드
function startslide(){
  autoSlideInterval = setInterval(() => {
    const ul = getul();
    const totalslides = ul.querySelectorAll("li").length;
    let nextIndex = currentIndex + 1;
    if (nextIndex >= totalslides) nextIndex = 0;
    slideto(nextIndex);
  },3000);
}

function stopslide(){
  clearInterval(autoSlideInterval);
}

//이벤트(클릭)
function click(){
  prev.addEventListener("click", (e) => {
    e.preventDefault();
    stopslide();
    slideto(currentIndex - 1);
    startslide();
  });

  next.addEventListener("click", (e) => {
    e.preventDefault();
    stopslide();
    slideto(currentIndex + 1);
    startslide();
  });

  //이벤트(인디케이터클릭)
  idc.forEach((el, index) => {
    el.addEventListener("click", (e) => {
      stopslide();
      slideto(index);
      startslide();
    });
  });

  //슬라이드 사이즈 맞춤
  window.addEventListener("resize", () => {
  slideto(currentIndex);
  });
}

//초기실행
slideto(0);
startslide();
click();
}