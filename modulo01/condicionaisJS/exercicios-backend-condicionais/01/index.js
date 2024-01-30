const jogada1 = "tesoura"
const jogada2 = "tesoura"

//seu código aqui

if (jogada1 === jogada2) {
  console.log(`Empate!`);
} else if ((jogada1 == "pedra" && jogada2 == "tesoura") || (jogada2 == "pedra" && jogada1 == "tesoura")) {
  console.log("Pedra ganha de Tesoura");
} else if ((jogada1 == "papel" && jogada2 == "pedra") || (jogada2 == "papel" && jogada1 == "pedra")) {
  console.log("Papel ganha de Pedra");
} else if ((jogada1 == "tesoura" && jogada2 == "papel") || (jogada2 == "tesoura" && jogada1 == "papel")) {
  console.log("Tesoura ganha de Papel");
} else {
  console.log("Valor digitado é inválido");
}

// versão não otimizada kkkk
// if (jogada1 === jogada2) {
//   console.log(`Empate!`);
// } else if (jogada1 === "pedra" && jogada2 === "tesoura") {
//   console.log(`${jogada1} ganha de ${jogada2}`);
// } else if (jogada1 === "papel" && jogada2 === "pedra") {
//   console.log(`${jogada1} ganha de ${jogada2}`);
// } else if (jogada1 === "tesoura" && jogada2 === "papel") {
//   console.log(`${jogada1} ganha de ${jogada2}`);
// } else if (jogada2 === "pedra" && jogada1 === "tesoura") {
//   console.log(`${jogada2} ganha de ${jogada1}`)
// } else if (jogada2 === "papel" && jogada1 === "pedra") {
//   console.log(`${jogada2} ganha de ${jogada1}`);
// } else if (jogada2 === "tesoura" && jogada1 === "papel") {
//   console.log(`${jogada2} ganha de ${jogada1}`);
// } else {
//   console.log(`valor inválido!`);
// }




//pedra ganha de tesoura
//papel ganha de pedra
//tesoura ganha de papel