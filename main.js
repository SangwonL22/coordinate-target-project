const pistol = document.querySelector('.pistol');
const target = document.querySelector('.target');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  vertical.style.transform = `translateX(${x}px)`;
  horizontal.style.transform = `translateY(${y}px)`;
  pistol.style.transform = `translate(${x - 37}px, ${y - 5}px)`;
  tag.style.transform = `translate(${x - 39}px, ${y + 150}px)`;
  tag.innerHTML = `${x}, ${y}`;
});

document.addEventListener('click', () => {
  const audio = new Audio('sound/gun-sound.mp3');
  audio.play();
  setTimeout(() => {
    alert('shoot!');
  }, 100);
});
