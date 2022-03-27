
function calcularMedia(lista)
{
    const sumaLista = lista.reduce(  //Este es el metodo que nos sirve como un for, para sumar los elementos de un array
        function (valorAcumulado = 0, nuevoElemento)
        {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}



const lista1 = [100,200,300, 400, 500];

function calcularMediana(lista)
{
    lista.sort();  //Metodo de los arrays para ordenar los elementos de un array

    console.log(lista);
    
    const mitadLista = parseInt(lista.length/2);
    
    function esPar(numerito)
    {
        if(numerito % 2 === 0)
        {
            return true;
        }
        else
        {
            return false;
        }    
    }
    
    let mediana;
    
    if(esPar(lista.length))
    {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promedio = calcularMedia([elemento1, elemento2]);
        mediana = promedio;
    }
    else
    {
        mediana = lista[mitadLista];
    }

    return mediana;
}

