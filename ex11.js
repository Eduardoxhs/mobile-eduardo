function podeVotar(idade) {
    return idade >= 16;
}
let idade = 18;
if (podeVotar(idade)) {
    console.log("Pode votar");
} else {
    console.log("Não pode votar");
}
