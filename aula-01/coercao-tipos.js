const prompt = require('readline-sync');

const idade = prompt.question('Qual a sua idade?');

// * Convertendo a variavel para number
const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);

// * Coerção Explicita

console.log(Number('X')); //NaN: Not a Number;

console.log(String(10));

// ? Somente o 0 é falso, != 0 = verdadeiro
console.log(Boolean(999));
console.log(Boolean(0));

// * Coerção Implicita
// ? Quando soma o numero com o texto ele faz o coerçãoo automatica, ou seja, transforma para texto
console.log(1 + '1');
console.log('10' + 16);

// ? Se não for soma, ele transforma o texto em número
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
