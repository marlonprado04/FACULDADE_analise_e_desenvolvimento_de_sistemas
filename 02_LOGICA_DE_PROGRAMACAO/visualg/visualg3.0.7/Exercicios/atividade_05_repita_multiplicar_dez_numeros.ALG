Algoritmo "MultiplicarDezNumeros"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Autor(a)    : Marlon Prado
// Data atual  : 03/06/2024

Var
  // Se��o de Declara��es das vari�veis
  numero, resultado, contador: Inteiro

Inicio
// Inicia contador com 0
contador <- 0
resultado <- 1

REPITA
 // Pede numero ao usuario e repete...
 Escreva("Digite um n�mero: ")
 Leia(numero)
 
 // Multiplica o valor digitado pelo usu�rio pelo numero
 resultado <- resultado * numero

 // Incrementa o contador
 contador <- contador + 1

ATE contador = 10

Escreval("O resuldado �: ", resultado)

Fimalgoritmo