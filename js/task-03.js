const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulEl = document.querySelector('.gallery');
console.log(ulEl);

const imgArr = images
  .map(image => {
    return `
    <li>
    <img src = '${image.url}' alt = '${image.alt}' width = 700/>
    </li>`;
  })
  .join('');

console.log(imgArr);

ulEl.insertAdjacentHTML('beforeend', imgArr);

ulEl.style.display = 'flex';
ulEl.style.flexDirection = 'column';
ulEl.style.alignItems = 'center';
ulEl.style.gap = '20px';
