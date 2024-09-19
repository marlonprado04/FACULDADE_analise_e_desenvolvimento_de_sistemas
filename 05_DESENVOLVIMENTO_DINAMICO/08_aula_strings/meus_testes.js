function remove_palavra(palavra, texto){
    // Pega posicao inicial
    let posicao_inicial = texto.indexOf(palavra)
    
    // Pega o tamanho da palavra
    let posicao_final = palavra.length + posicao_inicial

    // Cria novo texto concatenando as partes não removidas
    let texto_novo = texto.slice(0, posicao_inicial) + texto.slice(posicao_final);

    return texto_novo;
}

// Teste de uso
let resultado  = remove_palavra("Marlon","Oi Marlon! Tudo bem?");

console.log(resultado)