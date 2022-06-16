const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

/**
 * Возвращает случайное значение 1-4
 * @returns - число
 */
function randomNumber() {
  return Math.floor((Math.random() * 4) + 1);
}

btn.addEventListener('click', () => {
  const el = document.createElement('div');
  el.classList.add('heart');
  el.style.animationName = `like-${randomNumber()}`;
  container.append(el);
  el.addEventListener('animationend', () => {
    el.remove();
  });
});
