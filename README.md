# Javascript básico - Ada Tech

JavaScript é uma linguagem de programação amplamente utilizada para desenvolvimento web. Abaixo está um resumo das principais estruturas e conceitos em JavaScript:

## Variáveis:

Variáveis são contêineres para armazenar valores de dados. Em JavaScript, você pode declarar variáveis usando as palavras-chave `var`, `let` e `const`.

- `var`: Antes do ECMAScript 6 (ES6), era a única maneira de declarar variáveis. No entanto, tem escopo de função, o que significa que a variável é visível em toda a função em que é declarada.
- `let`: Introduzido no ES6, tem escopo de bloco, o que significa que a variável é visível apenas dentro do bloco onde é declarada.
- `const`: Também introduzido no ES6, é usado para declarar constantes, ou seja, valores que não mudam. Uma vez atribuído um valor a uma constante, esse valor não pode ser alterado.

Exemplo:
```javascript
var x = 10;
let y = 20;
const PI = 3.14;
```

## Estrutura de Repetição (for loop):

O loop `for` é usado para iterar sobre uma sequência de elementos ou para repetir um bloco de código um número específico de vezes.

Exemplo:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## Funções:

Funções são blocos de código reutilizáveis que podem ser chamados para executar uma ação.

Exemplo:
```javascript
function soma(a, b) {
  return a + b;
}

console.log(soma(2, 3)); // Saída: 5
```

## Estrutura de Controle de Fluxo:

JavaScript oferece estruturas de controle de fluxo, como `if`, `else`, `else if`, `switch`, para controlar o fluxo de execução do programa com base em condições.

Exemplo:
```javascript
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

Esses são apenas alguns dos conceitos básicos do JavaScript. Com esses elementos, você pode começar a construir uma variedade de aplicações web interativas.
