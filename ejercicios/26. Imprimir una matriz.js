//Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) 
//e imprima todos los elementos del arreglo.

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
      }
    }
  }

// código de prueba
console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]))