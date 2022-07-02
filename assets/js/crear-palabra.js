var palabraElegida = crearPalabraSecreta();

function crearPalabraSecreta(){
    var palabras = ["javascript", "html", "css", "python", "codigo", "developer", "programador", "java", "desarrollador", "compilador", "funcion"];
    var numeroAleatorio = Math.round(Math.random() * 10);

    palabras = palabras[numeroAleatorio];

    return(palabras);
}
