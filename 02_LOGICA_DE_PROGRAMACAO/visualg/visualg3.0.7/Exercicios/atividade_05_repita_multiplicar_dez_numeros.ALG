Algoritmo "MultiplicarDezNumeros"
// Disciplina   : [Linguagem e Lógica de Programação]
// Autor(a)    : Marlon Prado
// Data atual  : 03/06/2024

Var
  // Seção de Declarações das variáveis
  numero, resultado, contador: Inteiro

Inicio
// Inicia contador com 0
contador <- 0
resultado <- 1

REPITA
 // Pede numero ao usuario e repete...
 Escreva("Digite um número: ")
 Leia(numero)
 
 // Multiplica o valor digitado pelo usuário pelo numero
 resultado <- resultado * numero

 // Incrementa o contador
 contador <- contador + 1

ATE contador = 10

Escreval("O resuldado é: ", resultado)

Fimalgoritmo