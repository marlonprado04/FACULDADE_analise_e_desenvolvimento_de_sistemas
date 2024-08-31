// Cria variável para leitura de informação digitada no terminal
let input = require('readline-sync')

// Exemplo de uso da variável readline
let nome = input.question("Qual o seu nome? ")
let idade = input.question("Qual a sua idade?")

// Imprime mensagem na tela com as variáveis digitadas no terminal
console.log(`Seu nome é ${nome} e sua idade é ${idade}`)

