const btnDecrement = document.querySelector('[data-action = "decrement"]');
const btnIncrement = document.querySelector('[data-action = "increment"]');
const counterValue = document.querySelector('#value');

let counterClick = 0;

const decrement = () => {
  counterClick -= 1;
  counterValue.textContent = counterClick;
};

const increment = () => {
  counterClick += 1;
  counterValue.textContent = counterClick;
};

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);
