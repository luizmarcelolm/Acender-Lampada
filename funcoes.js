var lamp = window.document.getElementById("lampada")

function estaQuebrada(){
    return lamp.src.indexOf("quebrada") > -1
}

function ligar(){
    if(!estaQuebrada()){
   lamp.src = "./imagens/ligada.svg"}
}

function desligar(){
    if(!estaQuebrada()){
    lamp.src = "./imagens/apagada.svg"}
 }

 lamp.addEventListener ("click", quebrar)
 function quebrar(){
    lamp.src = "./imagens/quebrada.svg"
 }


