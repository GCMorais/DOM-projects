const hamburguer = document.querySelector(".mobile-menu");
const hambText = document.querySelector(".menuMenu");


hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    hambText.classList.toggle('active');
})