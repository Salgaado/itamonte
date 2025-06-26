const images = [
  'https://i.postimg.cc/NFYprVSm/Property-14.png',
  'https://i.postimg.cc/W1JgT8fv/Property-15.png',
  'https://i.postimg.cc/0Q5zM0Zr/Property-16.png'
];

let current = 0;
const bg1 = document.getElementById('heroBg1');
const bg2 = document.getElementById('heroBg2');

bg1.style.backgroundImage = `url(${images[0]})`;
bg1.style.opacity = 1;

setInterval(() => {
  const next = (current + 1) % images.length;
  
  // troca as imagens
  bg2.style.backgroundImage = `url(${images[next]})`;
  bg2.style.opacity = 1;

  // fade-out da anterior depois de um tempo
  setTimeout(() => {
    bg1.style.backgroundImage = bg2.style.backgroundImage;
    bg2.style.opacity = 0;
    current = next;
  }, 1500); // tempo do fade
}, 10000); // intervalo entre as trocas
