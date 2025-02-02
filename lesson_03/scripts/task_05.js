const answer = document.querySelector('.answers');
const dayNumber = parseInt(prompt('Введіть день тиждня, починаючи з 0 до 6'));
let status;

switch (dayNumber) {
    case 0:
        status = 'Понеділок'
        break;
    case 1:
        status = 'Вівторок'
        break;
    case 2:
        status = 'Середа'
        break;
    case 3:
        status = 'Четверг'
        break;
    case 4:
        status = 'Пятниця'
        break;
    case 5:
        status = 'Суббота'
        break;
    case 6:
        status = 'Неділя'
        break
    default:
        status = 'Такого дня тиждня не існує'
        break
}

answer.innerText = `Ви ввели ${status}`
