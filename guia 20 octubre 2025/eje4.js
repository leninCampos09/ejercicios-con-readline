// Escriba un programa que solicite al usuario el precio de tres productos, y cree una
// función que permita calcular la suma total del precio de los tres productos, mostrar
// en consola la suma. 


// Importamos la librería readline
import readline from 'readline';

// Creamos la interfaz para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que calcula la suma total de tres precios
function calcularTotal(p1, p2, p3) {
  return p1 + p2 + p3;
}

// Pedimos los precios al usuario uno por uno
rl.question('Ingrese el precio del primer producto: ', (precio1) => {
  rl.question('Ingrese el precio del segundo producto: ', (precio2) => {
    rl.question('Ingrese el precio del tercer producto: ', (precio3) => {
      
      // Convertimos los valores a número
      const total = calcularTotal(
        parseFloat(precio1),
        parseFloat(precio2),
        parseFloat(precio3)
      );
      
      console.log(`La suma total de los tres productos es: $${total.toFixed(2)}`);
      
      rl.close();
    });
  });
});
