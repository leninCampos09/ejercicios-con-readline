// Cree una función que permita calcular el descuento de un producto. Solicite al usuario
// el precio de un producto y el porcentaje de descuento, devuelva el precio final.


// Importamos la librería readline
import readline from 'readline';

// Creamos la interfaz para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que calcula el precio final con descuento
function calcularDescuento(precio, descuento) {
  const montoDescuento = (precio * descuento) / 100;
  return precio - montoDescuento;
}

// Pedimos los datos al usuario
rl.question('Ingrese el precio del producto: ', (precioInput) => {
  rl.question('Ingrese el porcentaje de descuento: ', (descuentoInput) => {
    const precio = parseFloat(precioInput);
    const descuento = parseFloat(descuentoInput);

    const precioFinal = calcularDescuento(precio, descuento);
    console.log(`El precio final después del ${descuento}% de descuento es: $${precioFinal.toFixed(2)}`);

    rl.close();
  });
});
