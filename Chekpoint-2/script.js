function sim_18(){
    window.location.href = "site.vinheria"


}


function nao_18(){
    window.location.href = "https://www.instagram.com/roblox/";
}

// ------------------------------------------------------------------------

var verde = parseInt(0);
var vermelho = parseInt(0);
var amarelo = parseInt(0);
var azul = parseInt(0);
var g = parseInt(0);
var r = parseInt(0);
var y = parseInt(0);
var b = parseInt(0);


var quant;

function green(){
    verde+=26;
    g++
    var ver = document.getElementById("greenP");
    ver.innerText = `Quantidade de Itens= ${g}`;
}
function red(){
    vermelho+=22;
    r++
    var re = document.getElementById("redP");
}
function yellow(){
    amarelo+=18;
    y++
    var am = document.getElementById("yellowP");
}
function blue(){
    azul+=16;
    b++ 
    var az = document.getElementById("blueP");
}



// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
function calc(){
    quant= (vermelho+amarelo+azul+verde)
    var preco = document.getElementById("preco")
    preco.innerText = `O valor das suas compras foi de R$${quant}`
    
}
