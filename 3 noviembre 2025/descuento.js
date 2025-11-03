// Calcular el descuento según el monto de compra: solicite el monto de la compra y aplique un descuento:
// -          Mayor o igual a 100 -> 10%

// -          Entre 50 y 99 -> 5%

// -          Menor a 50 -> sin descuento

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let des;

function descuento(compra){
    if(compra >= 100){
        des = 0.10;
    } else if(compra >= 50 && compra<=99){
        des = 0.05;
    } else {
        des = 0;
    }
    const total = compra - (compra * des);
    return total;
}

rl.question('Ingrese el monto de la compra: ', (precio) => {
   let compra = Number(precio);
   const totalPagar = descuento(compra);
   console.log(`El total a pagar es: $${compra.toFixed(2)} con un descuento aplicado de $${(compra - totalPagar).toFixed(2)}, por lo que el total final es: $${totalPagar.toFixed(2)}`);
    rl.close();
});