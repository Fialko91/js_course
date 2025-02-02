const answer = document.querySelector('.answers');

const randomNumber = Math.floor(Math.random() * 5) + 1;
let userNumber = parseInt(prompt('Введіть ваще число'));

if (randomNumber === userNumber) {
    answer.innerText = `Ви вгадали число з першої спроби`;
} else {
    userNumber =  parseInt(prompt('Не вгадали! У вас є ще одна спроба'));
    if (randomNumber === userNumber) {
        answer.innerText = 'Ви вгадали число з другої спроби';
    } else {
        answer.innerText = 'Ви не вгадали число з двох спроб';
    }
}
