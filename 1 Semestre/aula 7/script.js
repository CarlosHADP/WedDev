const pessoas = ["Fulano", "Ciclano", "Beltrano"];
// Adiciona elemento
// pessoas.push("Carlos")

// // Remove o ultimo elemento
// pessoas.pop()

// // Adiciona elemento no inicio do array
// pessoas.unshift("Carlos1")

// // Remove o primeiro elemento do array
// pessoas.shift()


// // Atualiza o valor do array
// pessoas[1] = "Carlos2"

// console.log(pessoas)
 

// for (i=0; i<10; i++){
//     console.log(pessoas[i])
// }

pessoas.forEach(
    function rodarArray(user){
        console.log(user.toLowerCase())
    }

);

// pessoas.forEach( usuario => console.log(usuario.toLowerCase()))

// pessoas.map(usuario => usuario.toLowerCase())


function modificarPessoas(){
    return pessoas.map(usuario => usuario.toLowerCase())
}

const filmes = [{
    nome: "Carlos",
    idade: 18,
    presenteFuturo: "genio, rico"
},
{
    nome: "Carlos",
    idade: 18,
    presenteFuturo: "genio, rico"
},
{
    nome: "Carlos",
    idade: 18,
    presenteFuturo: "genio, rico"
}]


const filmesModificado =
filmes.map(filme => filme.nome)

const filter = filmes.filter(filme => filme.idade > 15)

console.log(filter)