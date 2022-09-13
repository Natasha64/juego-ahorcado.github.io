function aleatorio(inferior,superior){
    numPosibilidades = superior - inferior + 1
    aleat = Math.random()* numPosibilidades
    aleat = Math.floor(aleat)
    return parseInt(inferior) + aleat
    }
   

var palabras = ['EXITOS', 'GANASTE', 'JAVASCRIPT', 'HTML', 'CSS', 'ORACLE', 'ALURA', 'PROGRAMACION'];
var palabraEscogida = palabras[aleatorio(0,palabras.length-1)] //
var aciertos = [];
console.log(palabras)