let array = [2, 3, 2, 5, 8, 2, 3];

function maisRepetido(a){
let contaRepeticao = 0;
let maiorRepeticao = 0;
let numeroMaisRepetido = 0;

    for (key in a){
        for (k in a){
            if (k != key){
                if (a[key] === a[k]){
                    contaRepeticao = contaRepeticao + 1;                    
                }
                if (contaRepeticao > maiorRepeticao){
                    numeroMaisRepetido = a[key];
                    maiorRepeticao = contaRepeticao;
                }
            }
        }
    contaRepeticao = 0;
    }
//console.log(maiorRepeticao);
return numeroMaisRepetido;
}

console.log(maisRepetido(array));