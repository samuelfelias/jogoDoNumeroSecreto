let numeroSecreto = gerarNumeroAleatorio()
console.log(numeroSecreto)
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto")
    exibirTextoNaTela("p", "Escolha entre 1 e 10.")
}
exibirMensagemInicial()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1)
}

function verificarChute(){
    let chute = document.querySelector("input").value
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas == 1? "tentativa" : "tentativas";
        let mensagem = `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela("h1", "Acertou!")
        exibirTextoNaTela("p", mensagem)
        document.getElementById("reiniciar").removeAttribute("disabled")
    }
    else{
        tentativas++;
        limparTexto()
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", "Tente um número menor!")
        }
        else{
            exibirTextoNaTela("p", "Tente um número maior!")
        }       
    }
   
}
function limparTexto(){
    input = document.querySelector("input")
    input.value = ""
}
function reiniciarJogo(){
    limparTexto()
    numeroSecreto = gerarNumeroAleatorio()
    console.log(numeroSecreto)
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById("reiniciar").setAttribute("disabled", true)
}




