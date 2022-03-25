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

//Aqui interactuamos con el HTML
//Funciones del Cuadrado

function calcularPerimetroCuadrado()
{
   const input = document.getElementById("inputCuadrado");  //Esta es la forma de decirle a JavaScript que busque en el input por medio del Id
   const value = input.value;  //Esta es la forma de obtener el valor de lo que se ingresa en el input
   const perimetro = perimetroCuadrado(value); //Se llama a la funcion que hace el perimetro y se envia el valor obtenido del input
   alert(perimetro);
}

function calcularAreaCuadrado()
{
   const input = document.getElementById("inputCuadrado"); //Esta es la forma de decirle a JavaScript que busque en el input por medio del Id
   const value = input.value; //Esta es la forma de obtener el valor de lo que se ingresa en el input
   const area = areaCuadrado(value); //Se llama a la funcion que hace el perimetro y se envia el valor obtenido del input
   alert(area);
}

//Funciones del Triangulo

function calcularPerimetroTriangulo()
{
   const input1 = document.getElementById("inputTriangulo1");
   const side1 = parseInt(input1.value);
   const input2 = document.getElementById("inputTriangulo2");
   const side2 = parseInt(input2.value);
   const input3 = document.getElementById("inputTriangulo3");
   const base = parseInt(input3.value);
   const perimetro = perimetroTriangulo(side1, side2, base);
   alert(perimetro);
}

function calcularAreaTriangulo()
{
   const input3 = document.getElementById("inputTriangulo3");
   const base = parseInt(input3.value);
   const input4 = document.getElementById("inputTriangulo4");
   const altura = parseInt(input4.value);
   const area = areaTriangulo(base, altura);
   alert(area);
}

//Funciones del Circulo

function calcularAreaCirculo()
{
    const input = document.getElementById("inputCirculo");
    const radio = parseInt(input.value);
    const area = areaCirculo(radio);
    alert(area);
}

function calcularPerimetroCirculo()
{
    const input = document.getElementById("inputCirculo");
    const radio = parseInt(input.value);
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularDiametroCirculo()
{
    const input = document.getElementById("inputCirculo");
    const radio = parseInt(input.value);
    const diametro = diametroCirculo(radio);
    alert(diametro);
}
