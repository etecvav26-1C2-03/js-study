let soma = 0;

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i + " é par");
        soma = soma + 2;
    }
}

console.log("Soma dos pares: " + soma);
