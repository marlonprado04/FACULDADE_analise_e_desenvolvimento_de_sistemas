Algoritmo "ATIVIDADE_10_PROCEDIMENTO_COM_PARAMETROS"
// Disciplina   : [Linguagem e Lógica de Programação]
// Autor(a)    : Marlon Prado
// Data atual  : 10/06/2024
procedimento multiplicar(n1,n2:real)

var

produto: real

inicio

produto <- n1 * n2
Escreva("O resultado de ", n1, " x", n2," é: ", produto)

fimprocedimento

Var

val1: real
val2: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...

Escreva("Digite o primeiro valor: ")
Leia(val1)
Escreva("Digite o segundo valor: ")
Leia(val2)

multiplicar(val1, val2)

Fimalgoritmo