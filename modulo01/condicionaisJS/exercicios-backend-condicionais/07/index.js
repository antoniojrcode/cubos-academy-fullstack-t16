const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2000000; //emCentavos
const redimentoMinimo = 2855970;

//seu código aqui

//Nesse IF ele verifica se as duas variáveis são True
if (aposentada || portadoraDeDoenca) {
  console.log("ISENTA");
} else if (totalDeRendimentos < redimentoMinimo) {
  console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else {
  console.log("PEGA LEAO");
}