const precos = [30, 80, 55, 120, 20];

const acimaDe50 = precos.filter(function(preco) {
    return preco > 50;
});

console.log(acimaDe50.join(", "));

const comDesconto = acimaDe50.map(function(preco) {
    return preco - (preco * 10 / 100);
});

console.log(comDesconto.join(", "));

console.log(acimaDe50.length);

