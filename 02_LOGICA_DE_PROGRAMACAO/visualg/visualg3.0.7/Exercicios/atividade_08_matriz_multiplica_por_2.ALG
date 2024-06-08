Algoritmo "ATIVIDADE_8_MATRIZ"
// Disciplina   : [Linguagem e Lógica de Programação]
// Autor(a)    : Marlon Prado
// Data atual  : 07/06/2024
Var
// Seção de Declarações das variáveis 

matriz: vetor[1..2,1..2] de inteiro
i, j: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

i <- 0

para i de 1 ate 2 faca
     para j de 1 ate 2 faca
        Escreva("Digite o valor da linha ", i, " e coluna ", j, ": ")
        Leia(matriz[i,j])
     fimpara
fimpara

para i de 1 ate 2 faca
     Escreval("")
     para j de 1 ate 2 faca
     Escreva(matriz[i,j] + 2)
     fimpara
fimpara

Fimalgoritmo