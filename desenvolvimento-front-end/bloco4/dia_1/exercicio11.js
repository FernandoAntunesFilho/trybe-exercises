let salarioBruto = 5560;
let salarioLiquido = 0;
let inss = 0;
let ir = 0;
let salarioBase = 0;

// CÁLCULO DO INSS
if (salarioBruto >= 0 && salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
}
else if (salarioBruto > 5189.82) {
    inss = 570.88;
}
else {
    console.log(`ATENÇÃO!! Salário Bruto não pode ser menor que 0`)
    return;
}

salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
    ir = 0;
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    ir = (salarioBase * 0.075) - 142.8;
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    ir = (salarioBase * 0.15) - 354.8;
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    ir = (salarioBase * 0.225) - 636.13;
}
else {
    ir = (salarioBase * 0.275) - 869.36;
}

salarioLiquido = salarioBase - ir

console.log(`Salário Bruto ${salarioBruto}`);
// console.log(`INSS ${inss}`);
// console.log(`Salário Base ${salarioBase}`);
// console.log(`IR ${ir}`);
console.log(`Salário Liquido a receber ${salarioLiquido}`);