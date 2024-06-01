/*Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, 
la posición inicial y la posición final.La función debe retornar la suma de todos los números dentro 
del rango(la posición inicial y la posición final, incluyéndolas).*/

function sumarArreglo(arreglo,PosicionI,PosicionF) {
    if (PosicionI === 0 || PosicionF === 0) {
        return 0;
    }
    let contador= 0 ;
    for(let i = PosicionI; i<= PosicionF; i++){
        contador+= arreglo[i];
    }
    return contador;
}

// código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0