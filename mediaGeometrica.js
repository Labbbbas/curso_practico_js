function calcularMediaGeometrica(lista){
    const longitud = lista.length;
    var multiplicacion = 1;
    for(let i=0; i<longitud; i++){
        multiplicacion *= lista[i];
    }

    const mediaGeometrica = Math.pow(multiplicacion,1/longitud);

    return mediaGeometrica;
}