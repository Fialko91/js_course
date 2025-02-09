const answer = document.querySelector('.answers');

if(confirm('Почати тестування?')) {
    for (let i = 0; i < 4; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const li = document.createElement('li');
        li.textContent = `${randomNumber}`;
        answer.appendChild(li);
    }
}
