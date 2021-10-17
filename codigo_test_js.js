var nombre = "Fernando";                        // string
var apellido = "Rodríguez";                     // string
var nombre_usuario_platzi = "@fer_ro9";         // string
var edad = 23;                                  // integer
var correo_electronico = "ferRo9@gmail.com";    // string
var mayor_de_edad = true;                       // boolean
var dinero_ahorrado = 8000.50;                  // float
var deudas = null;                              // null data



const nombre_completo = nombre + apellido;
document.write(nombre_completo);
if(deudas === null){
    deudas = 0;
}
const dinero_real = dinero_ahorrado - deudas;
document.write(dinero_real);



function complete_name(name, lastname, nickname){
    const result = name + lastname;
    console.log("Mi nombre es " + result + ", pero prefiero que me digas " + nickname + ".");
}
complete_name("Juan David", "Castro Gallego", "juandc");



const tipoDeSuscripcion = "Basic";
if(tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if(tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
else{
   console.log("Ese tipo de suscripción no existe");
}



const tipoDeSuscripcion = "Basic";
if(tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if(tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}



let i = 0;
while(i<5){
    console.log("El valor de i es: " + i);
    i++;
}

let i = 10;
while(i>=2){
    console.log("El valor de i es: " + i);
    i--;
}



const comprobar = true;
while(comprobar === true){
    var resultado = parseInt(prompt('¿Cuál es el resultado de "2 + 2". R: '));
    dos_mas_dos(resultado);
}
function dos_mas_dos(respuesta){
    if(respuesta === 4){
        comprobar = false;
        alert("Felicidades!");
    }
}



const array = [1,2,3,4,5];
function first_element(array){
    document.write(array[0])
}



const array = [6,7,8,9,0];
function first_element(array){
    for(let i=0; i<array.length; i++) {
        const element = array[i];
        document.write(element);
    }
}



for (const property in objetoCarro) {
    if (Object.hasOwnProperty.call(objetoCarro, property)) {
        const element = objetoCarro[property];
        console.log(element);
    }
}