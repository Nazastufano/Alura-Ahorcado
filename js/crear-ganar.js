function verficarGanaste(lA,pE){
    if(lA == pE.length){
        window.removeEventListener("keypress", teclaVerificador);
        crearLetra("¡Felicidades!",550,250,"20px Arial", "green");
        crearLetra("Ganaste",570,270,"20px Arial", "green");
    }
}