//Variaveis - espaço na memória
//Usar sempre Camel case

//Javascript possui tipagem dinâmica: interfere os tipos de dados
//Possui possui um tipagem fraca

var nomeDoProfessor = 'Julia'; //String
var idade = 27; //number
var altura = 1.77; //number
var estudando = true; //boolean (boolean0 - verdadeiro ou false)

console.log('\n');
console.log(nomeDoProfessor, typeof nomeDoProfessor);
console.log(idade, typeof idade);
console.log(altura, typeof altura);
console.log(estudando, typeof estudando);
console.log('\n');

var semConteudo; //declarando variavel
console.log(semConteudo); //undefined

var curso = 'Front-end em React',
  topico = 'Javascript Basico';

console.log(curso, topico);

// ! Não usar var no codigo JS

// ? let - pode ser mudado
let notaDeAluno = 10;
// ? const - não pode ser mudado
const mediaDoAluno = 8;

notaDeAluno = 9;
// mediaDoAluno = 10; // ! não é permitido

console.log(notaDeAluno);
console.log(mediaDoAluno);
