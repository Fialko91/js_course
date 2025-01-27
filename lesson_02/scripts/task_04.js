const answer = document.querySelector('.answers');
const value = parseInt(prompt('Введіть довжину у сантимертах', 100));
const inMeters = value / 100;
const inKilometers = value / 100000;

answer.innerText = `В ${value} сантиментрах знаходиться ${inMeters} метрів та  ${inKilometers} кілометрів`;
