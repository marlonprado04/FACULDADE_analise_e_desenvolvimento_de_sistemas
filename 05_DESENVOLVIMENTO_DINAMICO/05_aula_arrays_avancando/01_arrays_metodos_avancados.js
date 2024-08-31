// Cria array de 5 elementos
let array = [1, 2, 3, 4, 5]

// Remove o 3 do array e substitui por 9
array.splice(2, 1, 9)

// Remove o primeiro e segundo elemento
array.splice(0,2)

// Remove o penúltimo elemento e atribui ao novo array criado
let novo = array.splice(-2, 1)

// Imprime o arrays formatados
console.log(array)
console.log(novo)

//----------------------------------------------------

// Cria array de pessoas
let pessoas = ["Marlon", "João", "Gabriel", "Felipe"]

// Recorta os elementos 1 até 3 (sem contar o 3) e adiciona a um novo array
let pessoas_escolhidas = pessoas.slice(1,3)

// Imprime pessoas novas
console.log(pessoas_escolhidas)

// Novo array
let gerentes = ["Joseane", "Maria"]

// Cria novo array unificando outros 2
let supervisores = gerentes.concat(pessoas_escolhidas)

// Imprime em tela
console.log(supervisores)

//--------------------------------


//