const carrosselItens = document.getElementById('carrossel-itens');
const dotsContainer = document.getElementById('dots');
let currentIndex = 0;

const detalhesLinks = [
    'noticia1.html',
    'noticia2.html',
    'noticia3.html'
];

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

// Adicione o evento de clique às imagens do carrossel
const imagens = carrosselItens.querySelectorAll('img');
imagens.forEach((imagem, index) => {
    imagem.addEventListener('click', () => {
        window.location.href = detalhesLinks[index];
    });
});

// Adicione o evento de clique aos botões dos cards
const botoes = carrosselItens.querySelectorAll('.card button');
botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        window.location.href = detalhesLinks[index];
    });
});

updateDots();
setInterval(() => {
    currentIndex = (currentIndex + 1) % 3;
    moveToSlide(currentIndex);
}, 4000);