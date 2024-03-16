// Get ID from URL
const params = new URLSearchParams(window.location.search);
const prodID = params.get('id');

// Get data from OMDb by ID
const response = await fetch(`/searchProduction?i=${prodID}`);
const data = await response.json();

//Actors, awards, genre, released, plot, imdbRating, imdbVotes
const prodType = data.Type;
const prodPoster = data.Poster;
const prodTitle = data.Title;
const prodPlot = data.Plot;
const prodReleased = data.Released;
const prodActors = data.Actors;
const prodAwards = data.Awards;
const prodGenre = data.Genre;
const prodIMDBRating = data.imdbRating;
const prodIMDBVotes = data.imdbVotes;
const prodYear = data.Year;

const poster = document.getElementById("posterImage");
poster.src = prodPoster;

const productionData = document.getElementById("productionData");
const type = document.getElementById("prodType");
const genre = document.getElementById("genre");
const titleDiv = document.getElementById("titleD");
const imdbDiv = document.getElementById("imdbD");
const descmoreD = document.getElementById("descmoreD");

genre.textContent = `${prodGenre}`;
type.textContent = `${prodType}`;

titleDiv.innerHTML = `<p class="year">(${prodYear})</p>
                      <h1>${prodTitle}</h1>`;

imdbDiv.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/2048px-IMDb_Logo_Square.svg.png" alt="imdb">
                     <h1>${prodIMDBRating}</h1>
                     <p>${prodIMDBVotes}</p>`;

descmoreD.innerHTML = `<h6>Description</h6>
                       <p>${prodPlot}</p>
                       <h6>Actors</h6>
                       <p>${prodActors}</p>
                       `;


//Inner
const prodImage = document.getElementById("productionImg");
prodImage.style.backgroundImage = `url("${prodPoster}")`;