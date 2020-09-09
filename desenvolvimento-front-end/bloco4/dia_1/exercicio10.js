let custo = 210;
let valorVenda = 275;
let custoTotal = 0;
let lucro = 0;

if (custo < 0 || valorVenda < 0) {
    console.log("ATENÇÃO!!! Erro na entrada de valores")
}
else {
    custoTotal = custo + custo * 0.2;
    lucro = valorVenda - custoTotal;

    // console.log(custoTotal)
    console.log("O lucro da venda foi de", lucro * 1000);
}
