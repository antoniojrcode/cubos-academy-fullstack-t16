const idade = 17;
const possuiPatologia = false;
const altura = 150;
const ehEstudante = true;

//inicio do código

if (idade >= 12 && idade <= 65) {
  if (possuiPatologia) {
    console.log("ACESSO NEGADO! Por questões de saúde, você não poderá brincar aqui!");
  } else if (altura >= 150) { //maior que 150cm de altura
    if (ehEstudante && idade < 18) {
      console.log("Você pagará o ingresso MEIA no valor de R$10,00");
    } else {
      console.log("Você pagará o ingresso INTEIRA no valor de R$20,00");
    }
  } else {
    console.log(`ACESSO NEGADO! Sua altura não pode ser inferior a 150cm.`);
  }
} else {
  console.log(`ACESSO NEGADO! sua idade de ${idade} não é permitida nesse brinquedo!`);
}

