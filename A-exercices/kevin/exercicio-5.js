function precoComDesconto(preco, percentual) {
    return preco - (preco * percentual / 100);
}

function formatarReais(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ",");
}

console.log(formatarReais(precoComDesconto(200, 10)));
console.log(formatarReais(precoComDesconto(80, 25)));
