let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(a){
    let contaLetras = 0;
    let nomeComMaisLetras = "";
    
    for (k in a){
        let nome = a[k];

        if (nome.length > contaLetras) {
            contaLetras = nome.length;
            nomeComMaisLetras = nome;
        }
    }

    //return contaLetras;
    return nomeComMaisLetras;
}

console.log(maiorNome(array));