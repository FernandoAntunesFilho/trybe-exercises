// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let valor = 42;

if (valor > 0) {
    console.log (valor, "é maior que 0");
}
else if (valor < 0) {
    console.log (valor, "é menor que 0");
}
else {
    console.log ("O valor informado é 0");
}