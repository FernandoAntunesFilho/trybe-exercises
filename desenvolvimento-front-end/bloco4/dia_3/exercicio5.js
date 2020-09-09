let n = 7;
let linhaCompleta = "";
let linhaLadoEsquerdo = "";
let linhaLadoDireito = "";
let LinhaMeio = "";
let diferenca = 0;
let meio = 0;
let ultimaLinha = "";
let primeiraLinha = "";

meio = Math.ceil(n/2);
diferenca = n-meio;

//Looping para formar a primeira linha
for (let i = 1; i <= diferenca; i += 1) {
    linhaLadoEsquerdo += "X";
    linhaLadoDireito += "X";
}
LinhaMeio = "8";
primeiraLinha = linhaLadoEsquerdo + LinhaMeio + linhaLadoDireito;
console.log(primeiraLinha);

LinhaMeio = "";
//Looping para formar o meio do triangulo
for (let i = 3; i < n; i+=2) {
    LinhaMeio += "X";
    linhaLadoEsquerdo = "8";
    linhaLadoDireito = "8";
    linhaCompleta = linhaLadoEsquerdo + LinhaMeio + linhaLadoDireito;
    console.log(linhaCompleta);
}
LinhaMeio = "";

//Looping para formar a última linha
for (let i=1; i <= n; i += 1) {
    ultimaLinha += "8";
}
console.log(ultimaLinha);