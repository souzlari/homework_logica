// 3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let jantar = 300;
let taxa = jantar * (10 / 100);
let total = jantar + taxa;

console.log(`A taxa custa R$ ${taxa} / o valor da conta é R$ ${total}`);
