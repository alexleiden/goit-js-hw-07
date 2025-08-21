const body = document.querySelector('body');

const colorBtn = document.querySelector('.change-color');
const outputColorVal = document.querySelector('.color');

colorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  outputColorVal.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
