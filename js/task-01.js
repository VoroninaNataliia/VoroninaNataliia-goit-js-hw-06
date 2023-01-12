// part 1
const itemEl = document.querySelectorAll('.item');
const itemElQuantity = itemEl.length;
console.log('Number of categories: ', itemElQuantity);
// part 2
itemEl.forEach(item => {
  console.log('Category: ', item.firstElementChild.textContent);
  console.log('Elements: ', item.firstElementChild.children.length);
});
