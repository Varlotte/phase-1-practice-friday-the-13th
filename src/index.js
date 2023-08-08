baseUrl = "http://localhost:3000/movies";
const movieList = document.getElementById("movie-list");
document.createElement;
let currentMovie;
let bloodForm = document.getElementById("blood-form");

fetch(baseUrl)
  .then((response) => response.json())
  .then((movie) => {
    movie.forEach(renderMovie);
  });

function renderMovie(movie) {
  let movieImage = document.createElement("img");
  movieImage.src = movie.image;
  movieList.appendChild(movieImage);
  movieImage.addEventListener("click", () => {
    showMovieDetails(movie);
  });
}

function showMovieDetails(movie) {
  currentMovie = movie;
  let detailTitle = document.getElementById("title");
  let detailImage = document.getElementById("detail-image");
  let detailDescription = document.getElementById("description");
  let yearRelease = document.getElementById("year-released");
  let watchedButton = document.getElementById("watched");
  let bloodAmount = document.getElementById("blood-amount");

  detailTitle.innerText = movie.title;
  detailImage.src = movie.image;
  detailDescription.innerText = movie.description;
  yearRelease.innerText = movie.release_year;
  watchedButton.innerText = movie.watched ? "Watched" : "Unwatched";
  bloodAmount.innerText = movie.blood_amount;

  watchedButton.addEventListener("click", () => {
    currentMovie.watched = !currentMovie.watched;
    watchedButton.textContent = currentMovie.watched ? "Watched" : "Unwatched";
  });
}

function bloodCounter() {
  bloodForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const amountToAdd = e.target["blood-amount"].value;
    currentMovie.blood_amount += parseInt(amountToAdd);
    document.getElementById("amount").textContent = currentMovie.blood_amount;

    e.target.reset();
  });
}

bloodCounter();

/*function bloodCounter() {
  bloodForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const amountToAdd = e.target["blood-amount"].value;
    currentMovie.bloodAmount += parseInt(amountToAdd);
    document.getElementById("amount").textContent = currentMovie.blood_amount;
    e.target.reset();
  });
}
bloodCounter();
*/
