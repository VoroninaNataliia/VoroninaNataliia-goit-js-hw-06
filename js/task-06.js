const textInputEl = document.querySelector('#validation-input');
const symbolsNumber = textInputEl.dataset.length;
console.log(symbolsNumber);

textInputEl.addEventListener('blur', onInputBlur);
function onInputBlur(e) {
  if (e.target.value.length === Number(symbolsNumber)) {
    textInputEl.classList.add('valid');
  } else {
    textInputEl.classList.add('invalid');
  }
}
