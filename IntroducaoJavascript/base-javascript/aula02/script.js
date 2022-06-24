
boolean
var VouF = false;
console.log(typeof(VouF))

var numero = 1;
console.log(typeof(numero))

var algumNome = "nome";
console.log(typeof(string))

var funcao = function () {};
console.log(typeof(funcao))


var variavel;
variavel = "Claudio";
console.log(typeof(variavel))

let variavel2 = "paulo"
console.log(typeof(variavel2))
variavel2 = "etc"
console.log(typeof(variavel2))

//tem que ser inicializada
const CONSTANTE = "claudio"
console.log(typeof(CONSTANTE))

var escopoGlobal = 'global';
console.log(escopoGlobal)

function escopoGlobal () {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno)
}

escopoGlobal()

//atribuicao
var atribuicao = 'diana'

//compara o valor
var comparacao = '0' == 0
console.log(comparacao)

//compara o tipo
var comparacao2 = '0' === 0
console.log(comparacao2)

//operadores logicos

var e = true && false;
console.log(e)

var ou = true || false;
console.log(ou)

var nao = !true;
console.log(nao)