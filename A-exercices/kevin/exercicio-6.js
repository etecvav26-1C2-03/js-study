const precos = [30, 80, 55, 120, 20];

const acimaDe50 = precos.filter(function(preco) {
    return preco > 50;
});

console.log(acimaDe50.join(", "));
