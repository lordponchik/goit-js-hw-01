console.log('task-5');

const country = prompt('Введите страну для доставки');
let message = '';

switch (country.toLowerCase()) {
  case 'китай':
    message = `Доставка в ${country} будет стоить ${100} кредитов`;
    break;
  case 'чили':
    message = `Доставка в ${country} будет стоить ${250} кредитов`;
    break;
  case 'австралия':
    message = `Доставка в ${country} будет стоить ${170} кредитов`;
    break;
  case 'индия':
    message = `Доставка в ${country} будет стоить ${80} кредитов`;
    break;
  case 'ямайка':
    message = `Доставка в ${country} будет стоить ${120} кредитов`;
    break;
  default:
    message = 'В вашей стране доставка не доступна';
}

alert(message);
