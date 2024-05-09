// const pessoas = ["Caio", "Carlos", "Fulano", 15,true]

function escolhaComp(){
    const jokenpo = ["Pedra", "Papel", "Tesoura"];
    let numAleatorio = Math.floor(Math.random() * jokenpo.length);
    return jokenpo[numAleatorio];

}


function jogar(escolhaUser){
    let escolhaPc = escolhaComp()
    console.log(escolhaPc)
    if(escolhaUser === escolhaPc){
        resultado = "Empatei";
    }else if ((escolhaUser === "Papel" && escolhaPc === "Tesoura") ||
    (escolhaUser === "Pedra" && escolhaPc === "Papel") ||
    (escolhaUser === "Tesoura" && escolhaPc === "Pedra") ){
        resultado = "Perdeu!"
    }else{
        resultado = `O computador escolheu ${escolhaPc} \n Voce escolheu${escolhaUser} \n GANHOU!!`
    }

    document.getElementById('Resultado').innerText = resultado;
}