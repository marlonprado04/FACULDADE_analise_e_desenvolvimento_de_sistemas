// Cria array de numeros
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Cria array com resultado do filtro de elementos pares
let resultados = numeros.filter(item => item % 2 == 0)

// Imprime resultado na tela
console.log(resultados)

// Outra forma de usar o filtro, filtrando valores maiores que 5
let numeros_maiores = numeros.filter(
    function(valor){
        return valor > 5;
    }
) 

// Imprime numero filtrado
console.log(numeros_maiores)

// Cria uma função para ser usada no filter, para retornar item menor que 5
function buscar_valores(valor){
    return valor < 5;
}

// Cria novo array usando a função
let numeros_menores = numeros.filter(buscar_valores)

// Imprime resultado
console.log(numeros_menores)





