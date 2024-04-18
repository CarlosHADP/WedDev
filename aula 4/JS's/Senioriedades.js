function calculo(){
    var nivel = document.getElementById("nivel").value.toLowerCase(); 
    var paragrafo = document.getElementById("resultado");

    switch(nivel){
        case "junior":
            paragrafo.innerText = `Seu salario vai ser de R$2300`
            break;
        case "pleno":
            paragrafo.innerText = `Seu salario vai ser de R$3000`
            break;
        case "senior":
            paragrafo.innerText = `Seu salario vai ser de R$6000`
            break;
        default:
            paragrafo.innerText = `Nao reconhecemos essa senioriedade.\nTalvez tenha escrito com acento, se for o caso retire-o por favor!`
    }
}