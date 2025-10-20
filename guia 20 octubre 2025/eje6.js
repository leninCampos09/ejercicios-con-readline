// Solicite al usuario una temperatura en grados celsius y cree una función que permita
// convertir esa temperatura Celsius a Fahrenheit. 


// Importamos la librería readline
import readline from 'readline';

// Creamos la interfaz para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que convierte Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Solicitamos la temperatura al usuario
rl.question('Ingrese la temperatura en grados Celsius: ', (input) => {
  const celsius = parseFloat(input);
  const fahrenheit = celsiusAFahrenheit(celsius);
  
  console.log(`${celsius}°C equivalen a ${fahrenheit.toFixed(2)}°F`);
  
  rl.close();
});
