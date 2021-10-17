// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const price = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(price, discount);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = " El precio con descuento son: $" + precioConDescuento;
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });