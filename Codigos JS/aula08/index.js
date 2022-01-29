const nome = 'Luiz Otávio';
const sobreNome = 'Miranda';
const idade = 30;
const alturaEmM = 1.80;
const peso = 84;
let imc;
let anoNascimento;

// Calculo do imc
imc = peso / (alturaEmM * alturaEmM);
// Cauculo da idade
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos pesa ${peso} Kg tem  ${alturaEmM} de altura e seu IMC é de ${imc} ${nome} nasceu em ${anoNascimento}`);