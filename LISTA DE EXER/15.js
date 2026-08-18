const produtos = [
   { id: 1, nome: "Teclado", preco: 80 },
   { id: 2, nome: "Mouse", preco: 50 },
   { id: 3, nome: "Monitor", preco: 900 },
   { id: 4, nome: "Headset", preco: 150 },
   { id: 5, nome: "Webcam", preco: 120 }
];
const produto = produtos.find(p => p.id === 3);
console.log(produto);
const caros = produtos.filter(p => p.preco > 100);
console.log(caros);
const nomes = produtos.map(p => p.nome);
console.log(nomes);
produtos.forEach(p => {
   console.log(`ID: ${p.id} | Nome: ${p.nome} | Preço: R$${p.preco}`);
});