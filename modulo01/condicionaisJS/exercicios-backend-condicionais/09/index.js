const nota = 11;

if (nota >= 0 && nota < 4) {
  console.log(`Sua nota é: ${nota}. O estudante obteve o Conceito E`);
} else if (nota >= 4 && nota < 6) {
  console.log(`Sua nota é: ${nota}. O estudante obteve o Conceito D`);
} else if (nota >= 6 && nota < 8) {
  console.log(`Sua nota é: ${nota}. O estudante obteve o Conceito C`);
} else if (nota >= 8 && nota < 9) {
  console.log(`Sua nota é: ${nota}. O estudante obteve o Conceito B`);
} else if (nota >= 9 && nota <= 10) {
  console.log(`Sua nota é: ${nota}. O estudante obteve o Conceito A`);
} else {
  console.log("Valor informado é invalido! Só é permitido de 0 a 10.0 na nota!");
}
