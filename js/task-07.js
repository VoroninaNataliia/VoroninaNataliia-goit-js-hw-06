const spanEl = document.querySelector('span');
const inputEl = document.querySelector('input');

inputEl.addEventListener('change', e => {
  console.log(e.target.value);
  spanEl.style.fontSize = `${e.target.value}px`;
});
