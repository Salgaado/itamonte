// 1) Defina seus dois conjuntos de imagens:
const desktopImages = [
  'https://i.postimg.cc/bJwrM8sm/HEADER-2-ITAMONTE.png',
  'https://i.postimg.cc/C1r5pt8S/HEADER-1-ITAMONTE.png',
  'https://i.postimg.cc/65v3FMpx/HEADER-3-ITAMONTE.png'
];
const mobileImages = [
  'https://i.postimg.cc/htcCN31X/BG-1-MOBILE.png',
  'https://i.postimg.cc/G28zk0d5/BG-2-MOBILE-png.png',
  'https://i.postimg.cc/FRLgYjxt/BG-3-MOBILE-png.png'
];

// 2) Setup inicial
let images = [];
let current = 0;
const bg1 = document.getElementById('heroBg1');
const bg2 = document.getElementById('heroBg2');

// Função para escolher o array certo e resetar o slider
function updateImageSet() {
  const isMobile = window.matchMedia('(max-width: 780px)').matches;
  images = isMobile ? mobileImages : desktopImages;
  current = 0;
  // já aplica a 1ª imagem imediatamente
  bg1.style.backgroundImage = `url(${images[0]})`;
  bg1.style.opacity = 1;
  bg2.style.opacity = 0;
}

// 3) Reage a mudanças de tamanho de tela
const mq = window.matchMedia('(max-width: 780px)');
mq.addEventListener('change', updateImageSet);

// 4) Inicializa
updateImageSet();

// 5) Intervalo de troca com fade
setInterval(() => {
  const next = (current + 1) % images.length;

  // prepara a próxima imagem no bg2
  bg2.style.backgroundImage = `url(${images[next]})`;
  bg2.style.opacity = 1;

  // após o tempo do fade, zera bg2 e atualiza bg1
  setTimeout(() => {
    bg1.style.backgroundImage = bg2.style.backgroundImage;
    bg2.style.opacity = 0;
    current = next;
  }, 1500); // duração do fade (em ms)
}, 10000); // troca a cada 10s


document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.getElementById('menu-toggler');
    const menu    = document.querySelector('.nav-menu');

    toggler.addEventListener('click', () => {
      menu.classList.toggle('open');
    });

    // (Opcional) fecha o menu se clicar fora dele
    document.addEventListener('click', e => {
      if (!menu.contains(e.target) && e.target !== toggler) {
        menu.classList.remove('open');
      }
    });
  });