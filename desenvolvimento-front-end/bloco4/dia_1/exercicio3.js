// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let valor1 = 4;
let valor2 = 5;
let valor3 = 3;

if (valor1 > valor2 && valor1 > valor3) {
    console.log (valor1, "é o maior valor")
}
else if (valor2 > valor1 && valor2 > valor3) {
    console.log (valor2, "é o maior valor")
}
else {
    console.log (valor3, "é o maior valor")
}