const carrosselItens = document.getElementById('carrossel-itens');
const dotsContainer = document.getElementById('dots');
let currentIndex = 0;

function updateDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => moveToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function moveToSlide(index) {
    currentIndex = index;
    carrosselItens.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
}

updateDots();
setInterval(() => {
    currentIndex = (currentIndex + 1) % 3;
    moveToSlide(currentIndex);
}, 4000);

fetch('http://localhost:3000/noticias')
  .then(res => res.json())
  .then(data => {
    let container = document.getElementById('tela');
    container.innerHTML = '';

    data.forEach(noticia => {
      container.innerHTML += `
        <div class="card col-md-4">
          <img src="${noticia.imagem}" class="card-img-top" alt="${noticia.titulo}">
          <div class="card-body">
            <h5 class="card-title">${noticia.titulo}</h5>
            <p class="card-text">${noticia.conteudo}</p>
            <a href="detalhes.html?id=${noticia.id}" class="btn btn-primary">Mais detalhes</a>
          </div>
        </div>
      `;
    });
  });

