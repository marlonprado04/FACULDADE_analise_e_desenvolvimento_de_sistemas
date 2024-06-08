Algoritmo "MultiplicarCincoNumeros"

Var
  // Seção de Declarações das variáveis
  numero, resultado: Inteiro
  contador: Inteiro

Inicio
  // Inicializa a variável resultado com 1
  resultado <- 1

  // Seção de Comandos, procedimento, funções, operadores, etc...
  PARA contador DE 1 ATE 5 FACA
    Escreva("Digite um número: ")
    Leia(numero)
    resultado <- resultado * numero

    SE (contador = 5) ENTAO
      Escreva("O resultado é: ", resultado)
    FIMSE
  FIMPARA
Fimalgoritmo
