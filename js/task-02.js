const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulEl = document.querySelector('#ingredients');

const arr = [];

for (const ingredient of ingredients) {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = ingredient;
  console.log(liEl);
  arr.push(liEl);
}

ulEl.append(...arr);
