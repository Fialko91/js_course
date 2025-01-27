const inputYear = parseInt(prompt('Введіть дату вашого народження', 1991));
const currentYear = new Date().getFullYear();
const answer = document.querySelector('.answers');

const result = currentYear - inputYear;

answer.innerText = result;
