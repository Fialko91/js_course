if(confirm('Почати тестування?')) {
    const answer = document.querySelector('.answers');
    const month = prompt('Введіть номер місяця, віл 1 до 12')
    let result ='';

    function getMonthName(month) {
        switch (month) {
            case '1':
                result = 'січень'
                break;
            case '2':
                result = 'лютий'
                break;
            case '3':
                result = 'березень'
                break;
            case '4':
                result = 'квітень'
                break;
            case '5':
                result = 'травень'
                break;
            case '6':
                result = 'червень'
                break;
            case '7':
                result = 'липень'
                break;
            case '8':
                result = 'серпень'
                break;
            case '9':
                result = 'вересень'
                break;
            case '10':
                result = 'жовтень'
                break;
            case '11':
                result = 'листопад'
                break;
            case '12':
                result = 'грудень'
                break;

            default:
                result = 'Такого місяця не існує'
        }
        answer.innerText = result
    }
    getMonthName(month)
}



