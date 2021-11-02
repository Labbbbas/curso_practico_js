function calcularMediaAritmetica(){
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i];
    // }

    const lista1 = [
        100,
        200,
        300,
        500
    ];

    const sumaLista = lista1.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista1.length;
    const datos = document.getElementById("lista");
    datos.innerText = lista1;
    const resultado = document.getElementById("resultado");
    resultado.innerText = "Promedio: " + promedioLista;
}