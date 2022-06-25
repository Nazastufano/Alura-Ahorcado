var divTextBotns = document.getElementById("text-botons");
var textArea = document.getElementById("text-area");
var botonANP = document.querySelector("#boton-new-palabra");

botonANP.addEventListener("click", agregarPalabra);
textArea.addEventListener("keypress",verificar);

function agregarPalabra(){
    divTextBotns.style.display = "flex";
    textArea.focus();
    document.getElementById("botones").style.display = "none";
    textArea.value = "";
}

function guardar(){
    palabraElegida = textArea.value.toLowerCase();

    if(palabraElegida.length <= 12 && palabraElegida.length > 0){
        crearLineas(palabraElegida);
        document.getElementById("text-botons").style.display = "none";
        document.getElementById("botones-del-canv").style.display = "flex";
        window.addEventListener("keypress", teclaVerificador);
    } else{
        restearEstadisticas();
        alert("La palabra ingresada no es válida, recuerda que debe inculir al menos un carácter y debe de tener como máximo 12");
    }   
}

function cancelar(){
    document.getElementById("botones").style.display = "flex";
    document.getElementById("botones-del-canv").style.display = "none";
    document.getElementById("text-botons").style.display = "none";
}

function verificar(e){
	if(e.key.match(/[a-zñ\s]/i)===null) {
		e.preventDefault();
	}

    var tecla = e.keyCode;
    if (tecla === 32) {
        e.preventDefault();
    }
}
