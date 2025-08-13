//un sistema de gestion de pedidos  recibe codigo de seguimiento en el formato: PED-2025-00045, se necesita extraer el año del pedido y el numero de orden  usando substring()

//requisitos
//1. extraer el año del pedido (2025) y el numero de orden (00045) usando substring().
import readline from 'readline'; // Importamos el módulo readline usando la sintaxis de ES6

const rl = readline.createInterface({ // configuramos la entrada y salida
  input: process.stdin,
  output: process.stdout 
});

rl.question("Ingrese el código de pedido(ej: PED-2025-00045): ", (codigo) => {
  const año = codigo.substring(4, 8);
  const numeroOrden = codigo.substring(9);
  console.log(`Año del pedido: ${año}`);
  console.log(`Número de orden: ${numeroOrden}`);
  rl.close();
});