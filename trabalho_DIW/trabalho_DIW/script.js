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
