

function chutar () {
    var numeroSecreto = parseInt(Math.random()*11) ;
    var chute = parseInt(document.getElementById("valor").value);
    var pickRes = document.getElementById("resultado");
    if (chute == numeroSecreto){
        pickRes.innerHTML = "ACERTOU!"
    }else if(chute > 10 || chute < 0) {
        pickRes.innerHTML = "NUMERO INVALIDO!"
    }else{
        pickRes.innerHTML = `Você errou, o numero era ${numeroSecreto}`
    }
}