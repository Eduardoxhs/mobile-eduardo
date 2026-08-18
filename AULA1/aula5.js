const nota1 = 7;
const nota2 = 5;
const nota3 = 6;

const mediaFinal = (nota1 + nota2 + nota3) / 3;

if (mediaFinal >= 7) {
  console.log(`Aprovado com média ${mediaFinal}`);
} else if (mediaFinal >= 5) {
  console.log(`Recuperação com média ${mediaFinal}`);
} else {
  console.log(`Reprovado com média ${mediaFinal}`);
}
