if(confirm('Почати тестування?')) {
    const answer = document.querySelector('.answers');
    const day = prompt('Введіть номер тиждня, віл 1 до 7')
    let result ='';

    function getWorkDays(numberDay) {
        if (numberDay <= 5)
            result = 'Цей день робочий'
        else
            result = 'Сьогодні вихідний'

        answer.innerText = result
    }
    getWorkDays(day)
}



