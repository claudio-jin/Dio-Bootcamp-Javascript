var jogador1 = 1
var jogador2 = 0
var placar

// if (jogador1 > 0) {
//     console.log("jogador marcou ponto")
// } else if (jogador2 > 0) {
//     console.log("jogador2 marcou")
// } else {
//     console.log("jogador nao marcou")
// }

//aninhamento de ifs
if (jogador1 != -1) {
    if (jogador1 > 0) {
        console.log("jogador marcou ponto")
        placar = jogador1 > jogador2
    } else if (jogador2 > 0) {
        console.log("jogador2 marcou")
    } else {
        console.log("jogador nao marcou")
    }
}

//if ternario
// jogador1 == 0 || jogador2 == 0 ? console.log("entrou no ternario") : console.log("nao entrou")

//switch case

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("jogador1 ganhou");
        break;
    case placar = jogador2 > jogador1:
        console.log("jogador2 ganhou");
        break;
        default:
            console.log("ninguem ganhou")
}



// estruturas de repetição
// let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']
// let object = { propriedade1: '12', propriedade2: 'valor2', propriedade3: 'valor3'}

/* // for - executa até que seja false
for (let i = 0; i < array.length; i++) {
    console.log(i);
} */


/* // for/in - executa repetição a partir de uma propriedade
// com array
for (i in array) {
    console.log(i);
}
// com object
for (i in object) {
    console.log(i);
} */

/* // for/of - executa repetição a partir de um valor
// com array
for (i of array) {
    console.log(i);
}
// com object não funciona pois não é iterável
for (i of object.propriedade1) {
    console.log(i);
} */


// while - executa enquanto for verdadeira
// var a = 0;
/* while (a < 10) {
    a++;
    console.log(a)
} */

// do - executa até que seja falsa
/* do {
    a++;
    console.log(a);
} while (a < 10); */