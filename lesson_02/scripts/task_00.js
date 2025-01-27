const answer = document.querySelector('.answers');

const a = 2;
const b = 4;
const c = 6;

let s1 = a + 12 + b;
let s2 = Math.sqrt((a + b) / (2 * a));
let s3 = Math.cbrt((a + b) * c);
let s4 = Math.sin(a / -b);

answer.innerHTML = `
    s1 = ${s1} <br>
    s2 = ${s2} <br>
    s3 = ${s3} <br>
    s4 = ${s4} <br>
`;
