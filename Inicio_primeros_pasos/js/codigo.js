function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1 )+min)
}
function eleccion(jugada){
    let resultado = ""
    if (jugada == 1) {
        resultado = "🥌Piedra🥌"
    } else if (jugada == 2) {
        resultado = "🧻Papel🧻"
    } else if (jugada == 3) {
        resultado = "✂️Tijera✂️"
    } else {
        resultado = "Ups Mal Elegido..."
    }
    return resultado    
}
function conbate(pc,jugador){
    let partida = ""
    if (pc == jugador){
        partida = "EMPATE"
    } else if (jugador == 1 && pc == 3 ){
        partida = "GANASTE"
    } else if (jugador == 2 && pc == 1 ){
        partida = "GANASTE"
    } else if (jugador == 3 && pc == 2 ){
        partida = "GANASTE"
    }else {
        partida = "PERDISTE"                
    }
    return partida
}
// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while(triunfos < 3 && perdidas < 3 ){
    pc = aleatorio(1,3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    //alert("Elegiste "+ jugador)
    alert("Pc Elige: " + eleccion(pc))
    alert("Tú Eliges: " + eleccion(jugador))
    
    alert("Resultado: " + conbate(pc,jugador))
    if (conbate(pc,jugador) == "GANASTE"){
        triunfos++
        alert("triunfos "+triunfos)
    }else if (conbate(pc,jugador) == "PERDISTE"){
        perdidas++
        alert("perdidas "+perdidas)
    }
}
alert("Ganaste: "+triunfos+" veces; Perdiste: "+perdidas+" veces.")   