Algoritmo "VETORMEDIA5NOTAS"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Autor(a)    : Marlon Prado
// Data atual  : 06/06/2024
Var
// Se��o de Declara��es das vari�veis 
notas: vetor [1..5] de real
contador: inteiro
media: real
soma: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 

soma <- 0

para contador de 1 ate 5 faca
     Escreva("Digite a nota de n�", contador, " de 5 do aluno: ")
     Leia(notas[contador])
     soma <- soma + notas[contador]
fimpara

para contador de 1 ate 5 faca
     Escreval("A ", contador, "� nota foi: ", notas[contador])
fimpara

media <- soma / 5

Escreval("A m�dia foi de: ", media)

Fimalgoritmo