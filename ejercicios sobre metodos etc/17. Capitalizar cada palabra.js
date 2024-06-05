//Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:

function capitalizar(string) {
    if (string.length === 0) {
        return string;
    }
    return string.toUpperCase();
}


// código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""