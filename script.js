//Configure and store your REST API endpoints and API here
//!IMPORTANT Storing API here is not advised, API keys must be encrypted and should not made visible to public. This is just for demonstration
const APIKEY = "028cb94d290fbb9fdea5031c90628bd2";
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?api_key=028cb94d290fbb9fdea5031c90628bd2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
const IMGPATH = "https://image.tmdb.org/t/p/w1280/";

const main = document.querySelector("main");
const form = document.querySelector();

//Get all popular movies to populate initially

getMovies();

/**
 * @author  Jeeva Kalaiselvam
 * @returns @Promise Gets all popular movie data from REST endpoint
 */
async function getMovies() {
    const response = await fetch(APIURL);
    const responseData = await response.json();
    console.log(responseData);

    responseData.results.forEach((movie) => {
        const img = document.createElement("div");
        img.classList.add("movie");

        const { poster_path, original_title, vote_average } = movie;

        img.innerHTML = `
            <img src="${IMGPATH + poster_path}" alt="">
            <div class="movie-info">
                <h3>${original_title}</h3>
                <span class="${getClassByRating(
                    vote_average
                )}">${vote_average}</span>
            </div>`;

        main.appendChild(img);
    });

    return responseData;
}

/**
 * @author Jeeva Kalaiselvam
 * @param {Number} voteAverage Defines the movie average rating from popularity
 * @returns {String} A class name to be inserted into the span to highlight different rating by different colors
 */
function getClassByRating(voteAverage) {
    if (voteAverage >= 8) {
        return "green";
    } else if (voteAverage >= 6) {
        return "orange";
    } else {
        return "red";
    }
}

getMovies();
