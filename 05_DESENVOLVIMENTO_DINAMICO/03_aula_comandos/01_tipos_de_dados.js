// Cria uma variável do tipo number
let variavel = "Marlon"

// Imprime na tela o tipo da variável criada
console.log(typeof(variavel))

// Verificar se variável é string
if (typeof(variavel) === "string"){
    // Se for string, imprime variável em maiúscula
    console.log(variavel.toUpperCase())
}else{
    // Se não for string, imprime aviso de erro 
    console.log("Erro: É necessário que variável seja uma string")
}