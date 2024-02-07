const diaDaSemana = 9;

if (diaDaSemana >= 1 && diaDaSemana <= 7) {
  switch(diaDaSemana) {
    case 1 :
      console.log("Hoje é segunda-feira");
      break;
    case 2 :
      console.log("Hoje é terça-feira");
      break;
    case 3 :
      console.log("Hoje é quarta-feira");
      break;
    case 4 :
      console.log("Hoje é quinta-feira");
      break;
    case 5 :
      console.log("Hoje é sexta-feira");
      break;
    case 6 :
      console.log("Hoje é sábado");
      break;
    case 7 :
      console.log("Hoje é domingo");
      break;
  }
} else {
  console.log(`O valor ${diaDaSemana} não é um dia da semana!`);
}