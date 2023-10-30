console.log('');
console.log('task-2');

const total = 100;
let ordered = 50;

console.log(quantityСomparison(total, ordered));

ordered = 130;

console.log(quantityСomparison(total, ordered));

function quantityСomparison(total, ordered) {
  return total > ordered
    ? `Заказ оформлен, с вами свяжется менеджер`
    : `На складе недостаточно твоаров!`;
}
