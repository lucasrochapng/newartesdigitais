const track = document.getElementById('carouselTrack');
let isPaused = false;
let position = 0;
const speed = 0.5; // velocidade do movimento

// Pausa no hover
track.addEventListener('mouseenter', () => {
  isPaused = true;
});

track.addEventListener('mouseleave', () => {
  isPaused = false;
});

function animate() {
  if (!isPaused) {
    position -= speed;
    track.style.transform = `translateX(${position}px)`;

    const firstItem = track.children[0];
    const firstItemWidth = firstItem.offsetWidth;

    // Se o primeiro item saiu totalmente da tela
    if (Math.abs(position) >= firstItemWidth) {
      track.appendChild(firstItem);
      position += firstItemWidth;
    }
  }

  requestAnimationFrame(animate);
}

animate();

const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

// Abrir modal ao clicar na imagem
document.querySelectorAll('.carousel-item img').forEach(img => {
  img.addEventListener('click', () => {
    modalImage.src = img.src;
    modal.classList.add('active');
    isPaused = true; // pausa o carrossel
  });
});

// Fechar pelo botão X
modalClose.addEventListener('click', closeModal);

// Fechar clicando fora da imagem
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove('active');
  modalImage.src = '';
  isPaused = false; // retoma o carrossel
}
