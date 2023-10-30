console.log('task-6');

let total = 0;
let input = prompt('Введите число');

while (input !== null) {
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(input);
  }

  input = prompt('Введите число');
}

alert(`'Общая сумма чисел равна ${total}'`);
