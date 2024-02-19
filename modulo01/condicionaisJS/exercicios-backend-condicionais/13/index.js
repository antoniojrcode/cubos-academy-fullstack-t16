//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debit";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorFinal;

if (tipoDePagamento.toUpperCase() === "CREDITO") {
  valorFinal = valorDoProduto - (valorDoProduto * 0.05);
  console.log(`Você pagou no crédito!`);
  console.log(`Valor do produto R$${valorDoProduto.toFixed(2)}`);
  console.log(`Valor com 5% de DESCONTO R$${valorFinal.toFixed(2)}`);
} else if (tipoDePagamento.toUpperCase() === "CHEQUE") {
  valorFinal = valorDoProduto - (valorDoProduto * 0.03);
  console.log(`Você pagou no cheque!`);
  console.log(`Valor do produto R$${valorDoProduto.toFixed(2)}`);
  console.log(`Valor com 3% de DESCONTO R$${valorFinal.toFixed(2)}`);
} else if (tipoDePagamento.toUpperCase() === "DEBITO" || tipoDePagamento.toUpperCase() === "DÉBITO" || tipoDePagamento.toUpperCase() === "DINHEIRO") {
  valorFinal = valorDoProduto - (valorDoProduto * 0.10);
  console.log(`Você escolheu pagar à vista.`);
  console.log(`Valor do produto R$${valorDoProduto.toFixed(2)}`);
  console.log(`Valor com 10% de DESCONTO R$${valorFinal.toFixed(2)}`);
} else {
  console.log(`Sua forma de pagamento ainda não é aceita no momento!`);
}
