let carros = {
  modelo: "Ford KA",
  marca: "Ford",
  ano: 2020,
};

// Usa for in para percorrer o objeto carros e imprimir suas características
for (let caracteristica in carros) {
  console.log(`${caracteristica.toUpperCase()}: ${carros[caracteristica]}`);
}

// Transforma carros em um array de objetos
carros = [
  {
    modelo: "Ford KA",
    marca: "Ford",
    ano: 2020,
  },
  {
    modelo: "Wolkswagen Gol",
    marca: "Wolkswagen",
    ano: 2017,
  },
];

// Percorre os objetos e imprime eles
for (let carro in carros) {
  console.log(carros[carro]);
}
