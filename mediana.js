const lista1 = [
    100,
    200,
    500,
    400000000
];


function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista
}


function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}


function calcularMediana(){
    const mitadLista1 = parseInt(lista1.length / 2);
    let mediana;
    if(esPar(lista1.length)){
        const elemento1 = lista1[mitadLista1];
        const elemento2 = lista1[mitadLista1 - 1];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
        return mediana;
    }
    else{
        mediana = lista1[mitadLista1];
        return mediana;
    }
}