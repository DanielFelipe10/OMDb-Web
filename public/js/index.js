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
        resultsDiv.innerHTML += `<p>${movieTitle}(${movieYear})</p><img src="${moviePoster}"style="width: 100px">`;
    });
}

button.addEventListener('click', searchMovie);