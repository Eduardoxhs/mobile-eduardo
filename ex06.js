const readline = require("readline-sync");
const numero = readline.questionInt("escreva o numero: ");
for (let i = numero; i >= 1; i--) {
  console.log(i);
}

console.log("Final!!");