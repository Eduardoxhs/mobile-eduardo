const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 6.0 },
    { nome: "Carla", nota: 9.2 },
    { nome: "Diego", nota: 4.0 },
    { nome: "Eduarda", nota: 7.0 }
];

const aprovados = alunos
    .filter((aluno) => aluno.nota >= 7)
    .map((aluno) => aluno.nome);
console.log("Aprovados:");

aprovados.forEach((nome) => {
console.log(nome);
});

const reprovados = alunos.filter(
    (aluno) => aluno.nota < 7
);

console.log(
    "Quantidade de reprovados:",
    reprovados.length
);


const resultado = alunos.map(({nome, nota}) => {

    if(nota >= 7){
return `${nome} - APROVADA`;
    }

    return `${nome} - REPROVADO`;
});

console.log(resultado);