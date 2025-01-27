const answer = document.querySelector('.answers');

const firstPriceProduct = +prompt('Ціна 1-го товара', '1');
const secondPriceProduct = +prompt('Ціна 2-го товару', '2');
const thirdPriceProduct = +prompt('Ціна 3-го товару', '3');

const firstProductCount = +prompt('Кількість 1-го товару', '1');
const secondProductCount = +prompt('Кількість 2-го товару', '2');
const thirdProductCount = +prompt('Кількість 3-го товару', '3');

let firstTotalPriceProduct = firstPriceProduct * firstProductCount;
let secondTotalPriceProduct = secondPriceProduct * secondProductCount;
let thirdTotalPriceProduct = thirdPriceProduct * thirdProductCount;
let totalPriceProducts = firstTotalPriceProduct + secondTotalPriceProduct + thirdTotalPriceProduct;

answer.innerHTML = `
    <table>
        <tr>
          <th>Товар</th>
          <th>Ціна товару</th>
          <th>Кількість товару</th>
          <th>Вартиість товару</th>
        </tr>
        <tr>
          <td>1-й продукт</td>
          <td>${firstPriceProduct}</td>
          <td>${firstProductCount}</td>
          <td>${firstTotalPriceProduct}</td>
        </tr>
        <tr>
          <td>2-й продукт</td>
          <td>${secondPriceProduct}</td>
          <td>${secondProductCount}</td>
          <td>${secondTotalPriceProduct}</td>
        </tr>
        <tr>
          <td>3-й продукт</td>
          <td>${thirdPriceProduct}</td>
          <td>${thirdProductCount}</td>
          <td>${thirdTotalPriceProduct}</td>
        </tr>
        <tr >
          <td >Загальна сума</td>
          <td>${totalPriceProducts}</td>
        </tr>
      </table>
`
