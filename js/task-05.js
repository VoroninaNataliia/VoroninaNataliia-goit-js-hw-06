const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('span');

inputEl.addEventListener('input', onInputChange);

function onInputChange(e) {
  if (inputEl.value !== '') {
    console.log(inputEl.value);
    spanEl.textContent = e.currentTarget.value;
  } else {
    spanEl.textContent = 'Anonymous';
  }
}
