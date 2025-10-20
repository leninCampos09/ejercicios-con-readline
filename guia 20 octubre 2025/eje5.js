// Solicite al usuario una cadena y utilice una función que permita devolver el texto en
// mayúsculas. 

// Importamos la librería readline
import readline from 'readline';

// Creamos la interfaz para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que convierte el texto a mayúsculas
function convertirAMayusculas(cadena) {
  return cadena.toUpperCase();
}

// Solicitamos la cadena al usuario
rl.question('Ingrese una palabra o frase: ', (input) => {
  const resultado = convertirAMayusculas(input);
  console.log(`Texto en mayúsculas: ${resultado}`);
  
  rl.close();
});
