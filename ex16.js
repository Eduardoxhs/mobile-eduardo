const alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 6 },
    { nome: "Pedro", nota: 9 },
    { nome: "Ana", nota: 5 },
    { nome: "Lucas", nota: 7 }
];
const boletim = alunos.map(aluno => {
    return {
        nome: aluno.nome,
        nota: aluno.nota,
        situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
    };
});
console.log("Boletim:", boletim);
const aprovados = boletim.filter(aluno => aluno.situacao === "Aprovado");
console.log("Quantidade de aprovados:", aprovados.length);
let somaNotas = 0;
alunos.forEach(aluno => {
    somaNotas += aluno.nota;
});
let media = somaNotas / alunos.length;
console.log("Média da turma:", media);