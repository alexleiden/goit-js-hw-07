const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  const trimValue = input.value.trim();

  if (trimValue === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = trimValue;
  }
});
