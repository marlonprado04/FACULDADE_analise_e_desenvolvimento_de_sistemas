// Exemplo função length que pega tamanho da string
let nome = "Marlonzito"
let tamanho = nome.length
console.log(tamanho)
let resultado = tamanho > 10 ? "Obrigado!" : "Por favor, digite o nome completo"
console.log(resultado)

// Exemplo função uppercase para colocar em maiúscula
let maiuscula = nome.toLocaleUpperCase()
console.log(maiuscula)

// Exemplo indexOf que localiza a posição inicial de uma consulta de string
let participantes = "Marlon, João, Pedro, José"
let posicao = participantes.indexOf("Pedro")
console.log(posicao)


// Exemplo de slice que recorta as posições passadas
let recorte_final = participantes.slice(14)
console.log(recorte_final)

let recorte_inicial = participantes.slice(0,12)
console.log(recorte_inicial)

// Exemplo de includes que verificar se uma string possui outra
let frase = "Essa é a lista de alunos aprovados: Marlon, João, Pedro"
let aprovado_ou_nao = frase.includes("Marlon")
console.log(aprovado_ou_nao)

// Exemplo de concat que junta strings
let texto1 = "Olá "
let texto2 = "Mundo"
let frase_unida = texto1.concat(texto2)
console.log(frase_unida)

// Exemplo de trim que remove os espaços do início e do fim
let texto_com_expacos = "   Meu nome é Marlon   "
console.log(texto_com_expacos.trim())

// Exemplo de split que separa a string de acordo com separador passado, tornando ela um array
let texto_para_separar = "Marlon, João, Pedro, Henrique, Juliano"
let lista_de_nomes = texto_para_separar.split(", ")
console.log(lista_de_nomes)