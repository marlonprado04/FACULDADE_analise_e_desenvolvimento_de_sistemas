// Para executar o programa é necessário ter a biblioteca readline-sync instalada no local de execução
// Para instalar, usar o comando npm install readline-sync

// Importa biblioteca para leitura de input do usuário
const readlineSync = require("readline-sync");

// Apresenta menu de opções para o usuário
console.log("Escolha uma opção de bebida: ");
console.log("1 - Café");
console.log("2 - Leite");
console.log("3 - Chá");

// Solicita input do usuário no console
let opcao = readlineSync.question("Digite o número da sua escolha: ");

// Cria variáveis para armazenar o valor do item e a mensagem completa
let valor;
let mensagem;

// Cria switch para selecionar a opção de acordo
switch (opcao) {
  case "1":
    valor = 3.5;
    mensagem = `Você escolheu Café. O valor a ser pago é R$ ${valor.toFixed(
      2
    )}.`;
    break;
  case "2":
    valor = 2.0;
    mensagem = `Você escolheu Leite. O valor a ser pago é R$ ${valor.toFixed(
      2
    )}.`;
    break;
  case "3":
    valor = 2.5;
    mensagem = `Você escolheu Chá. O valor a ser pago é R$ ${valor.toFixed(
      2
    )}.`;
    break;
  default:
    mensagem =
      "Opção inválida! Por favor, escolha entre 1 (Café), 2 (Leite) ou 3 (Chá).";
    break;
}

// Imprime mensagem relativa na tela
console.log(mensagem);
