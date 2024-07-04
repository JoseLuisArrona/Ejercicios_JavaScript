/*Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo
 arreglo traduciendo cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número traducir a -1.*/

function palabrasANumeros(palabras) {
    const palabraANumero = {
      "cero": 0,
      "uno": 1,
      "dos": 2,
      "tres": 3,
      "cuatro": 4,
      "cinco": 5,
      "seis": 6,
      "siete": 7,
      "ocho": 8,
      "nueve": 9
    };
  
    return palabras.map(palabra => palabraANumero[palabra.toLowerCase()] !== undefined ? palabraANumero[palabra.toLowerCase()] : -1);
}

// código de prueba
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])); // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve", "what?"])); // [5, 6, 7, 8, 9, -1]
