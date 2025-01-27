const price = parseInt(prompt('Ведіть суму товару', 10));
const quantity = parseInt(prompt('Ведіть кількість товару', 2));
const answer = document.querySelector('.answers');
const vat = price * quantity * 0.05;

answer.innerText = vat;
