const answer = document.querySelector('.answers');

const priceProduct = parseInt( prompt('Ціна товару') )
const money = parseInt( prompt('Кількість грошей') )

if (money < priceProduct)
    answer.innerText = `У вас не вистачає коштів для покупки`

else if ((money % priceProduct) >= 4)
    answer.innerText = `Придбайте лотерейний квиток за 4 грн`
else
    answer.innerText = `Заберіть решту`

