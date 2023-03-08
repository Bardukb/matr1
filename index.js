const rows = prompt('Введіть кількість рядків:');
const cols = prompt('Введіть кількість стовпців:');
const matrix = [];

for (let i = 0; i < rows; i++) {
  matrix[i] = [];
  for (let j = 0; j < cols; j++) {
    matrix[i][j] = prompt(`Введіть елемент матриці з рядку ${i+1} та стовпця ${j+1}:`);
  }
}

console.log('Ваша матриця:');
for (let i = 0; i < rows; i++) {
  console.log(matrix[i].join(' '));
}

for (let i = 0; i < rows; i++) {
  let rowSum = 0;
  for (let j = 0; j < cols; j++) {
    rowSum += parseInt(matrix[i][j]);
  }
  console.log(`Сума елементів у ${i+1}-му рядку: ${rowSum}`);
}

for (let j = 0; j < cols; j++) {
  let colSum = 0;
  for (let i = 0; i < rows; i++) {
    colSum += parseInt(matrix[i][j]);
  }
  console.log(`Сума елементів у ${j+1}-му стовпці: ${colSum}`);
}
