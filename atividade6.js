// 6 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

let entrada = 3;

if (entrada === 1) {
  console.log("Bom domingo!");
}
else if (entrada === 2) {
  console.log("Boa segunda-feira!");
}
else if (entrada === 3) {
  console.log("Boa terça-feira!");
}
else if (entrada === 4) {
  console.log("Boa quarta-feira!");
}
else if (entrada === 5) {
  console.log("Boa quinta-feira!");
}
else if (entrada === 6) {
  console.log("Boa sexta-feira!");
}
else if (entrada === 7) {
  console.log("Bom sábado!");
} else {
  console.log ("ERROR 404")
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
