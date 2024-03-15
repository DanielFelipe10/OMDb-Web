const params = new URLSearchParams(window.location.search);
const prodID = params.get('id');
console.log(prodID)

const response = await fetch(`/searchProduction?i=${prodID}`);
const data = await response.json();
const prodPoster = data.Poster;
const poster = document.getElementById("poster");
poster.innerHTML = `<img src="${prodPoster}" style="width:200px">`;
