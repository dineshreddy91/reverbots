const messages = [
  'Intelligence that gets to work.',
  'The everyday is the next frontier.',
  'Repetition is ready for a different future.',
  'Built for a world that never stops.',
];
const message = document.querySelector('#message');
const number = document.querySelector('.message-number');
const motion = document.querySelector('#motion');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let current = 0;
let paused = reducedMotion.matches;
let interval;

function nextMessage(announce = false) {
  current = (current + 1) % messages.length;
  message.textContent = messages[current];
  number.textContent = `${String(current + 1).padStart(2, '0')} / 04`;
  if (announce) document.querySelector('#announcement').textContent = messages[current];
}

function updateMotion() {
  clearInterval(interval);
  document.body.classList.toggle('paused', paused);
  motion.setAttribute('aria-pressed', String(paused));
  motion.setAttribute('aria-label', paused ? 'Resume animation' : 'Pause animation');
  motion.textContent = paused ? '▷' : 'Ⅱ';
  if (!paused && !document.hidden) interval = setInterval(nextMessage, 7000);
}

document.querySelector('#next').addEventListener('click', () => {
  nextMessage(true);
  updateMotion();
});
motion.addEventListener('click', () => {
  paused = !paused;
  updateMotion();
});
reducedMotion.addEventListener('change', (event) => {
  paused = event.matches;
  updateMotion();
});
document.addEventListener('visibilitychange', updateMotion);
document.querySelector('#year').textContent = new Date().getFullYear();
updateMotion();
