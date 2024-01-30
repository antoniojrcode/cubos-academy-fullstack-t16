let tenis = 129.99
let carteira = 80
let valorDesconto;
let resultado;

valorDesconto = tenis - carteira;
const desconto = (valorDesconto / tenis) * 100;

console.log(desconto.toFixed(2))