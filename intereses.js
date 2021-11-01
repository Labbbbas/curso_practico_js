function calcularIntereses(){
    const input1 = document.getElementById("inputMonto");
    const monto = Number(input1.value);
    const input2 = document.getElementById("inputInteres");
    const interes = Number(input2.value);
    const input3 = document.getElementById("inputTiempo");
    const tiempo = Number(input3.value);

    // Calculamos el interés simple con los datos proporcionados
    const simple = (interes/100)*tiempo*monto+monto;

    // Calculamos el interés compuesto con los datos proporcionados
    var compuesto = monto*Math.pow(1+(interes/100),tiempo);
    
    // Imprimimos resultados
    const resultado1 = document.getElementById("resultado1");
    resultado1.innerText = "Tu inversión de $" + monto + " con interés simple del " + interes + "% tras " + tiempo + " meses sería de: $" + simple;
    const resultado2 = document.getElementById("resultado2");
    resultado2.innerText = "Tu inversión de $" + monto + " con interés compuesto del " + interes + "% tras " + tiempo + " meses sería de: $" + compuesto;
    const final = document.getElementById("final");
    final.innerText = "Queda más que demostrado el poder el interés compuesto B)";
}