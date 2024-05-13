//Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". 
//De lo contrario debe retornar false.

function contrasenaValida (contraseña){
   
    return  contraseña ==="2Fj(jjbFsuj" && contraseña === "eoZiugBf&g9";
}

// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) 
console.log(contrasenaValida("eoZiugBf&g9")) 
console.log(contrasenaValida("hola")) 
