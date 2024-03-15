// Get ID from URL
const params = new URLSearchParams(window.location.search);
const prodID = params.get('id');

// Get data from OMDb by ID
const response = await fetch(`/searchProduction?i=${prodID}`);
const data = await response.json();
const prodPoster = data.Poster;
console.log(prodPoster);

const poster = document.getElementById("posterImage");
poster.src = prodPoster;

//Actors, awards, genre, released, plot, imdbRating, imdbVotes

//Inner
const prodImage = document.getElementById("productionImg");
prodImage.style.backgroundImage = `url("${prodPoster}")`;