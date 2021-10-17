function alturaIsosceles(){
    const input1 = document.getElementById("InputLado1");
    const lado1 = input1.value;

    const input2 = document.getElementById("InputLado2");
    const lado2 = input2.value;
        
    const input3 = document.getElementById("InputBase");
    const base = input3.value;

    if(lado1===lado2 && lado1!==base){
        const altura = Math.sqrt(lado1**2-(base/2)**2);
        alert(altura);
    }
    else{
        alert('No es un triángulo isósceles')
    }
}