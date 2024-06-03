//Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:

//Nota: Intentarlo hacer sin el método Math.min de JavaScript.

function min(arr) {
    if (arr.length === 0) {
        throw new Error("El arreglo está vacío");
    }
    
    let maxNum = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < maxNum) {
            maxNum = arr[i];
        }
    }
    
    return maxNum;
}



// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2