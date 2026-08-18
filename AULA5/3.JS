function descricao(produto) {
    return `${produto.nome} custa R$ ${produto.preco} e tem ${produto.estoque} em estoque.`;
}

const produto1 = {
    nome: "Arroz",
    preco: 25,
    estoque: 40
};

const produto2 = {
    nome: "Feijão",
    preco: 12,
    estoque: 30
};

console.log(descricao(produto1));
console.log(descricao(produto2));