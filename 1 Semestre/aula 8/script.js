const btnCriar = document.querySelector("#btnCriar")
const inputUser = document.querySelector("#inputUser")
const listaFilmes = document.querySelector("#listaFilmes")

btnCriar.addEventListener("click", function(info) {
    info.preventDefault();
    // console.log(info.target.value)

    const novoFilme = document.createElement("li");
    novoFilme.innerText = inputUser.value;

    const btnEditar = document.createElement("button")
    btnEditar.innerText = "Editar"
    btnEditar.addEventListener("click", function(){
        novoFilme.style.color = "red";
        novoFilme.classList.toggle("fundoPreto")
    })
    
    listaFilmes.append(novoFilme)
    listaFilmes.append(btnEditar);

    inputUser.value = ""
})