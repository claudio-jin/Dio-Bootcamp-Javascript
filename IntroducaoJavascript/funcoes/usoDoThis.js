//this é uma referencia de contexto

const pessoa = {
    firstName: 'Andre',
    lastName: 'Soares',
    id :  1,
    fullName : function () {
        return this.firstName + " " + this.lastName
    },
    getId : function () {
        return this.id
    }
}

pessoa.fullName()
pessoa.getId()


//pode se manipular o valor do this
const pessoa2 = {
    nome : 'miguel'
}

const animal = {
    nome : 'pulinho'
}

function getSomething() {
    console.log(this.nome)
}

getSomething.call(animal)

//ou

const myObj = {
    n1 : 1,
    n2 : 2,
}

function soma(a, b) {
    console.log(this.n1 + this.n2 + a + b)
}

soma.call(myObj, (1, 2))

//ou com apply

const myObj2 = {
    n1 : 1,
    n2 : 2,
}

function soma(a, b) {
    console.log(this.n1 + this.n2 + a + b)
}

soma.apply(myObj2, [1, 2])

//bind 
const retornaNome = function() {
    return this.nome
}

let bruno = retornaNome.bind({ nome : 'Bruno' })

bruno()

//clona a estrutura da funcao onde é chamada e aplica o valor do objeto passado como parametro
