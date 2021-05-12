const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');

let count = 0;

number.innerText = count;

const updatetext = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count += 1;
  updatetext();
};

const handleMinus = () => {
  count -= 1;
  updatetext();
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
