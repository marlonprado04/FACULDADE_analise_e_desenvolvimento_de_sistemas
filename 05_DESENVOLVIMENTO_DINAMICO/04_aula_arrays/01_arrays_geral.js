// Cria array com 5 elementos
let array = [9, 8, 7, 6, 5]

// Imprime no console o primeiro elemento do array (posição 0)
console.log(array[0])

// Varre todas as posições do array, acessando uma de cada vez
for (let posicao = 0; posicao < array.length; posicao++){
    // Imprime o elemento do array na posição atual
    console.log(array[posicao])
}

// Define array vazio para adicionar elementos depois
let carros = []

// Adiciona elementos individuais em cada posição 
carros[0] = "Wolswagen"
carros[1] = "BMW"

carros[3] = "Teste" // Pulando a posição 2 para teste
console.log(carros[2]) // Ao imprimir posição 2, dá "undefined"

// Cria uma CONSTANTE de array de 2 elementos vazios
const motos = new Array(2)

// Adiciona os elementos a cada posição
motos[0] = "Honda"
motos[1] = "Kawasaki"

motos[2] = "BMW" // Adiciona um novo elemento no array, aumentando sua posição, mesmo ele sendo uma CONSTANTE

// Imprime ultimo elemento criado
console.log(motos[2])

// Congela o array criado para impedir o aumento do tamanho (o que não impede seus valores de serem modificados)
Object.freeze(motos)

// Tenta adicionar um NOVO ELEMENTO no fim do array que foi "congelado"
motos[3] = "teste" // Código só é ignorado sem apontar NENHUM ERRO

// Imprime o tamanho do array
console.log(motos.length) // Resulta em 3

// Cria uma constante de 2 elementos
const motocicletas = new Array(2)
motocicletas[0] = "Honda"
motocicletas[1] = "Kawasaki"
motocicletas[2] = "BMW" 


