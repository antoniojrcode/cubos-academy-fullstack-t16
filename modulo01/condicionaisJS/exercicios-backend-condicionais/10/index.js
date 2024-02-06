const caractere = "a";

if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
  console.log("Vogal maiúscula");  
} else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
  console.log("Vogal minúscula");
} else if (isNaN(caractere) === false) { //isNaN() vai verificar que se for um número, ele vai retornar "false"
  console.log("isso é um Número");
} else {
  console.log("A letra é uma consoante!");
}