let n = 5;
let linha = "";

for (let i = 1; i <= n; i += 1) {
    
    for (let j = 1; j <= n - i; j += 1){
        linha = linha + " ";
    }
    
    let diferenca = n - linha.length;

    for (a = 1; a <= diferenca; a += 1){
        linha = linha + "*"
    }

    console.log(linha);
    linha = "";
}