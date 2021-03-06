// Helper functions
function esPar(numero){
    // if(numero % 2 === 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista
}


// Calculando mediana general
const salariosMex = mexico.map(
    function (persona){
        return persona.salary;
    }
);

const salariosMexSorted = salariosMex.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

function medianaSalariosMex(lista){
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }
    else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


// Mediana Top 10%
const spliceStart = salariosMexSorted.length * .90;
const spliceCount = salariosMexSorted.length - spliceStart;

const salariosMexTop10 = salariosMexSorted.splice(spliceStart, spliceCount);


// Guardamos resultados
const medianaGeneralMex = medianaSalariosMex(salariosMexSorted);
const medianaTop10Mex = medianaSalariosMex(salariosMexTop10);


// Mostramos resultados
console.log(
    {medianaGeneralMex,
    medianaTop10Mex}
);