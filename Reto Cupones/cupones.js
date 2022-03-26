function calcularPrecioDescuento(precio, descuento){
    
    const porcentajePrecioConDescuento = 100 - descuento;
    const  precioConDescuento = (precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento
}


const cupones = ["perro","gato","tortuga","conejo","hamster"]



function onClickButtonPrice(){
    const Price = document.getElementById("InputPrice");
    const price = Price.value;

    const Discount = document.getElementById("InputDiscount");
    const discount = Discount.value;

    const precioDescuento = calcularPrecioDescuento(price, discount)

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es $" + precioDescuento;
}



function DiscountCoupon(){

    const Price = document.getElementById("InputPrice");
    const price = Price.value;

    const Discount = document.getElementById("InputDiscount");
    const discount = Discount.value;

    const Coupon = document.getElementById("coupon");
    const coupon = Coupon.value;

    let descuento;

    switch (coupon) {
        case cupones[0]: //perro
            descuento = 5;
        break;
        case cupones[1]: //gato
            descuento = 10;
        break;
        case cupones[2]: //tortuga
            descuento = 15;
        break;
        case cupones[3]: //conejo
            descuento = 20;
        break;
        case cupones[4]: //hamster
            descuento = 25;
        break;
        default:
            descuento = 0;
        break;
    }


    const precioDescuentoCupon = Math.floor(calcularPrecioDescuento(price,discount)-(price*(descuento*0.01)));

    const resultC = document.getElementById("ResultC");
    resultC.innerText = "El precio final con cupon y descuento es: $" + precioDescuentoCupon;

}