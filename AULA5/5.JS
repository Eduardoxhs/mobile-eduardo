const produtos = [
    { nome: "Arroz", preco: 25 },
    { nome: "Carne", preco: 80 },
    { nome: "Queijo", preco: 60 },
    { nome: "Macarrão", preco: 8 }
];

const nomes = produtos
    .filter(produto => produto.preco > 50)
    .map(produto => produto.nome);

console.log(nomes);