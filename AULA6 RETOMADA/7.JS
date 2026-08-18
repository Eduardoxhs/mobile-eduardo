const produtos = [
    {
    nome: "Teclado",
    preco: 120,
    estoque: 8,
    categoria: "periferico"
    },
    {
    nome: "Mouse",
    preco: 60,
    estoque: 25,
    categoria: "periferico"
    },
    {
    nome: "Monitor",
    preco: 900,
    estoque: 0,
    categoria: "tela"
    },
    {
    nome: "Headset",
    preco: 250,
    estoque: 4,
    categoria: "periferico"
    },
    {
    nome: "Notebook",
    preco: 3500,
    estoque: 2,
    categoria: "computador"
    }
];


function listarPorCategoria(produtos, categoria){

    const lista = produtos
    .filter(
        ({categoria: cat, estoque}) =>
        cat === categoria && estoque > 0
    )
    .map(
        ({nome, preco}) =>
        `${nome} - R$ ${preco.toFixed(2)}`
    );


    if(lista.length === 0){
    return [
        "Nenhum produto disponivel nesta categoria."
    ];
    }


    return lista;
}


console.log(listarPorCategoria(produtos, "periferico"));

console.log(listarPorCategoria(produtos, "tela"));

console.log(listarPorCategoria(produtos, "livro"));