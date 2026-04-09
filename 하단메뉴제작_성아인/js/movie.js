const API_KEY = "be1923f781398a823987455ed99128da";
const playing = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}language=ko-KR`;
const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`;
const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}language=ko-KR`;

async function getplaying() {
    try{
        const response = await fetch(popular);
        const data = await response.json();
        const moviebox = document.getElementById("playing");
            
        data.results.forEach(movie => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `<img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}<h3>
            <p>평점 : ${movie.vote_average}</p>`;
            moviebox.appendChild(movieEl);
            });
        }catch(error){
            console.error("영화 정보를 불러오는데 실패했습니다:",error);
        }
    }getplaying();

async function getpopular() {
    try{
        const response = await fetch(popular);
        const data = await response.json();
        const moviebox = document.getElementById("popular");
            
        data.results.forEach(movie => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `<img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}<h3>
            <p>평점 : ${movie.vote_average}</p>`;
            moviebox.appendChild(movieEl);
            });
        }catch(error){
            console.error("영화 정보를 불러오는데 실패했습니다:",error);
        }
    }getpopular();

async function gettopRated() {
    try{
        const response = await fetch(popular);
        const data = await response.json();
        const moviebox = document.getElementById("topRated");
            
        data.results.forEach(movie => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `<img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}<h3>
            <p>평점 : ${movie.vote_average}</p>`;
            moviebox.appendChild(movieEl);
            });
        }catch(error){
            console.error("영화 정보를 불러오는데 실패했습니다:",error);
        }
    }gettopRated();