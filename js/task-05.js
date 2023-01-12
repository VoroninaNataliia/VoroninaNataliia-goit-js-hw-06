const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('span');

inputEl.addEventListener('input', onInputChange);

function onInputChange(e) {
  console.log(e.currentTarget.value);
  spanEl.textContent = e.currentTarget.value;
}
