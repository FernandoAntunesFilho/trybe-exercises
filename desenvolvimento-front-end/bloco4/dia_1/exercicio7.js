// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
//     Porcentagem >= 90 -> A
//     Porcentagem >= 80 -> B
//     Porcentagem >= 70 -> C
//     Porcentagem >= 60 -> D
//     Porcentagem >= 50 -> E
//     Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let notaPorcento = 101;
// console.log(notaPorcento);

if (notaPorcento < 50 && notaPorcento >= 0) {
    console.log("Sua nota",notaPorcento,"equivale a F")
}
else if (notaPorcento >= 50 && notaPorcento < 60) {
    console.log("Sua nota",notaPorcento,"equivale a E")
}
else if (notaPorcento >= 60 && notaPorcento < 70) {
    console.log("Sua nota",notaPorcento,"equivale a D")
}
else if (notaPorcento >= 70 && notaPorcento < 80) {
    console.log("Sua nota",notaPorcento,"equivale a C")
}
else if (notaPorcento >= 80 && notaPorcento < 90) {
    console.log("Sua nota",notaPorcento,"equivale a B")
}
else if (notaPorcento >= 90 && notaPorcento <= 100){
    console.log("Sua nota",notaPorcento,"equivale a A")
}
else {
    console.log(notaPorcento,"é uma nota inváida")
}