let array = [2,3,6,7,10,1]


function retornaMaiorIndice (a){
    let maiorValor = "";
    let indiceDoMaiorValor = "";

    for (k in a){
        if (a[k] > maiorValor){
            maiorValor = a[k];
            indiceDoMaiorValor = k;
        }
    }
return indiceDoMaiorValor;
}

console.log(retornaMaiorIndice(array));