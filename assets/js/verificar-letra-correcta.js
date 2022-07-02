function letraCorrectaVerificador(letra){
    if(palabraElegida.includes(letra)){
        return letra
    } else {
        console.log("la letra es incorrecta")
    }
}

function pulsar(e) {
    if(e.which === 13 && !e.shiftKey) {
        e.preventDefault();
        console.log('prevented');
        return false;
    }
}