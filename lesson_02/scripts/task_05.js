const answer = document.querySelector('.answers');

const dateNow = new Date();
const secondNow = dateNow.getHours() * 3600 + dateNow.getMinutes() * 60 + dateNow.getSeconds();
const time = parseInt(prompt('Введіть кількість секунд, що пройшло від початку доби', secondNow));

const inHours = Math.floor(time / 3600);
const inMinutes = Math.floor((time - inHours * 3600) / 60);
const inSecond = Math.floor(time - inHours * 3600 - inMinutes * 60);

answer.innerText = `Пройшло часу від початку доби ${inHours} годин ${inMinutes} хвилин  ${inSecond} секунд`;
