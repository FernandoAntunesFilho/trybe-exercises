let word = "Trybe";
let ending = "be";
//let word = "joaofernando";
//let ending = "fernan";

function verificaFimPalavra(comeco, fim){
    let contaFim = fim.length;

    if (comeco.substr(comeco.length-fim.length, fim.length)===fim){
        return true;
    }
    else {
        return false;
    }
}

console.log(verificaFimPalavra(word,ending));