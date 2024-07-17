//es una funcion callback porque recibe como parametro otra funcion 
function comprar (articulo1, articulo2, funcion){
    let primerCompra = articulo1;
    let segundaCompra = articulo2;
    articulo1 = 50;
    articulo2 = 60;
    let gastado = articulo1 + articulo2;
    funcion (primerCompra,segundaCompra,gastado);
}

comprar('pan','leche',totalGastado);

function totalGastado (gasto1,gasto2,mensaje){
    console.log(`se compro ${gasto1} y ${gasto2} dandonos un total : ${mensaje}`);
}
