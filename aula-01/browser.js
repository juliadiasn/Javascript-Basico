// const prompt = window.prompt('Qual é a sua idade?');
// console.log('O usuario tem ', prompt, 'anos de idade.');

// ? Usando a biblioteca readline-sync
const prompt = require('readline-sync');

const idade = prompt.question('Qual a sua idade?');
console.log(idade);
