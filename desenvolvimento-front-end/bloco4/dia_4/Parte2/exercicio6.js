let valorDeTeste = 5;

function somaDivergencia(valor){
    let soma = 0;

    for(i=1;i<=valor;i+=1){
        soma = soma + i;
    }

    return soma;
}

console.log(somaDivergencia(valorDeTeste));