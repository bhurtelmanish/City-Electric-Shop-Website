const bars = document.querySelectorAll(".fa-bars-staggered")[0];
const links = document.querySelectorAll(".navbar-links")[0];
const cross = document.querySelectorAll(".fa-xmark")[0];
bars.addEventListener("click", ()=>{
    links.classList.toggle("active");
    bars.classList.toggle("fa-xmark");
});
links.addEventListener("click", ()=>{
    links.classList.toggle("active");
    bars.classList.toggle("fa-xmark");
});