const button = document.getElementById("searchButton");

async function searchMovie() {
    const selectProd = document.getElementById("types").value;
    const searchTerm = document.getElementById("searchInput").value;
    const response = await fetch(`/search?s=${searchTerm}&type=${selectProd}`);
    const data = await response.json();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = '';

    data.forEach(prod => {
        const prodId = prod.imdbID;
        const prodTitle = prod.Title;
        const prodYear = prod.Year;
        const prodPoster = prod.Poster;
        const prodType = prod.Type;
        //Create div card
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML += `<p class="type">${prodType}</p><img src="${prodPoster}"><p>${prodTitle}</p><h6>(${prodYear})</h6>`;
        card.addEventListener('click', () =>showDetails(prodId));
        resultsDiv.appendChild(card);
    });
}

function showDetails(prod){
    const url = `/details.html?id=${prod}`
    window.location.href = url;
}

button.addEventListener('click', searchMovie);
