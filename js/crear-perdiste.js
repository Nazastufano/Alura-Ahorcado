var botonDesistir = document.querySelector("#boton-desistir");
var botonNuevoJuego = document.querySelector("#boton-reiniciar");

botonNuevoJuego.addEventListener("click", volverAJugar);
botonDesistir.addEventListener("click", desistir);


function verficarPerdiste(v){
    if(v == 9){
        crearLetra("¡Fin del Juego!",550,250,"30px Arial", "red");
        window.removeEventListener("keypress", teclaVerificador);
    }
}

function desistir(){
    var canvas = document.getElementById("tablero2");
    canvas.remove("tablero2");

    document.getElementById("botones").style.display = "flex";
    document.getElementById("botones-del-canv").style.display = "none";
    
    restearEstadisticas();
    window.removeEventListener("keypress", teclaVerificador);
}

function volverAJugar(){
    var canvas = document.getElementById("tablero2");
    canvas.remove("tablero2");
    window.addEventListener("keypress", teclaVerificador);
    restearEstadisticas();
    crearLineas();
}