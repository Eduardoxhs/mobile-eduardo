const turma = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 7 },
    { nome: "Daniela", nota: 9 },
    { nome: "Eduardo", nota: 6 }
];


const aprovados = turma
    .filter(aluno => aluno.nota >= 6)
    .map(aluno => aluno.nome);

console.log("Aprovados:", aprovados);

let soma = 0;

for (const aluno of turma) {
    soma += aluno.nota;
}

const media = soma / turma.length;
console.log("Média da turma:", media);

const acimaDaMedia = turma.filter(aluno => aluno.nota > media);

console.log("Quantidade acima da média:", acimaDaMedia.length);