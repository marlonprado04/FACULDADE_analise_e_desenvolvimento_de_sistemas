Algoritmo "MultiplicarCincoNumeros"

Var
  // Se��o de Declara��es das vari�veis
  numero, resultado: Inteiro
  contador: Inteiro

Inicio
  // Inicializa a vari�vel resultado com 1
  resultado <- 1

  // Se��o de Comandos, procedimento, fun��es, operadores, etc...
  PARA contador DE 1 ATE 5 FACA
    Escreva("Digite um n�mero: ")
    Leia(numero)
    resultado <- resultado * numero

    SE (contador = 5) ENTAO
      Escreva("O resultado �: ", resultado)
    FIMSE
  FIMPARA
Fimalgoritmo
