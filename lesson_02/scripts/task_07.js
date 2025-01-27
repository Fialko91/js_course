const answer = document.querySelector('.answers');

const minDay = 0;
const maxDay = 6;
const minMonth = 1;
const maxMonth = 4;

let randomDay = Math.floor(Math.random() * (maxDay - minDay + 1)) + minDay;
let randomMonth =Math.floor(Math.random() * (maxMonth - minMonth + 1)) + minMonth;
let sum = randomMonth + randomDay;

answer.innerHTML = `
    Випадковий місяць: ${randomMonth} <br>
    Випадковий день: ${randomDay} <br>
    Сума: ${sum}
`
