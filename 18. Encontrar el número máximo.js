//Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

function max(arr) {
    if (arr.length === 0) {
        throw new Error("El arreglo está vacío");
    }
    
    let maxNum = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    
    return maxNum;
}


// código de prueba
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9