const carrinho = [
    {
    nome: "Caderno",
    preco: 18.90,
    quantidade: 3
    },
    {
    nome: "Caneta",
    preco: 2.50,
    quantidade: 10
    },
    {
    nome: "Mochila",
    preco: 149.90,
    quantidade: 1
    },
    {
    nome: "Borracha",
    preco: 1.20,
    quantidade: 4
    }
];


const subtotais = carrinho.map(
    ({preco, quantidade}) => preco * quantidade
);


console.log("Subtotais:");
console.log(subtotais);

let total = 0;

subtotais.forEach((valor) => {
    total += valor;
});


console.log(
    "Total: R$",
    total.toFixed(2)
);

const produtosCaros = carrinho
    .filter(
({preco, quantidade}) =>
        preco * quantidade > 100
    )
    .map(({nome}) => nome);


console.log(produtosCaros);