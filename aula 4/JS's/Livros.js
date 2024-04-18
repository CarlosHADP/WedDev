function calcular(){
    var calc = parseInt(document.getElementById('number').value);
    var resultado = document.getElementById('resultado');
    
    var seusLivros = (calc <= 1) ?"Seu livro deu":"Seus livros";

    if (calc <= 7){
        var soma = calc*22;
        resultado.innerText =`${seusLivros} um total de R$${soma}`;
    }else{
        var soma = calc*15;
        resultado.innerText = `Seus livros dao um total de R$${soma}`;
    }

}