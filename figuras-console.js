// Código del Cuadrado

console.group("Cuadrado");  //Esta es la manera de agrupar los consoles . log de un bloque de codigo

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd(); //Asi se cierra el grupo de consoles . log de un bloque de codigo

//Código del triángulo

console.group("Triángulo");  //Esta es la manera de agrupar los consoles . log de un bloque de codigo

const ladoTriángulo1 = 6;
const ladoTriángulo2 = 6;
const baseTriángulo = 4;
const alturaTriángulo = 5.5;

console.log("La altura del triángulo es: " + alturaTriángulo + " cm");

console.log("Los lados del triangulo miden: " + ladoTriángulo1 + "cm," + ladoTriángulo2 + "cm," + baseTriángulo + "cm");

const perimetroTriángulo= ladoTriángulo1 + ladoTriángulo2 + baseTriángulo;
console.log("El perímetro del triángulo es: " + perimetroTriángulo + " cm");

const areaTriángulo = ((baseTriángulo * alturaTriángulo) / 2);
console.log("El área del triángulo es: " + areaTriángulo + " cm^2");

console.groupEnd(); //Asi se cierra el grupo de consoles . log de un bloque de codigo

//Código del circulo

console.group("Circulo");  //Esta es la manera de agrupar los consoles . log de un bloque de codigo

// Radio

const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + " cm");

// Diámetro

const diámetroCirculo = radioCirculo * 2;
console.log("El diámetro del circulo es: " + diámetroCirculo + " cm");

// Número PI

const PI = Math.PI;

// Circunferencia

const perimetroCirculo = diámetroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");

//Área

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del circulo es: " + areaCirculo + " cm^2");

console.groupEnd(); //Asi se cierra el grupo de consoles . log de un bloque de codigo



