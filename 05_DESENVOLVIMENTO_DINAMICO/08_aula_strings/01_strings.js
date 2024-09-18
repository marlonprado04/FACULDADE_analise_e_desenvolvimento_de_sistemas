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
