const answer = document.querySelector('.answers');

const kid1 = prompt('Ім\'я першої дитини')
const kid2 = prompt('Ім\'я другої дитини')
const kidCandy1 = parseInt(prompt(`Кількість цукерок у ${kid1}`))
const kidCandy2 = parseInt(prompt(`Кількість цукерок у ${kid2}`))

if (kidCandy1 > kidCandy2)
    answer.innerText = `${kid1} має більще цукерок ніж ${kid2}`
else if (kidCandy1 === kidCandy2)
    answer.innerText = `${kid1} та ${kid2} мають однакову кількість цукерок`
else
    answer.innerText = `${kid2} має більще цукерок ніж ${kid1}`
