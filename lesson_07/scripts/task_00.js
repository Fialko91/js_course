if(confirm('Почати тестування?')) {
    const answer = document.querySelector('.answers');
    const month = prompt('Введіть номер місяця, віл 1 до 12')
    let result ='';


    function getSeason(month) {
        switch (month) {
            case '12':
            case '1':
            case '2':
                result = 'Зима'
                break;

            case '3':
            case '4':
            case '5':
                result = 'Весна'
                break;

            case '6':
            case '7':
            case '8':
                result = 'Літо'
                break;

            case '9':
            case '10':
            case '11':
                result = 'Осінь'
                break;

            default:
                result = 'Такого місяця не існує'
        }
        answer.innerText = result
    }
    getSeason(month)
}




