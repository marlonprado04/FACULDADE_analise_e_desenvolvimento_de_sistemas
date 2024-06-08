Algoritmo "MultiplicarCincoNumeros"

Var
  // Seção de Declarações das variáveis
  numero, resultado: Inteiro
  contador: Inteiro

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

    contador <- contador + 1
    
    SE (contador = 5) ENTAO
      Escreva("O resultado é: ", resultado)
    FIMSE
    
  ATE contador = 5

Fimalgoritmo