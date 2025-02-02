const answer = document.querySelector('.answers');

const monthNumber = parseInt(prompt(`Введіть номер місяця`))
let season

switch (monthNumber) {
    case 1 :
    case 2 :
    case 12 : season = `Зима`
        break;
    case 3 :
    case 4 :
    case 5 : season = `Весна`
        break;
    case 6 :
    case 7 :
    case 8 : season = `Літо`
        break;
    case 9 :
    case 10 :
    case 11 : season = `Осін`
        break;
    default : season = `Невірно вказаний номер місяця`
}

answer.innerText = `Ви вибрали ${season}`
