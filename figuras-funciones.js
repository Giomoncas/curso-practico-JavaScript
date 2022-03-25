// Código del Cuadrado

console.group("Cuadrado");  //Esta es la manera de agrupar los consoles . log de un bloque de codigo


function perimetroCuadrado(lado)
{
    return lado * 4;    
}  

function areaCuadrado(lado)
{
    return lado * lado;
}

console.groupEnd(); //Asi se cierra el grupo de consoles . log de un bloque de codigo

console.group("Triángulo");  //Esta es la manera de agrupar los consoles . log de un bloque de codigo

function perimetroTriangulo(lado1, lado2, ladoBase)
{
    return lado1 + lado2 + ladoBase;
}

function areaTriangulo(base, altura)
{
    return (base * altura) / 2;
}

console.groupEnd(); //Asi se cierra el grupo de consoles . log de un bloque de codigo

console.group("Circulo");

function diametroCirculo(radio)
{
    return radio * 2;
}

function perimetroCirculo(radio)
{
  const diametro = diametroCirculo(radio);
  return diametro * Math.PI;
}

function areaCirculo(radio)
{
    return Math.PI * (radio * radio);
}

console.groupEnd();

