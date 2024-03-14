const button = document.getElementById("searchButton");

async function searchMovie() {
    const searchTerm = document.getElementById("searchInput").value;
    const response = await fetch(`/search?s=${searchTerm}`);
    const data = await response.json();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = '';

    data.forEach(movie => {
        const movieTitle = movie.Title;
        const movieYear = movie.Year;
        const moviePoster = movie.Poster;
        resultsDiv.innerHTML += `<div class="card"><img src="${moviePoster}"><p>${movieTitle}</p><h6>(${movieYear})</h6></div>`;
    });
}

button.addEventListener('click', searchMovie);