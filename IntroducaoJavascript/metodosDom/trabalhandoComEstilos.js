const meuElemento = document.getElementById("meu-elemento")

meuElemento.classList.add("novo-estilo")
//adiciona a classe "novo-estilo"

meuElemento.classList.remove("classe")
//remove a classe "classe"

meuElemento.classList.toggle("dark-mode")
//Adiciona a classe "dark-mode" caso ela nao faca parte da
//lista e remove ela caso faça



//acessado pelo css
document.getElementsByTagName('p').style.color = 'blue'


//Eventos
const botao = document.getElementById('meuBotao')

botao.addEventListener('click', outraFuncao)