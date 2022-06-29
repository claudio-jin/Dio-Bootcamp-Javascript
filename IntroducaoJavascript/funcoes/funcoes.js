//funcao autoinvocavel

(
    function() {
        let name = "ola claudio"
        return name
    }
)()

//A funcao ja sera invocada automaticamente

//funcao autoinvocavel com parametros
(
    function(a, b) {
        return a + b
    }
)(1, 2)

//ou

const soma3 = (
    function(a, b) {
        return a + b
    }
)(1, 2)

console.log(soma3)

//callbacks -> funcao passada para outra funcao

const cal = function(operacao, a, b) {
    return operacao(a, b)
}

const soma = function(a, b) {
    return a+b
}

const subtracao = function(a, b) {
    return a-b
}

const resultSoma = cal(soma, 1, 2)
const resultSub = cal(subtracao, 1, 2)

console.log(resultSoma)
console.log(resultSub)


//spread em arrays

function sum (x, y, z) {
    return x+y+z
}

const numbers = [1, 2, 3]

console.log(sum(...numbers)) //retorna elementos independentes de um array
//desestrutura o array e substitui os valores nos parametros

//rest em arrays 
function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho()
confereTamanho(1, 2)
confereTamanho(2, 3, 5)
//combina os argumentos em um array


//desestruturação de objetos

const user = {
    id : 50,
    displayName : 'xdemn',
    fullName : {
        firstName : 'claudio',
        lastName : 'zhao'
    }
}

function userId({id}) {
    return id
}

//podemos aplicar nomes para os valores que desejamos extrair
function getFullName({fullName: {firstName : first, lastName : last}}) {
    return `${first} ${last}`
}

userId(user)

getFullName(user)


//loop entre propriedades de um objeto

function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop)
    }
}

const meuObjeto ={
    nome: "joao",
    idade : "20",
    cidade : "Salvador"
}

forInExemplo(meuObjeto)
//retornos:
    //nome
    //idade
    //cidade


function forInExemplo2(obj) {
    for(prop in obj) {
        console.log(obj[prop])
    }
}

const meuObjeto2 ={
    nome: "joao",
    idade : "20",
    cidade : "Salvador"
}

forInExemplo2(meuObjeto2)
//joao
//20
//Salvador

// for of -> estruturas iterveis strings ou arrayss
function forOnExemplo(palavra) {
    for(letra of palavra) {
        console.log(letra)
    }
}

const palavra = "abacaxi"

forOnExemplo(palavra)
//retorna a palavra com uma letra por linha

