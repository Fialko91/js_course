const answer = document.querySelector('.answers');

const age = parseInt(prompt('Введіть ваш вік'))
let status;

if (age <= 10) {
    status = 'дитиною у садочку'
} else if (age >= 11 && age <= 20) {
    status = 'є школярем'
} else if (age >= 21 && age <= 30) {
    status = 'є студентом'
} else if (age >= 31 && age <= 65) {
    status = 'є працівником'
} else {
    status = 'є пенсіонером'
}

answer.innerText = `Ви ${status}`
