//se utiliza para recortar una cadena 

// Metodo slice

let ingresadoPorUsuario = '$ 525.25';
let pesos = +(ingresadoPorUsuario.slice(2));
console.log(typeof pesos);
console.log(pesos)