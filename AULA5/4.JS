const produtos = [
    { nome: "Arroz", preco: 25 },
    { nome: "Feijão", preco: 12 },
    { nome: "Macarrão", preco: 8 },
    { nome: "Óleo", preco: 15 }
];

for (const produto of produtos) {
    console.log(`${produto.nome} - R$ ${produto.preco}`);
}