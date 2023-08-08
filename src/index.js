baseUrl = "http://localhost:3000/movies";
const movieList = document.getElementById("movie-list");
document.createElement;

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
  watchedButton.innerText = movie.watched;
  bloodAmount.innerText = movie.blood_amount;
}
