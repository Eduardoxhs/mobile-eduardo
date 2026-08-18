const readline = require("readline-sync");
let numero = readline.questionInt("Digite um número: ");
for (let i = numero; i >= 1; i--) {
   console.log(i);
}
console.log("Fim!");
