const primeiroNome = "Mario";
const sobrenome = "José";
const apelido = "";

if (apelido) {
  console.log(apelido);
} else if (sobrenome) {
  console.log(`${primeiroNome} ${sobrenome}`);
} else {
  console.log(primeiroNome);
}