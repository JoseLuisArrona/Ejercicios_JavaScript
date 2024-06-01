/*Escribir una función llamada contarRango que reciba dos números y
 retorne cuántos números que hay entre ellos (excluyéndolos):

Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.*/

function contarRango(numero1, numero2) {
    let contador = 0;
    
    // Iterar desde el número siguiente a numero1 hasta el número anterior a numero2
    for (let i = numero1 + 1; i < numero2; i++) {
      contador++;
    }
    
    return contador;
  }
  
  // Código de prueba
  console.log(contarRango(1, 5));  // 3 (2, 3, 4)
  console.log(contarRango(10, 15)); // 4 (11, 12, 13, 14)
  console.log(contarRango(20, 22)); // 1 (21)
  console.log(contarRango(100, 105)); // 4 