console.log('task-4');

const pricePerDroid = 3000;
const credits = 23580;
let message = 'Не верное значение';
const quantity = prompt('Сколько дроидов Вы хотите купить?');
const totalPrice = Number(quantity) * pricePerDroid;

if (quantity === null) {
  message = 'Отменено пользователем!';
} else if (credits < totalPrice) {
  message = 'Недостаточно средств на счету!';
} else if (credits >= totalPrice) {
  message = `Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
}

console.log(message);
