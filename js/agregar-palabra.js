var divTextBotns = document.querySelector(".principal__newWord");
var textArea = document.querySelector(".newWord__textArea");
var botonANP = document.querySelector(".home__newPalabra");

botonANP.addEventListener("click", agregarPalabra);
textArea.addEventListener("keypress",verificar);

function agregarPalabra(){
    divTextBotns.style.display = "flex";
    textArea.focus();
    document.querySelector(".principal__home").style.display = "none";
    textArea.value = "";
}

function guardar(){
    palabraElegida = textArea.value.toLowerCase();

    if(palabraElegida.length <= 12 && palabraElegida.length > 0){
        crearLineas(palabraElegida);
        document.querySelector(".principal__newWord").style.display = "none";
        document.querySelector(".canvas__botones").style.display = "flex";
        window.addEventListener("keypress", teclaVerificador);
    } else{
        restearEstadisticas();
        alert("La palabra ingresada no es válida, recuerda que debe inculir al menos un carácter y debe de tener como máximo 12");
    }   
}

function cancelar(){
    document.querySelector(".principal__home").style.display = "flex";
    document.querySelector(".canvas__botones").style.display = "none";
    document.querySelector(".principal__newWord").style.display = "none";
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
