/*Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y 
retorne otro string (su complemento ARN).
Los complementos son los siguientes:
G -> C
C -> G
T -> A
A -> U
*/
function transcribir(adn) {
    // Diccionario de complementos de ADN a ARN
    const complementos = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };
    
    // Construir la cadena de ARN
    let arn = '';
    for (let i = 0; i < adn.length; i++) {
        arn += complementos[adn[i]];
    }
    
    return arn;
}

// código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"