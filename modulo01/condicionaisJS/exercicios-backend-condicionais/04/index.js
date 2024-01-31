const ladoA = 7;
const ladoB = 7;

//seu código aqui

if (ladoA === ladoB && ladoA >= 0 && ladoA <= 6) { //verificar se é uma bucha(carrão)

  switch (ladoA) {
    case 0:
      console.log("Essa é uma bucha do tipo Branco");
      break;
    case 1:
      console.log("Essa é uma bucha do tipo Ás");
      break;
    case 2:
      console.log("Essa é uma bucha do tipo Duque");
      break;
    case 3:
      console.log("Essa é uma bucha do tipo Terno");
      break;
    case 4:
      console.log("Essa é uma bucha do tipo Quadra");
      break;
    case 5:
      console.log("Essa é uma bucha do tipo Quina");
      break;
    case 6:
      console.log("Essa é uma bucha do tipo Sena");
      break;
  }

} else {
  console.log("NÃO é uma bucha");
}