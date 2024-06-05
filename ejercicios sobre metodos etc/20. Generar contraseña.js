/*Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter “a” por “4”.
Reemplaza el caracter “e” por “3”.
Reemplaza el caracter “i” por “1”.
Reemplaza el carater “o” por “0”.*/

function password(str) {
    // Convertir mayúsculas a minúsculas y eliminar espacios en blanco
    str = str.toLowerCase().replace(/\s+/g, '');

    // Reemplazar los caracteres especificados
    const complemento = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0'
    };

    // Crear el nuevo string con las sustituciones
    let newPassword = '';
    for (let char of str) {
        if (complemento.hasOwnProperty(char)) {
            newPassword += complemento[char];
        } 
        else {
            newPassword += char;
        }
    }

    return newPassword;
}

// código de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""