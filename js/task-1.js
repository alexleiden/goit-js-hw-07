const categories = document.querySelector('#categories'); //ul
const categoriesItem = categories.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(item => {
  const titleCategories = item.querySelector('h2').textContent;
  const elemCategories = item.querySelectorAll('ul li');
  console.log(`Category: ${titleCategories}`);
  console.log(`Elements: ${elemCategories.length}`);
});
