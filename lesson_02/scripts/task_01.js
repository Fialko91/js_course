const answer = document.querySelector('.answers');

const a = parseFloat(prompt('Введіть перше значення', '10'));
const b = parseFloat(prompt('Введіть друге значення', '10'));

const sum = a + b;
const product = a * b;
const quotient = a / b;

answer.innerHTML = `
    <table>
        <tr>
          <th>Назва</th>
          <th>Результат</th>
        </tr>
        <tr>
          <th>Сума</th>
          <td>${sum}</td>
        </tr>
        <tr>
          <th>Добуток</th>
          <td>${product}</td>
        </tr>
        <tr>
          <th>Частка</th>
          <td>${quotient}</td>
        </tr>
      </table>
`
