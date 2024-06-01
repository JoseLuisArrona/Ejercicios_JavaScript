/*Escribir una función llamada multiplicarArreglo 
que reciba un arreglo de números y retorne la multiplicación de todos los elementos.*/

function multiplicarArreglo(arreglo) {
    let contador = arreglo[0];
    for(let i =1; i<arreglo.length; i++){
        contador *= arreglo[i];
    }
    return contador;
}


// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
