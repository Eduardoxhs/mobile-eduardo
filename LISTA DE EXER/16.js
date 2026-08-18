const alunos = [
   { nome: "Ana", nota: 8 },
   { nome: "Bruno", nota: 6 },
   { nome: "Carlos", nota: 9 },
   { nome: "Daniela", nota: 7 },
   { nome: "Eduardo", nota: 5 }
];
const boletim = alunos.map(aluno => ({
   ...aluno,
   situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
}));
console.log(boletim);
const aprovados = boletim.filter(aluno => aluno.situacao === "Aprovado");
console.log(`Aprovados: ${aprovados.length}`);
const media = alunos.reduce((soma, aluno) => soma + aluno.nota, 0) / alunos.length;
console.log(`Média da turma: ${media.toFixed(2)}`);