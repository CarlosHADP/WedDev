function clicar(){
    var n1 = parseFloat(document.getElementById('number1').value);
    var n2 = parseFloat(document.getElementById('number2').value);
    var resultado = document.getElementById('resultado');





    var soma = n1 + n2;
    
    resultado.innerText = soma;
}


