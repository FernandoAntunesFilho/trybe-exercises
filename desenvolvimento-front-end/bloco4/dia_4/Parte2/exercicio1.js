
function verificaPalindromo(a){
    let palindromo = ""

    for (i=a.length-1; i>=0; i-=1){
        palindromo = palindromo + a.substr(i,1);
    }

    if (palindromo === a) {
        return true
    }
    else{
        return false
    }
    //console.log(palindromo)
}

console.log(verificaPalindromo("arara"));