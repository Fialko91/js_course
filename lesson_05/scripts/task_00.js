const answer = document.querySelector('.answers');
if(confirm('Почати тестування?')) {
    for(let i = 0; i < 8; i++) {
        const btn = document.createElement('button');
        btn.textContent = `Hello - ${i}`;
        answer.appendChild(btn);
    }
}

