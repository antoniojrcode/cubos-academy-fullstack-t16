const jogada1 = "Tesoura"
const jogada2 = "pedra"

//seu código aqui

if (jogada1.toUpperCase() === jogada2.toUpperCase()) {
  console.log(`Empate!`);
} else if ((jogada1.toUpperCase() == "PEDRA" && jogada2.toUpperCase() == "TESOURA") || 
(jogada2.toUpperCase() == "PEDRA" && jogada1.toUpperCase() == "TESOURA")) {
  console.log("PEDRA ganha de Tesoura");
} else if ((jogada1.toUpperCase() == "PAPEL" && jogada2.toUpperCase() == "PEDRA") || 
(jogada2.toUpperCase() == "PAPEL" && jogada1.toUpperCase() == "PEDRA")) {
  console.log("Papel ganha de PEDRA");
} else if ((jogada1.toUpperCase() == "TESOURA" && jogada2.toUpperCase() == "PAPEL") || 
(jogada2.toUpperCase() == "TESOURA" && jogada1.toUpperCase() == "PAPEL")) {
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