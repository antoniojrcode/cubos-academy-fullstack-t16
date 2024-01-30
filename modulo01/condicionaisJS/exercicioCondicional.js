//exercicio 1

// const valorProduto = 100;
// const unidade = (valorProduto === 1 ? "real" : "reais"); 
// const numeroParcelas = 3;

// if (numeroParcelas === 1) {
//   // à vista -10% de desconto
//   const desconto = valorProduto - (valorProduto * 0.1);
//   console.log(`O produto custará de ${valorProduto} ${unidade} por ${desconto} ${unidade} com desconto!`);
// } else {
//   // parcelado
//   const parcelado = (valorProduto / numeroParcelas).toFixed(2);
//   console.log(`O produto no valor de ${valorProduto} ${unidade} será parcelado em ${numeroParcelas}x de ${parcelado} ${unidade}`);
// }

//exercicio 2

const valorProduto = 100;
const unidade = (valorProduto === 1 ? "real" : "reais"); 
const numeroParcelas = 13;

if (numeroParcelas === 1) {
  // à vista -10% de desconto
  const desconto = valorProduto - (valorProduto * 0.1);
  console.log(`O produto custará de ${valorProduto} ${unidade} por ${desconto} ${unidade} com desconto!`);
} else if (numeroParcelas >= 2 && numeroParcelas <=6){
  // parcelado 2x a 6x
  let parcelado = (valorProduto / numeroParcelas).toFixed(2);
  console.log(`O produto no valor de ${valorProduto} ${unidade} será parcelado em ${numeroParcelas}x de ${parcelado} ${unidade}`);
} else if (numeroParcelas >= 7 && numeroParcelas <=12) {
  // parcelado 7x a 12x
  const valorJuros = valorProduto * (1 + 0.01)**numeroParcelas;

  parcelado = (valorJuros / numeroParcelas).toFixed(2);
  console.log(`O seu produto foi parcelado em ${numeroParcelas}x de R$${parcelado}`)
} else {
  // parcelado acima de 12x
  console.log(`No momento não aceitamos parcelas acima de 12x!`)
}