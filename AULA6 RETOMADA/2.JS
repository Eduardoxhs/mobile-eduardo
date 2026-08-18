const palavras = [
    "sol",
    "computador",
    "rede",
    "programacao",
    "bit",
    "algoritmo"
];

const maiores = palavras.filter((palavra) => palavra.length > 5);

console.log(maiores);
console.log("Quantidade:", maiores.length);