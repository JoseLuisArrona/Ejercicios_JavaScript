/*Escribir una función llamada duplicar que reciba un arreglo de números y 
retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).*/

function duplicar(arr) {
    // Crear un nuevo arreglo con cada número multiplicado por 2
    return arr.map(num => num * 2);
}


// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []