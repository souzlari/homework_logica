// 6 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

let entrada = 12;

if (entrada === 1) {
  console.log("Bom domingo!");
}
if (entrada === 2) {
  console.log("Boa segunda-feira!");
}
if (entrada === 3) {
  console.log("Boa terça-feira!");
}
if (entrada === 4) {
  console.log("Boa quarta-feira!");
}
if (entrada === 5) {
  console.log("Boa quinta-feira!");
}
if (entrada === 6) {
  console.log("Boa sexta-feira!");
}
if (entrada === 7) {
  console.log("Bom sábado!");
}

//opção 2

switch (entrada) {
  case 1:
    console.log("Bom domingo!");
    break;
  case 2:
    console.log("Boa segunda-feira!");
    break;
  case 3:
    console.log("Boa terça-feira!");
    break;
  case 4:
    console.log("Boa quarta-feira!");
    break;
  case 5:
    console.log("Boa quinta-feira!");
    break;
  case 6:
    console.log("Boa sexta-feira!");
    break;
  case 7:
    console.log("Bom sábado!");
    break;
  default:
    console.log("ERROR 404");
}
