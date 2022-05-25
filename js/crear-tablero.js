var botonIniciar = document.querySelector("#boton-iniciar");

botonIniciar.addEventListener("click",function(){ 
    crearLineas();
    
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones-del-canv").style.display = "block";
    document.getElementById("canv-boton").style.display = "block";
    
    window.addEventListener("keypress", teclaVerificador);
});

function crearTablero(){
    var pantalla = document.createElement("canvas");

    pantalla.height = 700;
    pantalla.width = 800;
    pantalla.classList.add("tablero");
    pantalla.setAttribute("id", "tablero2");

    return pantalla;
}

function crearLineas(){
    var tablero = document.querySelector("#tablero");
    var x = 80;
    tablero.appendChild(crearTablero()); 

    dibujarRecta(200, 500, 600, 500,6, "#0A3871");
    for(var i = 0; i < palabraElegida.length; i++){
        x += 50;
        dibujarRecta(x, 600, x + 40, 600, 4, "#0A3871");
    }
    return;
}