// Cria array de objetos
let funcionarios = [
  { nome: "Marlon", idade: 24 },
  { nome: "José", idade: 52 },
  { nome: "Joaquina", idade: 45 },
];

// Cria variável para calcular a soma das idades do array de objetos funcionários
let soma_idades = funcionarios.reduce((soma, funcionario) => {
  return soma + funcionario.idade; // Soma as idades sem dividir aqui
}, 0); // O valor inicial de 'soma' é 0

// Cria variável com média das idades somadas
let media_idades = soma_idades / funcionarios.length;

// Imprime média das idades
console.log(media_idades); // Saída: 40.333333333333336
