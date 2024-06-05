//Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

function numeroDeAes(cadena) {
    let contador = 0;
    
    // Iterar sobre cada carácter en la cadena
    for (let i = 0; i < cadena.length; i++) {
      // Verificar si el carácter actual es una "a" o "A"
      if (cadena[i].toLowerCase() === 'a') {
        contador++;
      }
    }
    
    return contador;
  }

console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0