const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

let count = 0;
number.innerText = count;
const updateCount = () => {
  number.innerText = count;
}
const handleAdd = () => {
  count++;
  updateCount();
}
const handleMinus = () => {
  count--;
  updateCount();
}

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);