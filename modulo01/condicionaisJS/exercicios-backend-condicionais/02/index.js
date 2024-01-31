const jogada1 = 5;
const jogada2 = 7;
const soma = jogada1 + jogada2; //soma dos dois valores das constantes.

//seu código aqui

if (soma % 2 === 0) { //Expressão para verificar se o valor é par.
  console.log(`Jogador 1 ganhou! ${soma} é par!`);
} else {
  console.log(`Jogador 2 ganhou! ${soma} é ímpar!`);
}