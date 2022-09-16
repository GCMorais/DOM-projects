const main = document.getElementById('conteudo');

function addInfo(){
    let novoItem =
`<div class="image-area">
    <img src="./assets/animeart.jpeg" alt="animeart">
</div>
<div class="text-area">
    <h3>Guilherme Claro</h3>
    <h4>WEB DESIGN</h4>
    <p>Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.</p>
    <button><i class="gg-chevron-left"></i></button>
    <button><i class="gg-chevron-right"></i></button><br>
    <button class="surprise" type="text">Surprise Me</button>
</div>`;
    main.innerHTML = novoItem;
}   