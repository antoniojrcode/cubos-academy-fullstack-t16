const valorProduto = 100;
const unidade = (valorProduto === 1 ? "real" : "reais"); 
const numeroParcelas = 3;

if (numeroParcelas === 1) {
  // à vista -10% de desconto
  const desconto = valorProduto - (valorProduto * 0.1);
  console.log(`O produto custará de ${valorProduto} ${unidade} por ${desconto} ${unidade} com desconto!`);
} else {
  // parcelado
  const parcelado = (valorProduto / numeroParcelas).toFixed(2);
  console.log(`O produto no valor de ${valorProduto} ${unidade} será parcelado em ${numeroParcelas}x de ${parcelado} ${unidade}`);
}