let n = 5;
let linhaCompleta = "";
let linhaLadoEsquerdo = "";
let linhaLadoDireito = "";
let LinhaMeio = "";
let diferenca = 0;
let meio = 0;

meio = Math.ceil(n/2);

for (let i = 1; i <= n; i += 2) {
    for (let j = 1; j <= i; j += 1) {
        LinhaMeio = LinhaMeio + "*";
    } 
    
    diferenca = n-meio;
    for (diferenca; diferenca>0; diferenca -= 1){
        linhaLadoEsquerdo = linhaLadoEsquerdo +" "
        linhaLadoDireito = linhaLadoDireito +" "
    }

    meio = meio + 1
    linhaCompleta = linhaLadoEsquerdo + LinhaMeio + linhaLadoDireito;
    console.log(linhaCompleta)
    linhaCompleta = "";
    linhaLadoEsquerdo = "";
    LinhaMeio = "";
    linhaLadoDireito = "";

}