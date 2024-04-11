
function soma(){
    var n1 = parseFloat(document.getElementById('number1').value);
    var n2 = parseFloat(document.getElementById('number2').value);
    var resultadoSoma = document.getElementById('soma');
    var somar = n1 + n2;

    resultadoSoma.innerText = somar;
}

function sub(){
    var n1 = parseFloat(document.getElementById('number1').value);
    var n2 = parseFloat(document.getElementById('number2').value);
    var resultadoSub = document.getElementById('sub');
    var subtrair = n1 / n2;
    
    resultadoSub.innerText = subtrair;
}

function mult(){
    var n1 = parseFloat(document.getElementById('number1').value);
    var n2 = parseFloat(document.getElementById('number2').value);
    var resultadoMult = document.getElementById('mult');
    var multiplicar = n1 * n2;

    resultadoMult.innerText = multiplicar;
}

function div(){
    var n1 = parseFloat(document.getElementById('number1').value);
    var n2 = parseFloat(document.getElementById('number2').value);
    var resultadoDiv = document.getElementById('div');
    var dividir = n1 / n2; 
    
    resultadoDiv.innerText = dividir;

}