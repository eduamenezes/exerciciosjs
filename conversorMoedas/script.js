function converter (){
    //variaveis da conversão
   var valorReal = document.getElementById ('valor');
   var numReal = valorReal.value;
   var dolar = 5.25;
   var euro =  5.20;
   var resultadoDolar = numReal * dolar;
   var resultadoEuro = numReal * euro;
    
   //buscar elementos html

   var convertDolar = document.getElementById("convertidoDolar");
   var convertEuro  = document.getElementById("convertidoEuro");

   convertDolar.innerHTML = "O resultado da conversão em dólar foi R$ " + resultadoDolar;
   convertEuro.innerHTML = "O resultado da conversão em euro foi R$ " + resultadoEuro;
   


}