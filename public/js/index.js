const button = document.getElementById("searchButton");

async function searchMovie() {
    const selectProd = document.getElementById("types").value;
    const searchTerm = document.getElementById("searchInput").value;
    const response = await fetch(`/search?s=${searchTerm}&type=${selectProd}`);
    const data = await response.json();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = '';

    data.forEach(prod => {
        const prodTitle = prod.Title;
        const prodYear = prod.Year;
        const prodPoster = prod.Poster;
        const prodType = prod.Type;
        resultsDiv.innerHTML += `<div class="card"><p class="type">${prodType}</p><img src="${prodPoster}"><p>${prodTitle}</p><h6>(${prodYear})</h6></div>`;
    });
}

button.addEventListener('click', searchMovie);