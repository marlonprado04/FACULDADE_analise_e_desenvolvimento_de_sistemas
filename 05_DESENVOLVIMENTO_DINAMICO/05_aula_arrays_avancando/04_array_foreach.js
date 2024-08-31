let numeros = [10, 20, 30, 40, 50, 60]

// Imprime cada um dos valores em tela
numeros.forEach(valor => console.log(valor))

// Trabalhando com o indice, imprimindo apenas itens de indice par

numeros.forEach((valor, indice) => {
    if(indice%2 == 0){
        console.log(valor)
    }else{
        console.log("item " + valor + " de indice impar")
    }
})