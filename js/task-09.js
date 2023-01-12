function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('button');
const spanEl = document.querySelector('span');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
}
