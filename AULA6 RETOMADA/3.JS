const numeros = [1,2,3,4,5,6,7,8,9,10];

// Usando for e if
const resultadoFor = [];

for(let i = 0; i < numeros.length; i++){
if(numeros[i] % 2 === 0){
    resultadoFor.push(numeros[i] * 10);
}
}

console.log("Com for:", resultadoFor);


// Usando filter + map
const resultadoMetodo = numeros
.filter((numero) => numero % 2 === 0)
  .map((numero) => numero * 10);

console.log("Com filter + map:", resultadoMetodo);


console.log(
"Resultados iguais:",
JSON.stringify(resultadoFor) === JSON.stringify(resultadoMetodo)
);