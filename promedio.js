
function calcularMedia(lista)
{
   /* let sumaLista = 0;
    for(let index = 0; index < lista.length; index++){
        sumaLista = sumaLista + lista[index];
    }

    */

    const sumaLista = lista.reduce(  //Este es el metodo que nos sirve como un for, para sumar los elementos de un array
        function (valorAcumulado = 0, nuevoElemento)
        {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}