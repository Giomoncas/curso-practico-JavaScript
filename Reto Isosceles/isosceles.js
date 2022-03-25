function verificarIsosceles()
{
    const input1 = document.getElementById("inputTriangulo1");
    const side1 = parseInt(input1.value);
    const input2 = document.getElementById("inputTriangulo2");
    const side2 = parseInt(input2.value);

    if(side1 === side2)
    {
        alert("Si es un triangulo Isosceles!!")
    }
    else
    {
        console.error("No es un triangulo Isosceles!!")  //Forma de mostrar un mensaje de error!
    }    
}

function pitagoras(lado, base)
{
   const altura = Math.sqrt(((lado*lado)-((base*base)/4)));
   return altura;
}

function calcularAlturaTriangulo()
{
    const input1 = document.getElementById("inputTriangulo1");
    const side1 = parseInt(input1.value);
    const input2 = document.getElementById("inputTriangulo2");
    const side2 = parseInt(input2.value);  
    const input3 = document.getElementById("inputTriangulo3");
    const base = parseInt(input3.value);
    const altura = pitagoras(side1, base);
    alert(altura);
}

