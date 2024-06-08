Algoritmo "VETORMEDIA5NOTAS"
// Disciplina   : [Linguagem e Lógica de Programação]
// Autor(a)    : Marlon Prado
// Data atual  : 06/06/2024
Var
// Seção de Declarações das variáveis 
notas: vetor [1..5] de real
contador: inteiro
media: real
soma: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

soma <- 0

para contador de 1 ate 5 faca
     Escreva("Digite a nota de nº", contador, " de 5 do aluno: ")
     Leia(notas[contador])
     soma <- soma + notas[contador]
fimpara

para contador de 1 ate 5 faca
     Escreval("A ", contador, "ª nota foi: ", notas[contador])
fimpara

media <- soma / 5

Escreval("A média foi de: ", media)

Fimalgoritmo