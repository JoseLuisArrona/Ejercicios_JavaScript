//Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:

function capitalizar(str) {
    if (str.length === 0) {
        return str; // Retorna la cadena vacía si el string está vacío
    }
    return str[0].toUpperCase() + str.slice(1);
}


// código de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""