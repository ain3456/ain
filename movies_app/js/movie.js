const API_KEY = "be1923f781398a823987455ed99128da";
const movieID = [687163,83533,1226863];
const imgs = document.querySelectorAll("#main-img ul li");
const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`;
const playing = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR`;
const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=ko-KR`;

movieID.forEach(function(id,i){
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR`)
    .then(res => res.json())
    .then(function(movie){
      imgs[i].innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">`;
    });
});

/*popular*/
async function getPopular(){
    try{
        const response = await fetch(popular);
        const data = await response.json();
        const movieBox = document.getElementById("popular");

        data.results.forEach(function(movie){
            const movieEl = document.createElement("div");
            movieEl.classList.add("movie");

            movieEl.innerHTML = `<img src = "https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>`;
            movieBox.appendChild(movieEl);
        });
    }catch(error){
        console.error("영화 정보를 불러오는데 실패했습니다.: ",error);
    }
}getPopular();

/*top rated 별*/
function getStars(rating){
    const container = document.createElement("div");
    const full = Math.floor(rating);
    const empty = 5 - full;

    for(let i = 0; i < full; i++){
        const icon = document.createElement("i");
        icon.className = "xi-star";
        container.appendChild(icon);
    }
    for(let i = 0; i < empty; i++){
        const icon = document.createElement("i");
        icon.className = "xi-star-o";
        container.appendChild(icon);
    }
    return container;
}

/*top rated*/
async function getRated(){
    try{
        const response = await fetch(topRated);
        const data = await response.json();
        const movieBox = document.getElementById("top-rated");

        data.results.forEach(function(movie){
            const movieEl = document.createElement("div");
            const rating = movie.vote_average/2;
            movieEl.classList.add("movie");

            movieEl.innerHTML = `<img src = "https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>`;
            movieEl.appendChild(getStars(rating));
            movieBox.appendChild(movieEl);
        });
    }catch(error){
        console.error("영화 정보를 불러오는데 실패했습니다.: ",error);
    }
}getRated();

/*now playing*/
async function getPlaying(){
    try{
        const response = await fetch(playing);
        const data = await response.json();
        const movieBox = document.getElementById("playing");

        data.results.forEach(function(movie){
            const movieEl = document.createElement("div");
            movieEl.classList.add("movie");

            movieEl.innerHTML = `<img src = "https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>`;
            movieBox.appendChild(movieEl);
        });
    }catch(error){
        console.error("영화 정보를 불러오는데 실패했습니다.: ",error);
    }
}getPlaying();