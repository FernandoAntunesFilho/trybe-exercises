let array = [2,4,6,7,10,0,-3]


function retornaMenorIndice (a){
    let menorValor = "";
    let indiceDoMenorValor = "";

    for (k in a){
        if (a[k] < menorValor){
            menorValor = a[k];
            indiceDoMenorValor = k;
        }
    }
return indiceDoMenorValor;
}

console.log(retornaMenorIndice(array));