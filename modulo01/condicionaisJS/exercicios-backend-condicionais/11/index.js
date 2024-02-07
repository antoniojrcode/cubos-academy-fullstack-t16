//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 2000;

// calcula o valor da parcela do curso em 18%
const valorParcelaCurso = rendaMensalEmCentavos * 0.18;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 51;

// Soma das parcelas já pagas pelo aluno nos meses anteriores 
//(em centavos). Se for igual a 18 mil reais, o aluno não deve 
//pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = mesesDecorridos * valorParcelaCurso;

if (mesesDecorridos <= 60) {
  if (rendaMensalEmCentavos >= 2000) {
    if (totalJaPagoPeloAluno < 18000) {
      console.log(`O seu salário atual é R$${rendaMensalEmCentavos}`);
      console.log(`Valor da parcela R$${valorParcelaCurso}`); 
    } else {
      console.log(`Você já pagou R$${totalJaPagoPeloAluno} dos R$18.000 do seu curso e ele está quitado!`);
    }
  } else {
    console.log(`Seu salário atual é inferior a R$2000`);
  }
} else {
  console.log(`Sua dívida está perdoada, pois já foram pagos ${mesesDecorridos} meses dos 60 meses de contrato`);
}


