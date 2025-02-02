const answer = document.querySelector('.answers');
const category = prompt('Введіть назву ващої категорії водія, літера має бути Англійською');
let status;

switch (category.toUpperCase()) {
    case 'A':
        status = 'А-мотоцикл';
        break;
    case 'B':
        status = 'В-легковий автомобіль';
        break;
    case 'C':
        status = 'С-вантажний автомобіль';
        break;
    default:
        status = 'не існує, введіть корректно!'
}

answer.innerText = `Ваша категорія: ${status}`
