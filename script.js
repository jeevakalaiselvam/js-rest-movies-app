const APIKEY = "028cb94d290fbb9fdea5031c90628bd2";
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?api_key=028cb94d290fbb9fdea5031c90628bd2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
const IMGPATH = "https://image.tmdb.org/t/p/w1280/";

async function getMovies() {
    const response = await fetch(APIURL);
    const responseData = await response.json();
    console.log(responseData);

    responseData.results.forEach((movie) => {
        const img = document.createElement("img");
        img.src = IMGPATH + movie.poster_path;
        document.body.appendChild(img);
    });

    return responseData;
}
