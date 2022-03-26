

function calcularPrecioDescuento(precioOriginal, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount()
{
    const inputPrice = document.getElementById("precio");
    const inputDiscount = document.getElementById("descuento");
    const price = inputPrice.value;
    const discount = inputDiscount.value;
    const priceWithDiscount = calcularPrecioDescuento(price, discount);
    const resultP = document.getElementById("ResultPrice");  //Esta es la forma de localizar la etiqueta donbde queremos escribir el resultado, en este caso es un Parrafo
    resultP.innerText = `El precio con descuento es: $${priceWithDiscount}`;  //Esta es la forma de agregar el texto a la etiqueta patra mostrarla en HTML.
}