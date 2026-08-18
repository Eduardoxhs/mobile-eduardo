function range(inicio, fim) {
   const numeros = [];
   for (let i = inicio; i <= fim; i++) {
       numeros.push(i);
   }
   return numeros;
}
function soma(array) {
   let total = 0;
   for (const numero of array) {
       total += numero;
   }
   return total;
}
console.log(soma(range(1, 10)));