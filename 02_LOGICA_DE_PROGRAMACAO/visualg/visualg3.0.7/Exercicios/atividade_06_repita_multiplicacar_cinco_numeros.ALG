Algoritmo "MultiplicarCincoNumeros"

Var
  // Se��o de Declara��es das vari�veis
  numero, resultado: Inteiro
  contador: Inteiro

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

    contador <- contador + 1
    
    SE (contador = 5) ENTAO
      Escreva("O resultado �: ", resultado)
    FIMSE
    
  ATE contador = 5

Fimalgoritmo