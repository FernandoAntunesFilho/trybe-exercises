// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um    triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
    // Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

let angulo1 = 90;
let angulo2 = 45;
let angulo3 = 45;
let somaAngulo = angulo1 + angulo2 + angulo3;
let triangulo = somaAngulo == 180;

if (triangulo == true) {
    console.log("Parabéns, temos um triangulo");
}
else {
    console.log("ATENÇÃO!! Isso não é um triangulo");
}