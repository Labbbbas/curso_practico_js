// // Código del cuadrado

// function perimetroCuadrado(lado){
//     return lado * 4;
// }

// function areaCuadrado(lado){
//     return lado**2;
// }


// // Código del triángulo

// function perimetroTriangulo(lado1, lado2, base){
//     return lado1 + lado2 + base;
// }

// function areaTriangulo(base, altura){
//     return (base * altura)/2;
// }


// // Código Círculo

// function areaCirculo(radio){
//     return Math.PI * radio**2;
// }

// function circunferencia(radio){
//     return 2 * Math.PI * radio;
// }



//CON ARROW FUNCTIONS

// Cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

// Triángulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

// Círculo
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => PI * radio ** 2;



// Aquí interactuamos con HTML

// Sección Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}


// Sección Triángulo
function calcularPerimetroTriangulo(){
    var input = document.getElementById("InputLado1");
    const lado1 = Number(input.value);
    var input = document.getElementById("InputLado2");
    const lado2 = Number(input.value);
    var input = document.getElementById("InputBase");
    const base = Number(input.value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    var input = document.getElementById("InputBase");
    const base = input.value;
    var input = document.getElementById("InputAltura");
    const altura = input.value;
    const area = areaTriangulo(base, altura);
    alert(area);
}


// Sección Círculo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}