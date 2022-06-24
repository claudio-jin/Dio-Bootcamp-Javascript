//como declarar um array

let array = ['string', 1, true]
console.log(array)

let array2 = ['string', 1, true, ['array2'], ['array2'], ['array2']]
console.log(array2)

console.log(array2[0])


//manipulando arrays
//array2.forEach(function(item, index) {console.log(item, index)})

array2.push('novo item')
console.log(array2)

//remove o ultimo indice
array2.pop()
console.log(array2)

//remove o primeiro indice
array2.shift()
console.log(array2)

//adiciona um item no inicio
console.log(array2.unshift(11))

//retorna o indice de um valor
console.log(array2.indexOf(true))

//retorna os valores dentro dos parametros passados e remove o resto
array2.splice(0, 3)
console.log(array2)

//retorna a parte de um array existente
let novo = array2.slice(0, 3)
console.log(novo)

//DESESTRUTURAÇÃO DE OBJETOS
//obetos
let object = {
    string : 'string', 
    number: 1,
    boolean: true,
    array: ['array'],
    objetoInterno: {
        objetoDentroDoInterno : 'objeto'
    },
}

console.log(object.boolean)
console.log(object.objetoDentroDoInterno)

var string = object.string
console.log(string)

var array3 = object.array
console.log(array3)

//outra forma de desestruturação
var { string, boolean, objetoDentroDoInterno } = object
console.log(string, boolean, objetoDentroDoInterno)



