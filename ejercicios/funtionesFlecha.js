const nombre = function (parametros){
    //codigo a ejecutar
}

const funcionFlecha = () => {
    console.log('Esto es desde una funcion Fleha');
    return 'Flecha dorada';
}

// Reducir el codigo cuando la funcion en el cuerpo solo usa una linea 
const funcionSimple = () => console.log('Esto es posible porque solo tiene una linea de codigo.');
funcionSimple();

//Si la funcion solo va a recibir un unico parametro no es necesario usar los {}
const funcionEsperaParam = (texto) => console.log(texto);
funcionEsperaParam('pasamos un argumento a la funcion flecha');

//funcion flecha con varios parametros, si necesitas calculos complejos o usar mas de una linea de codigo se recomienda 
//hacerlo entre {} y usar return.
const funcionSumar = (dato1, dato2) => dato1 + dato2;
console.log(funcionSumar(10,5));

//Reducir el codigo cuando la funcion tiene una sola linea de código y retorna un valor.
const funcionRetornaValor = () => 'Esto es posible porque contiene una linea de código, no es necsario un return';
console.log(funcionRetornaValor());

//regresar un objeto 
const regresarObjeto = () => ({nombre: 'Juan', apellido : 'Perez'});
console.log(regresarObjeto());