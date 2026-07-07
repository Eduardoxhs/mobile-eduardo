function range(inicio, fim) {
    let array = [];
    for (let i = inicio; i <= fim; i++) {
        array.push(i);
    }
    return array;
}
function soma(array) {
    let total = 0;

    for (let numero of array) {
        total += numero;
    }
    return total;
}
console.log(range(1, 10));
console.log("Soma:", soma(range(1, 10)));
