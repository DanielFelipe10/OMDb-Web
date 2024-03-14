const button = document.querySelector(".buttonH");
const header = document.querySelector(".header")
const shadow = document.querySelector(".shadow");
const h1 = document.querySelector(".titleH");
const select = document.querySelector(".selectH");
const input = document.querySelector(".inputH");

function moveHeader(){
    header.classList.add("navbar");
    h1.classList.add("navbar");
    select.classList.add("navbar");
    input.classList.add("navbar");
    button.classList.add("navbar");
    shadow.classList.add("navbar");
}

button.addEventListener('click', moveHeader);