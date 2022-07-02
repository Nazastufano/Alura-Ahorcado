var botonIniciar = document.querySelector(".home__iniciar");

botonIniciar.addEventListener("click",function(){ 
    crearLineas();
    
    document.querySelector(".principal__home").style.display = "none";
    document.querySelector(".canvas__botones").style.display = "flex";
    document.querySelector(".principal__canvas").style.display = "flex";
    
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
    var tablero = document.querySelector(".canvas__tablero");
    var x = 80;
    tablero.appendChild(crearTablero()); 

    dibujarRecta(200, 500, 600, 500,6, "#0A3871");
    for(var i = 0; i < palabraElegida.length; i++){
        x += 50;
        dibujarRecta(x, 600, x + 40, 600, 4, "#0A3871");
    }
    return;
}