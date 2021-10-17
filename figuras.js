// Código del cuadrado

console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado *  4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado**2;
console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();


// Código del triángulo

console.group("Tríangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoBase = 4;
const altura = 5.5;
console.log("Los lados del triángulo miden: "
    + ladoTriangulo1 + " cm, "
    + ladoTriangulo2 + " cm y "
    + ladoBase + " cm"
);
console.log("La altura del triángulo es de: " + altura + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoBase;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (ladoBase * altura)/2;
console.log("El área del triángulo es: " + areaTriangulo + " cm^2");

console.groupEnd();


// Código Círculo

console.group("Círculo");

const radio = 4;
const diametro = radio * 2;
const pi = Math.PI;
const areaCirculo = pi * radio**2;
const circunferencia = 2 * pi * radio ;

console.log("El radio del círculo es: " + radio + " cm"
    + "\nEl diametro del círculo es: " + diametro + " cm"
    + "\nLa circunferencia del círculo es: " + circunferencia + " cm"
    + "\nEl área del círculo es: " + areaCirculo + " cm^2"
);

console.groupEnd();