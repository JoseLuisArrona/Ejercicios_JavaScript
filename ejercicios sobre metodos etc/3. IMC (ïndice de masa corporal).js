/*El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:
"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30

*/
function  bmi(peso , altura)
{
    const indice = peso / (altura * altura);
    if (indice < 18.5) {
        return "Bajo de peso";
    }
    else if(indice >=18.5 && indice <= 24.9){
        return "Normal";
    }
    else if (indice >= 25 && indice <= 29.9){
        return "Sobrepeso";
    }
    else if(indice > 30){
        return "Obeso";
    }
}
// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(110, 1.83)) // "Obeso"
