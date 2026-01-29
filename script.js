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
