/*Escribir una función llamada empiezanConA que reciba un arreglo de strings y 
retorne un nuevo arreglo con todas las palabras que empiecen por "a"
 (mayúscula o minúscula).*/

 function empiezanConA(arr) {
    return arr.filter(word => word[0].toLowerCase() === "a");
  }
  
  // código de prueba
  console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])); // ["alfa", "Arbol"]
  console.log(empiezanConA(["beta", "delta", "gama"])); // []
  console.log(empiezanConA([])); // []